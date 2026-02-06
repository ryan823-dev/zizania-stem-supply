import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const inquiryTypes = [
  { value: "supply", label: "Supply Inquiry" },
  { value: "samples", label: "Sample Request" },
  { value: "cultivation", label: "Cultivation Cooperation" },
  { value: "innovation", label: "Innovation Partnership" },
  { value: "other", label: "Other" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  country: z.string().trim().min(1, "Country is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  whatsapp: z.string().trim().max(50).optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactBlockProps {
  variant?: "section" | "page";
  defaultType?: string;
}

export function ContactBlock({ variant = "section", defaultType }: ContactBlockProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    country: "",
    email: "",
    whatsapp: "",
    inquiryType: defaultType || "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast.success("Inquiry submitted successfully. We will respond within 2 business days.");
    setFormData({
      name: "",
      company: "",
      country: "",
      email: "",
      whatsapp: "",
      inquiryType: "",
      message: "",
    });
  };

  const isPage = variant === "page";

  return (
    <section className={isPage ? "" : "section-industrial bg-card"}>
      <div className={isPage ? "" : "container"}>
        {!isPage && (
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Inquiry for supply, cultivation, or innovation
            </h2>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <Input
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Country *
              </label>
              <Input
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                placeholder="Your country"
                className={errors.country ? "border-destructive" : ""}
              />
              {errors.country && (
                <p className="mt-1 text-sm text-destructive">{errors.country}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                WhatsApp
              </label>
              <Input
                value={formData.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Inquiry Type *
              </label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value) => handleChange("inquiryType", value)}
              >
                <SelectTrigger className={errors.inquiryType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-destructive">{errors.inquiryType}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Your inquiry details..."
              rows={5}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="industrial"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
