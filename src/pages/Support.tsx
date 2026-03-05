import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { MarketSurvey } from "@/components/sections/MarketSurvey";
import { InquiryChat, InquiryChatHandle } from "@/components/chat/InquiryChat";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SupportPage() {
  const { t } = useTranslation();
  const chatRef = useRef<InquiryChatHandle>(null);

  const openChat = () => {
    chatRef.current?.openWithTrack({
      type: "general",
      initialMessage: "I need help with a general inquiry",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Customer Support
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We're here to help with any questions or concerns you may have about our products or services.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-evidence text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-6">
                Chat with our support team in real-time for immediate assistance.
              </p>
              <Button variant="industrial" onClick={openChat}>
                Start Chat
              </Button>
            </div>
            <div className="card-evidence text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-6">
                Send us an email and we'll respond within 24 hours.
              </p>
              <Button variant="industrial" asChild>
                <a href="mailto:support@zizaniastem.com">Send Email</a>
              </Button>
            </div>
            <div className="card-evidence text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Support</h3>
              <p className="text-muted-foreground mb-6">
                Call us during business hours for direct assistance.
              </p>
              <Button variant="industrial" asChild>
                <a href="https://wa.me/8618964098013" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-foreground">
                  What is the minimum order quantity?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  MOQ varies by product form and season. Fresh: 500kg minimum. Frozen: 1 ton minimum. Contact us for specific requirements.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-foreground">
                  Are samples available?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Product samples available for qualified inquiries. Shipping costs apply. Request through contact form.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-foreground">
                  Can packing be customized?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Custom packing configurations available for volume commitments. Discuss requirements during inquiry.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-foreground">
                  What are the shipping options?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We offer both air freight (2-3 days) and sea freight (15-20 days) options. The best option depends on your urgency and order size.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-foreground">
                  What payment methods do you accept?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We accept bank transfers, PayPal, credit cards, and Alipay. Payment terms can be discussed during the order process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Survey */}
      <MarketSurvey />

      {/* Chat Component */}
      <InquiryChat ref={chatRef} />
    </Layout>
  );
}
