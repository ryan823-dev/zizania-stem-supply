import { ReactNode, useRef, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";
import { SkipToContent } from "@/components/ui/skip-to-content";
import { InquiryChat, type InquiryChatHandle } from "@/components/chat/InquiryChat";
import { IntakeBand, type InquiryTrack } from "@/components/sections/IntakeModule";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const chatRef = useRef<InquiryChatHandle>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openTrack = (track: InquiryTrack) => {
    chatRef.current?.openWithTrack(track);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <div className="pt-16 md:pt-20 pb-16 lg:pb-0">
        <IntakeBand onSelectTrack={openTrack} />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
      </div>
      <Footer />
      <InquiryChat ref={chatRef} />
      <MobileNav onMenuClick={handleMobileMenuClick} />
    </div>
  );
}
