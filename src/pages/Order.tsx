import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
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

const productForms = [
  { value: "fresh", label: "Fresh" },
  { value: "frozen", label: "Frozen" },
  { value: "processed", label: "Processed" },
];

const productGrades = [
  { value: "premium", label: "Premium" },
  { value: "standard", label: "Standard" },
];

const productSizes = [
  { value: "small", label: "Small (10–15cm)" },
  { value: "medium", label: "Medium (15–20cm)" },
  { value: "large", label: "Large (20–25cm)" },
];

const cutTypes = [
  { value: "whole", label: "Whole" },
  { value: "halved", label: "Halved" },
  { value: "sliced", label: "Sliced" },
  { value: "diced", label: "Diced" },
];

const paymentMethods = [
  { value: "bank", label: "Bank Transfer" },
  { value: "paypal", label: "PayPal" },
  { value: "credit_card", label: "Credit Card" },
  { value: "alipay", label: "Alipay" },
];

const shippingMethods = [
  { value: "air", label: "Air Freight", leadTime: "2-3 days" },
  { value: "sea", label: "Sea Freight", leadTime: "15-20 days" },
];

const orderSchema = z.object({
  // Customer Information
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  country: z.string().trim().min(1, "Country is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(50),
  address: z.string().trim().min(1, "Address is required").max(500),
  
  // Product Details
  productForm: z.string().min(1, "Please select product form"),
  productGrade: z.string().min(1, "Please select product grade"),
  productSize: z.string().min(1, "Please select product size"),
  cutType: z.string().min(1, "Please select cut type"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  
  // Shipping & Payment
  shippingMethod: z.string().min(1, "Please select shipping method"),
  paymentMethod: z.string().min(1, "Please select payment method"),
  
  // Additional Information
  specialInstructions: z.string().trim().max(1000).optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

export default function OrderPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    address: "",
    productForm: "",
    productGrade: "",
    productSize: "",
    cutType: "",
    quantity: 1,
    shippingMethod: "",
    paymentMethod: "",
    specialInstructions: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof OrderFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = orderSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof OrderFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof OrderFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    toast.success("Order submitted successfully! We will contact you within 24 hours to confirm details.");
    navigate("/thank-you");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Order Now
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Place your international order for premium water bamboo products
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="section-industrial bg-card">
        <div className="container">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Customer Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Customer Information</h2>
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
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
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
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 234 567 8900"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Address *
                </label>
                <Textarea
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Full address including city, state, and postal code"
                  rows={3}
                  className={errors.address ? "border-destructive" : ""}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-destructive">{errors.address}</p>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Product Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Form *
                  </label>
                  <Select
                    value={formData.productForm}
                    onValueChange={(value) => handleChange("productForm", value)}
                  >
                    <SelectTrigger className={errors.productForm ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select form" />
                    </SelectTrigger>
                    <SelectContent>
                      {productForms.map((form) => (
                        <SelectItem key={form.value} value={form.value}>
                          {form.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productForm && (
                    <p className="mt-1 text-sm text-destructive">{errors.productForm}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Grade *
                  </label>
                  <Select
                    value={formData.productGrade}
                    onValueChange={(value) => handleChange("productGrade", value)}
                  >
                    <SelectTrigger className={errors.productGrade ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {productGrades.map((grade) => (
                        <SelectItem key={grade.value} value={grade.value}>
                          {grade.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productGrade && (
                    <p className="mt-1 text-sm text-destructive">{errors.productGrade}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Size *
                  </label>
                  <Select
                    value={formData.productSize}
                    onValueChange={(value) => handleChange("productSize", value)}
                  >
                    <SelectTrigger className={errors.productSize ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {productSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productSize && (
                    <p className="mt-1 text-sm text-destructive">{errors.productSize}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cut Type *
                  </label>
                  <Select
                    value={formData.cutType}
                    onValueChange={(value) => handleChange("cutType", value)}
                  >
                    <SelectTrigger className={errors.cutType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select cut type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cutTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.cutType && (
                    <p className="mt-1 text-sm text-destructive">{errors.cutType}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Quantity (kg) *
                </label>
                <Input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", parseInt(e.target.value) || 1)}
                  className={errors.quantity ? "border-destructive" : ""}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-destructive">{errors.quantity}</p>
                )}
              </div>
            </div>

            {/* Shipping & Payment */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping & Payment</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Shipping Method *
                  </label>
                  <Select
                    value={formData.shippingMethod}
                    onValueChange={(value) => handleChange("shippingMethod", value)}
                  >
                    <SelectTrigger className={errors.shippingMethod ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      {shippingMethods.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          {method.label} ({method.leadTime})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.shippingMethod && (
                    <p className="mt-1 text-sm text-destructive">{errors.shippingMethod}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Payment Method *
                  </label>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleChange("paymentMethod", value)}
                  >
                    <SelectTrigger className={errors.paymentMethod ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          {method.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.paymentMethod && (
                    <p className="mt-1 text-sm text-destructive">{errors.paymentMethod}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Additional Information</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Instructions
                </label>
                <Textarea
                  value={formData.specialInstructions}
                  onChange={(e) => handleChange("specialInstructions", e.target.value)}
                  placeholder="Any special requirements or instructions..."
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-border">
              <Button
                type="submit"
                variant="industrial"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? "Processing Order..." : "Submit Order"}
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                By submitting this form, you agree to our terms and conditions. We will contact you within 24 hours to confirm your order details and provide payment instructions.
              </p>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
