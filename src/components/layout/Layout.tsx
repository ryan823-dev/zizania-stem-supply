import { ReactNode, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InquiryChat, type InquiryChatHandle } from "@/components/chat/InquiryChat";
import { IntakeBand, type InquiryTrack } from "@/components/sections/IntakeModule";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const chatRef = useRef<InquiryChatHandle>(null);

  const openTrack = (track: InquiryTrack) => {
    chatRef.current?.openWithTrack(track);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16 md:pt-20">
        <IntakeBand onSelectTrack={openTrack} />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
      <InquiryChat ref={chatRef} />
    </div>
  );
}
