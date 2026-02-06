import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") || undefined;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Contact
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Inquiry for supply, cultivation cooperation, or innovation partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-medium text-foreground mb-8">
                Direct Contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:support@zizaniastem.com"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      support@zizaniastem.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/8618964098013"
                      className="text-foreground hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +86 189 6409 8013
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inquiries typically receive response within 2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-medium text-foreground mb-8">
                Inquiry Form
              </h2>
              <ContactBlock variant="page" defaultType={defaultType} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
