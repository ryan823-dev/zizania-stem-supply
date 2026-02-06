import { useState, useCallback, useRef, useEffect } from "react";
import type { InquiryTrack } from "@/components/sections/IntakeModule";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/inquiry-chat`;
const SEND_INQUIRY_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-inquiry`;

// Detect if an assistant message contains a completed inquiry summary
const SUMMARY_PATTERN = /inquiry summary[:\s]/i;

async function sendInquiryEmail(summary: string, messages: ChatMessage[]) {
  try {
    const resp = await fetch(SEND_INQUIRY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ summary, messages }),
    });
    if (!resp.ok) {
      console.error("Failed to send inquiry email:", resp.status);
    } else {
      console.log("Inquiry email sent successfully");
    }
  } catch (e) {
    console.error("Error sending inquiry email:", e);
  }
}

const TRACK_LABELS: Record<InquiryTrack, string> = {
  supply: "Supply",
  cultivation: "Cultivation",
  processing: "Processing",
  innovation: "Innovation",
};

function buildOpeningMessage(track?: InquiryTrack): ChatMessage {
  if (track) {
    return {
      role: "assistant",
      content: `${TRACK_LABELS[track]} — noted. Let me collect the relevant details.`,
    };
  }
  return {
    role: "assistant",
    content: "Welcome. Start with your use case — supply, cultivation, processing, or innovation.",
  };
}

export function useInquiryChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([buildOpeningMessage()]);
  const [isLoading, setIsLoading] = useState(false);
  const activeTrackRef = useRef<InquiryTrack | undefined>();
  const abortRef = useRef<AbortController | null>(null);
  const emailSentRef = useRef(false);

  // When streaming finishes and last message is an assistant summary, send email
  useEffect(() => {
    if (isLoading || emailSentRef.current) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.role === "assistant" && SUMMARY_PATTERN.test(lastMsg.content)) {
      emailSentRef.current = true;
      sendInquiryEmail(lastMsg.content, messages);
    }
  }, [messages, isLoading]);

  const startWithTrack = useCallback(async (track: InquiryTrack) => {
    activeTrackRef.current = track;

    // Simulate the user selecting a track, then get the first AI response
    const systemUserMsg: ChatMessage = {
      role: "user",
      content: `I need assistance with ${TRACK_LABELS[track].toLowerCase()}.`,
    };

    setMessages([buildOpeningMessage(track)]);
    setIsLoading(true);

    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length >= 1) {
          // Replace the placeholder opening with the real streamed response
          if (prev.length === 1) {
            return [{ role: "assistant", content: assistantSoFar }];
          }
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      abortRef.current = new AbortController();

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [systemUserMsg] }),
        signal: abortRef.current.signal,
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => null);
        throw new Error(errData?.error || `Request failed (${resp.status})`);
      }

      if (!resp.body) throw new Error("No response stream");
      await processStream(resp.body, upsertAssistant);
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") return;
      console.error("Chat error:", e);
      const errorMsg = e instanceof Error ? e.message : "Connection error. Please try again.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠ ${errorMsg}` },
      ]);
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, []);

  const send = useCallback(async (input: string) => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      abortRef.current = new AbortController();

      const allMessages = [...messages, userMsg];

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
        signal: abortRef.current.signal,
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => null);
        throw new Error(errData?.error || `Request failed (${resp.status})`);
      }

      if (!resp.body) throw new Error("No response stream");
      await processStream(resp.body, upsertAssistant);
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") return;
      console.error("Chat error:", e);
      const errorMsg = e instanceof Error ? e.message : "Connection error. Please try again.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠ ${errorMsg}` },
      ]);
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, [messages, isLoading]);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    activeTrackRef.current = undefined;
    emailSentRef.current = false;
    setMessages([buildOpeningMessage()]);
    setIsLoading(false);
  }, []);

  return { messages, isLoading, send, reset, startWithTrack };
}

async function processStream(
  body: ReadableStream<Uint8Array>,
  onChunk: (text: string) => void
) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);

      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;

      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") {
        streamDone = true;
        break;
      }

      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onChunk(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  // Final flush
  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onChunk(content);
      } catch { /* ignore */ }
    }
  }
}
