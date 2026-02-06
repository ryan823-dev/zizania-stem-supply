import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// --- Configuration ---
const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES = 30;
const MAX_AI_TOKENS = 1024;
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_WINDOW_SECONDS = 600; // 10 minutes

// Allowed origins (project preview + published URLs)
const ALLOWED_ORIGIN_PATTERNS = [
  /^https:\/\/.*\.lovable\.app$/,
  /^https:\/\/.*\.lovable\.dev$/,
  /^http:\/\/localhost(:\d+)?$/,
];

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGIN_PATTERNS.some((pattern) => pattern.test(origin));
}

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && isOriginAllowed(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Vary": "Origin",
  };
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown";
}

// Simple hash to avoid storing raw IPs
async function hashKey(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input + "_inquiry_salt");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

const SYSTEM_PROMPT = `You are a structured inquiry assistant for ZizaniaStem — a production system for edible Zizania latifolia stem (jiaobai / water bamboo shoot).

You are NOT a casual chatbot. You are a professional inquiry handler.

## Language behavior
- Default language: English.
- If user writes in Chinese → reply in Chinese.
- Other languages → reply in English.
- Professional tone only. No marketing language. No storytelling.

## Purpose
1. Greet briefly.
2. Identify the user's need track (Supply / Cultivation / Processing / Innovation).
3. Recognize information the user has already provided.
4. Ask only missing questions — never repeat questions already answered.
5. Summarize the inquiry when complete.
6. Inform follow-up within 1–2 business days.
7. Encourage email sharing if missing.

## Opening message
When the conversation starts, say:
"Welcome. Start with your use case — supply, cultivation, processing, or innovation."

## Inquiry Tracks

### Supply
Collect only:
- Form (Fresh / Frozen / Processed)
- Option (Whole / Peeled / Cut)
- Intended use (Retail / Foodservice / Ingredient)
- Target market
- Volume stage (Trial / Regular)
- Timing
- Ask: "Is this for active sourcing or early exploration?"

### Cultivation
Collect:
- Country / region
- Climate (Temperate / Tropical / Unsure)
- Planting stage (Pilot / Commercial)
- Scale
- Materials needed
- Technical support required
- Timeline

### Processing
Collect:
- Intended product
- Preferred form
- Texture expectation (Firm / Soft / Unsure)
- Compliance requirement
- Volume
- Sampling requirement

### Innovation
Collect:
- Direction (Biomass / Feed / Aroma / Other)
- Stage (Concept / Pilot / Scale)
- Partner role
- Timeline

## Smart logic
Before asking any question, check if the user already provided the info.
- If yes: acknowledge and store it.
- If missing: ask only missing fields.
- NEVER ask the same information twice.

## Off-topic handling
If conversation drifts:
"I can best assist with supply, cultivation, processing, or cooperation. Which direction should we focus on?"
If repeated drift: ask user to submit the inquiry form on the website.

## Closing
When all required fields are collected, generate a summary:

Inquiry summary:
- Track: [track]
- Form: [if applicable]
- Market: [if applicable]
- Volume: [if applicable]
- Timing: [if applicable]
- Use case: [if applicable]
- Contact: [email if provided]
- Notes: [any additional context]

Then reply:
"We will send relevant information and a responsible team member will contact you within 1–2 business days to discuss next steps."

## Contact rule
If email is missing at closing, ask:
"Please share your email so we can follow up with relevant materials."

## Behavior rules
- No casual chatting
- No storytelling
- No marketing tone
- No political discussion
- No health claims
- Focus on: production, supply, handling, distribution, cooperation`;

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // --- Origin check ---
  if (!isOriginAllowed(origin)) {
    console.warn(`Blocked request from disallowed origin: ${origin}`);
    return new Response(
      JSON.stringify({ error: "Forbidden" }),
      { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // --- Input parsing & validation ---
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = body as { messages?: unknown };

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Limit number of messages
    if (messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({ error: "Conversation too long. Please start a new inquiry." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate each message
    for (const msg of messages) {
      if (!msg || typeof msg !== "object" || !msg.role || !msg.content) {
        return new Response(
          JSON.stringify({ error: "Invalid message format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (typeof msg.content !== "string" || msg.content.trim().length === 0) {
        return new Response(
          JSON.stringify({ error: "Message content cannot be empty" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (msg.content.length > MAX_MESSAGE_LENGTH) {
        return new Response(
          JSON.stringify({ error: `Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // --- Rate limiting ---
    const clientIp = getClientIp(req);
    const rateLimitKey = await hashKey(clientIp);

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: isAllowed, error: rlError } = await supabaseAdmin.rpc("check_rate_limit", {
      p_key: rateLimitKey,
      p_max_requests: RATE_LIMIT_MAX_REQUESTS,
      p_window_seconds: RATE_LIMIT_WINDOW_SECONDS,
    });

    if (rlError) {
      console.error("Rate limit check failed:", rlError.message);
      // Fail open — allow request but log the error
    } else if (isAllowed === false) {
      console.warn(`Rate limit exceeded for key: ${rateLimitKey.slice(0, 8)}...`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait a few minutes before trying again." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- AI service call ---
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service configuration error. Please try again later." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const requestId = crypto.randomUUID().slice(0, 8);
    console.log(`[${requestId}] Inquiry chat: ${messages.length} msgs, IP key: ${rateLimitKey.slice(0, 8)}..., last role: ${messages[messages.length - 1]?.role}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        max_tokens: MAX_AI_TOKENS,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[${requestId}] AI gateway error: ${response.status} ${errorText}`);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Service is temporarily busy. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Generic error for all other cases (402, 500, etc.)
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[${requestId}] AI stream started successfully`);

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("inquiry-chat error:", e);
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
