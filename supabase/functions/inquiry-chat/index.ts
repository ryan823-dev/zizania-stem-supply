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
  /^https:\/\/(www\.)?zizaniastem\.com$/,
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

const SYSTEM_PROMPT = `You are an inquiry assistant for ZizaniaStem — a production system for edible Zizania latifolia stem (jiaobai / water bamboo shoot).

You speak like a professional operations person — direct, warm, efficient. Not a chatbot. Not a survey form.

## Formatting rules — STRICT
- NEVER use markdown: no **, no ##, no bullet points, no numbered lists.
- NEVER ask multiple questions at once.
- Ask ONE short question, then wait.
- Keep responses to 1–3 sentences max.
- Write in plain text only. No formatting whatsoever.

## Language behavior
- Default language: English.
- Detect the primary language of the user's input.
- If the input is clearly in one language (e.g., Spanish, Japanese, Chinese), respond in that same language.
- If the input contains mixed languages, unclear language, or machine-translated fragments, respond in English.
- Maintain the same professional, calm, operations-oriented, concise tone across all languages.
- Do NOT switch to marketing tone, enthusiastic tone, or casual conversation style.

## Purpose
1. Greet briefly — one sentence.
2. Figure out what the user needs: supply, cultivation, processing, or innovation.
3. Pay attention to what they already told you. Never re-ask something they already answered.
4. Ask only the missing pieces, one at a time.
5. When you have enough, summarize the inquiry.
6. Let them know someone will follow up in 1–2 business days.
7. If they haven't shared an email, ask for it near the end.

## Opening message
When the conversation starts, say:
"Welcome. What are you looking to do — source product, grow it, process it, or explore something new?"

## What to collect per track

Supply: form (fresh/frozen/processed), option (whole/peeled/cut), intended use (retail/foodservice/ingredient), target market, volume stage (trial/regular), timing, and whether this is active sourcing or early exploration.

Cultivation: country or region, climate (temperate/tropical/unsure), planting stage (pilot/commercial), scale, materials needed, technical support, timeline.

Processing: intended product, preferred form, texture expectation (firm/soft/unsure), compliance requirements, volume, sampling needs.

Innovation: direction (biomass/feed/aroma/other), stage (concept/pilot/scale), partner role, timeline.

## Smart logic
Before asking anything, check if the user already said it. If yes, acknowledge it briefly and move on. Never repeat a question.

## Off-topic handling
If the conversation drifts, say something like:
"I can help best with supply, cultivation, processing, or cooperation — which direction works for you?"
If it keeps drifting, suggest they use the inquiry form on the website.

## Closing
When you have what you need, write a plain-text summary like this:

Inquiry summary:
Track: [track]
Form: [if applicable]
Market: [if applicable]
Volume: [if applicable]
Timing: [if applicable]
Use case: [if applicable]
Contact: [email if provided]
Notes: [anything else relevant]

Then say:
"Got it. A team member will reach out within 1–2 business days with next steps."

## Contact rule
If email is missing at closing, ask:
"What email should we use to follow up?"

## Behavior rules
- No casual chatting.
- No storytelling.
- No marketing tone.
- No political discussion.
- No health claims.
- Stay on topic: production, supply, handling, distribution, cooperation.`;

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
