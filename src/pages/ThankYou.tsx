import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-8">
              <CheckCircle size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your order has been submitted successfully. We will contact you within 24 hours to confirm your order details and provide payment instructions.
            </p>
            <div className="space-y-4">
              <Button variant="industrial" size="lg" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/supply">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              What Happens Next
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    We will send you an email confirming receipt of your order within 1 hour.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Details Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your order details and contact you within 24 hours to confirm everything is correct.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Payment Instructions</h3>
                  <p className="text-sm text-muted-foreground">
                    We will provide you with detailed payment instructions based on your selected payment method.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Once payment is received, we will process your order and arrange for shipping according to your selected method.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We will provide you with tracking information once your order has been shipped.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Need Assistance?
            </h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about your order, please don't hesitate to contact us.
            </p>
            <Button variant="industrial" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
