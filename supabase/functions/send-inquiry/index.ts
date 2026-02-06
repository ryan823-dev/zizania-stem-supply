import { Resend } from "npm:resend@4.0.0";

// Allowed origins
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

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!isOriginAllowed(origin)) {
    return new Response(
      JSON.stringify({ error: "Forbidden" }),
      { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { summary, messages } = await req.json();

    if (!summary || typeof summary !== "string" || summary.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Summary is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // Build conversation transcript for context
    let transcript = "";
    if (messages && Array.isArray(messages)) {
      transcript = messages
        .map((m: { role: string; content: string }) => `[${m.role.toUpperCase()}]: ${m.content}`)
        .join("\n\n");
    }

    const requestId = crypto.randomUUID().slice(0, 8);
    console.log(`[${requestId}] Sending inquiry summary email`);

    const { error: emailError } = await resend.emails.send({
      from: "ZizaniaStem Inquiry <noreply@zizaniastem.com>",
      to: ["support@zizaniastem.com"],
      subject: `New Inquiry — ZizaniaStem`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 12px;">New Inquiry Received</h2>
          
          <div style="background: #f9f9f9; border-radius: 8px; padding: 16px; margin: 16px 0;">
            <h3 style="color: #333; margin-top: 0;">Inquiry Summary</h3>
            <pre style="white-space: pre-wrap; font-family: inherit; color: #444; line-height: 1.6; margin: 0;">${escapeHtml(summary)}</pre>
          </div>

          ${transcript ? `
          <details style="margin-top: 24px;">
            <summary style="cursor: pointer; color: #666; font-size: 14px;">Full Conversation Transcript</summary>
            <pre style="white-space: pre-wrap; font-family: inherit; color: #555; line-height: 1.5; font-size: 13px; margin-top: 12px; padding: 12px; background: #fafafa; border-radius: 6px;">${escapeHtml(transcript)}</pre>
          </details>
          ` : ""}
          
          <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 12px;">
            Sent automatically by ZizaniaStem Inquiry System · ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error(`[${requestId}] Resend error:`, emailError);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[${requestId}] Inquiry email sent successfully to support@zizaniastem.com`);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("send-inquiry error:", e);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
