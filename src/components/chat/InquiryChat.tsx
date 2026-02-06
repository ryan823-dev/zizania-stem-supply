import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInquiryChat, type ChatMessage } from "@/hooks/useInquiryChat";

function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}

export function InquiryChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, send, reset } = useInquiryChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    send(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Floating trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Open inquiry assistant"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">Inquiry</span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] flex flex-col bg-background border border-border rounded shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
            <div>
              <p className="text-sm font-semibold text-foreground">Inquiry Assistant</p>
              <p className="text-xs text-muted-foreground">Supply · Cultivation · Processing</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={reset}
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Reset conversation"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <ChatBubble key={i} message={msg} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded px-3 py-2 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">·</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>·</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>·</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-border px-3 py-2 flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your inquiry..."
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none max-h-20 py-2"
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              disabled={!input.trim() || isLoading}
              className="shrink-0 h-8 w-8"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
