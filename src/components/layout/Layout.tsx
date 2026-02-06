import { ReactNode, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InquiryChat, type InquiryChatHandle } from "@/components/chat/InquiryChat";
import type { InquiryTrack } from "@/components/sections/IntakeModule";

interface LayoutProps {
  children: ReactNode | ((openTrack: (track: InquiryTrack) => void) => ReactNode);
}

export function Layout({ children }: LayoutProps) {
  const chatRef = useRef<InquiryChatHandle>(null);

  const openTrack = (track: InquiryTrack) => {
    chatRef.current?.openWithTrack(track);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {typeof children === "function" ? children(openTrack) : children}
      </main>
      <Footer />
      <InquiryChat ref={chatRef} />
    </div>
  );
}
