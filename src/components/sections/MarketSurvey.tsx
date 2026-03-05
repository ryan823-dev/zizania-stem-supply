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
import { useTranslation } from "react-i18next";

const surveySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  country: z.string().trim().min(1, "Country is required").max(100),
  heardFrom: z.string().min(1, "Please select an option"),
  interest: z.string().min(1, "Please select an option"),
  satisfaction: z.string().min(1, "Please select an option"),
  feedback: z.string().trim().max(1000).optional(),
  suggestions: z.string().trim().max(1000).optional(),
});

type SurveyFormData = z.infer<typeof surveySchema>;

interface MarketSurveyProps {
  variant?: "section" | "page";
}

export function MarketSurvey({ variant = "section" }: MarketSurveyProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<SurveyFormData>({
    name: "",
    email: "",
    country: "",
    heardFrom: "",
    interest: "",
    satisfaction: "",
    feedback: "",
    suggestions: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SurveyFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof SurveyFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = surveySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SurveyFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof SurveyFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast.success("Thank you for your feedback! We appreciate your input.");
    setFormData({
      name: "",
      email: "",
      country: "",
      heardFrom: "",
      interest: "",
      satisfaction: "",
      feedback: "",
      suggestions: "",
    });
  };

  const isPage = variant === "page";

  return (
    <section className={isPage ? "section-industrial bg-background" : "section-industrial bg-card"}>
      <div className={isPage ? "container" : "container max-w-4xl"}>
        {!isPage && (
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Market Survey
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Help Us Improve Our Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your feedback is valuable to us. Please take a moment to share your thoughts and suggestions.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                How did you hear about us? *
              </label>
              <Select
                value={formData.heardFrom}
                onValueChange={(value) => handleChange("heardFrom", value)}
              >
                <SelectTrigger className={errors.heardFrom ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="search_engine">Search Engine</SelectItem>
                  <SelectItem value="social_media">Social Media</SelectItem>
                  <SelectItem value="friend">Friend or Colleague</SelectItem>
                  <SelectItem value="trade_show">Trade Show</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.heardFrom && (
                <p className="mt-1 text-sm text-destructive">{errors.heardFrom}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                What interests you most? *
              </label>
              <Select
                value={formData.interest}
                onValueChange={(value) => handleChange("interest", value)}
              >
                <SelectTrigger className={errors.interest ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresh_product">Fresh Product</SelectItem>
                  <SelectItem value="frozen_product">Frozen Product</SelectItem>
                  <SelectItem value="processed_product">Processed Product</SelectItem>
                  <SelectItem value="cultivation">Cultivation Information</SelectItem>
                  <SelectItem value="innovation">Innovation Partnership</SelectItem>
                </SelectContent>
              </Select>
              {errors.interest && (
                <p className="mt-1 text-sm text-destructive">{errors.interest}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              How satisfied are you with our website? *
            </label>
            <Select
              value={formData.satisfaction}
              onValueChange={(value) => handleChange("satisfaction", value)}
            >
              <SelectTrigger className={errors.satisfaction ? "border-destructive" : ""}>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="very_satisfied">Very Satisfied</SelectItem>
                <SelectItem value="satisfied">Satisfied</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="dissatisfied">Dissatisfied</SelectItem>
                <SelectItem value="very_dissatisfied">Very Dissatisfied</SelectItem>
              </SelectContent>
            </Select>
            {errors.satisfaction && (
              <p className="mt-1 text-sm text-destructive">{errors.satisfaction}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Feedback
            </label>
            <Textarea
              value={formData.feedback}
              onChange={(e) => handleChange("feedback", e.target.value)}
              placeholder="Please share any feedback about our products or services..."
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Suggestions for Improvement
            </label>
            <Textarea
              value={formData.suggestions}
              onChange={(e) => handleChange("suggestions", e.target.value)}
              placeholder="What would you like to see us improve or add..."
              rows={4}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="industrial"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Survey"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
