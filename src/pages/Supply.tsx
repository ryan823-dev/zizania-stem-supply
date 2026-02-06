import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SystemBand } from "@/components/sections/SystemBand";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import harvestImage from "@/assets/harvest-stems.jpg";
import processingImage from "@/assets/processing.jpg";

const productForms = [
  {
    title: "Fresh",
    description: "Seasonal supply of freshly harvested stems. Cold chain maintained from field to distribution.",
    season: "Sep – Nov",
    storage: "0–4°C",
  },
  {
    title: "Frozen",
    description: "Year-round availability. IQF processing preserves texture and nutritional profile.",
    season: "Year-round",
    storage: "-18°C",
  },
  {
    title: "Processed",
    description: "Value-added preparations including vacuum-packed and pre-cut formats.",
    season: "Year-round",
    storage: "Per format",
  },
];

const handlingChecklist = [
  "Grading by size and quality",
  "Trimming and cleaning",
  "Cold-chain alignment",
  "Export packing standards",
  "Documentation preparation",
  "Quality inspection records",
];

const capabilities = [
  { label: "Scale", value: "Multi-region production" },
  { label: "Processing", value: "Preparation facilities" },
  { label: "Planning", value: "Seasonal forecasting" },
  { label: "Experience", value: "Agricultural export handling" },
];

const specifications = [
  { attribute: "Form", values: "Fresh / Frozen / Processed" },
  { attribute: "Grade", values: "Premium / Standard" },
  { attribute: "Size", values: "Small (10–15cm) / Medium (15–20cm) / Large (20–25cm)" },
  { attribute: "Cut Type", values: "Whole / Halved / Sliced / Diced" },
  { attribute: "Packing", values: "5kg / 10kg export cartons, bulk options available" },
  { attribute: "Storage", values: "Fresh: 0–4°C / Frozen: -18°C" },
  { attribute: "Shelf Life", values: "Fresh: 7–14 days / Frozen: 18 months" },
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Supply System</p>
              <h1 className="text-foreground">
                Global supply of edible Zizania latifolia stem
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Supply organized at origin and aligned with distribution needs. Water bamboo and wild rice stem available in multiple forms for international markets.
              </p>
            </div>
            <div className="hidden lg:block">
              <img src={harvestImage} alt="Harvested Manchurian wild rice stems" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SystemBand items={["Grading", "Trimming", "Packing", "Cold Chain", "Distribution"]} />

      {/* Product Forms */}
      <section id="forms" className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-foreground mb-8">Product Forms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {productForms.map((form) => (
              <div key={form.title} className="card-evidence">
                <h3 className="text-lg font-semibold text-foreground">{form.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {form.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs">
                  <span className="text-muted-foreground">Season: <span className="text-foreground font-medium">{form.season}</span></span>
                  <span className="text-muted-foreground">Storage: <span className="text-foreground font-medium">{form.storage}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-foreground mb-6">Handling</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Standardized handling from harvest to distribution point.
              </p>
              <div className="card-evidence">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                  Handling Checklist
                </p>
                <div className="space-y-0">
                  {handlingChecklist.map((item) => (
                    <div key={item} className="checklist-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                src={processingImage}
                alt="Processing facility"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="text-xs text-muted-foreground mt-2 tracking-wide">
                Handling aligned with distribution requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip
        statements={[
          "Handling aligned with distribution",
          "Cold chain from field to port",
          "Documentation supports clearance",
        ]}
      />

      {/* Capability */}
      <section className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-foreground mb-8">Capability</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="card-metric">
                <span className="metric-label">{cap.label}</span>
                <span className="text-sm font-medium text-foreground mt-2 block">{cap.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-foreground mb-6">Specifications</h2>
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
            <div className="mt-6">
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
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-foreground mb-6">Logistics</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Cold chain management tailored to product form. Fresh product requires refrigerated transport at 0–4°C. Frozen water bamboo shipped at -18°C in reefer containers.
                </p>
                <p>
                  Standard export documentation supported including phytosanitary certificates, certificates of origin, and product specifications.
                </p>
              </div>
            </div>
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Documentation Support
              </p>
              <div className="space-y-0">
                <div className="checklist-item">Phytosanitary certificates</div>
                <div className="checklist-item">Certificate of origin</div>
                <div className="checklist-item">Product specifications</div>
                <div className="checklist-item">Packing list</div>
                <div className="checklist-item">Commercial invoice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-foreground mb-8">Frequently Asked</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-primary-foreground">
              Ready to discuss supply requirements?
            </h2>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact?type=supply">Contact for Supply Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
