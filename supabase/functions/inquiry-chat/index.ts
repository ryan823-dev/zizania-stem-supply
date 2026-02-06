import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log(`Inquiry chat: ${messages.length} messages, last role: ${messages[messages.length - 1]?.role}`);

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
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Service is temporarily busy. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service quota exceeded." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("inquiry-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
