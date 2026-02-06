import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import harvestImage from "@/assets/harvest-stems.jpg";
import processingImage from "@/assets/processing.jpg";

const productForms = [
  {
    title: "Fresh",
    description: "Seasonal supply of freshly harvested stems. Cold chain maintained from field to distribution.",
  },
  {
    title: "Frozen",
    description: "Year-round availability. IQF processing preserves texture and nutritional profile.",
  },
  {
    title: "Processed",
    description: "Value-added preparations including vacuum-packed and pre-cut formats.",
  },
];

const handlingPoints = [
  "Grading by size and quality",
  "Trimming and cleaning",
  "Packing for export",
  "Cold-chain alignment",
];

const capabilities = [
  "Production scale across multiple growing regions",
  "Processing preparation facilities",
  "Seasonal planning and forecasting",
  "Prior agricultural export handling experience",
];

const specifications = [
  { attribute: "Form", values: "Fresh / Frozen / Processed" },
  { attribute: "Grade", values: "Premium / Standard" },
  { attribute: "Size", values: "Small (10-15cm) / Medium (15-20cm) / Large (20-25cm)" },
  { attribute: "Cut Type", values: "Whole / Halved / Sliced / Diced" },
  { attribute: "Packing", values: "5kg / 10kg export cartons, bulk options available" },
  { attribute: "Storage", values: "Fresh: 0-4°C / Frozen: -18°C" },
  { attribute: "Shelf Life", values: "Fresh: 7-14 days / Frozen: 18 months" },
];

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer: "MOQ varies by product form and season. Fresh: 500kg minimum. Frozen: 1 ton minimum. Contact for specific requirements.",
  },
  {
    question: "Are samples available?",
    answer: "Product samples available for qualified inquiries. Shipping costs apply. Request through contact form.",
  },
  {
    question: "Can packing be customized?",
    answer: "Custom packing configurations available for volume commitments. Discuss requirements during inquiry.",
  },
];

export default function SupplyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Global supply of edible Zizania latifolia stem
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Supply organized at origin and aligned with distribution needs. Water bamboo and wild rice stem available in multiple forms for international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Product Forms */}
      <section id="forms" className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Product Forms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productForms.map((form) => (
              <div key={form.title} className="card-industrial">
                <h3 className="text-xl font-medium text-foreground">{form.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {form.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Handling
              </h2>
              <ul className="space-y-4">
                {handlingPoints.map((point) => (
                  <li key={point} className="flex items-center gap-4 text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={processingImage}
                alt="Processing facility"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capability */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={harvestImage}
                alt="Harvested Manchurian wild rice stems"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Capability
              </h2>
              <ul className="space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-4 text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec) => (
                    <tr key={spec.attribute}>
                      <td className="font-medium">{spec.attribute}</td>
                      <td>{spec.values}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <Button variant="industrial" asChild>
                <Link to="/contact?type=supply">Request Full Specification Sheet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Logistics
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Cold chain management tailored to product form. Fresh product requires refrigerated transport at 0-4°C. Frozen water bamboo shipped at -18°C in reefer containers.
              </p>
              <p className="leading-relaxed">
                Standard export documentation supported including phytosanitary certificates, certificates of origin, and product specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
              Frequently Asked
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Ready to discuss supply requirements?
            </h2>
            <div className="mt-8">
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact?type=supply">Contact for Supply Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
