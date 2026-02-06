import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const directions = [
  {
    title: "Biomass Utilization",
    status: "Active",
    detail: "Stem and plant waste conversion for secondary applications",
  },
  {
    title: "Feed Applications",
    status: "Pilot",
    detail: "Livestock feed formulation from processing by-products",
  },
  {
    title: "Leaf-Based Concepts",
    status: "Pilot",
    detail: "Functional applications from Zizania latifolia leaf material",
  },
];

const pipeline = [
  { label: "Concept", detail: "Identification" },
  { label: "Pilot", detail: "Testing" },
  { label: "Scale", detail: "Production" },
];

export function InnovationPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Innovation
          </p>
          <h2 className="text-foreground leading-tight">
            Applications beyond fresh produce
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Value-chain exploration across biomass, feed, and functional material directions.
          </p>
        </div>

        {/* Pipeline Strip */}
        <div className="flex items-center gap-0 mb-10 overflow-x-auto">
          {pipeline.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="border border-border bg-card px-5 py-3 text-center min-w-[120px]">
                <span className="text-sm font-semibold text-foreground block">{step.label}</span>
                <span className="text-xs text-muted-foreground">{step.detail}</span>
              </div>
              {i < pipeline.length - 1 && (
                <span className="text-muted-foreground/40 mx-2 text-lg flex-shrink-0">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Directions Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {directions.map((item) => (
            <div key={item.title} className="card-evidence">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-accent font-medium border border-accent/30 px-2 py-0.5">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="industrial" asChild>
            <Link to="/contact?type=innovation">Innovation Partnership</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
