import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import harvestImage from "@/assets/harvest-stems.jpg";

const specRows = [
  { label: "Forms", value: "Fresh / Frozen / Processed" },
  { label: "Options", value: "Whole / Peeled / Cut" },
  { label: "Packing", value: "Export cartons" },
  { label: "Markets", value: "North America / Australia" },
];

const handlingSteps = [
  { step: "01", label: "Grading", detail: "Size & quality classification" },
  { step: "02", label: "Trimming", detail: "Precision preparation" },
  { step: "03", label: "Packing", detail: "Export-standard cartons" },
  { step: "04", label: "Cold Chain", detail: "Temperature-controlled" },
];

const planningItems = [
  { label: "Peak Season", value: "Sep – Nov" },
  { label: "Frozen", value: "Year-round" },
  { label: "Lead Time", value: "4–6 weeks" },
];

export function SupplyPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        {/* Anchor line */}
        <p className="text-sm font-medium text-foreground tracking-wide mb-8 border-l-2 border-accent pl-3">
          Production structured at origin.
        </p>

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Supply
            </p>
            <h2 className="text-foreground leading-tight">
              Global supply structured at origin
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            Consistency · Handling · Planning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left — Supply System Panel */}
          <div className="border border-border bg-card">
            {/* Panel header */}
            <div className="px-5 py-3 border-b border-border bg-muted/40">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                Supply System Overview
              </span>
            </div>

            {/* Product Specification Block */}
            <div className="px-5 py-4 border-b border-border">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Product Specification
              </p>
              {specRows.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center py-2 ${
                    i < specRows.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Handling Structure Block */}
            <div className="px-5 py-4 border-b border-border">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Handling Structure
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {handlingSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-2.5">
                    <span className="text-[10px] font-bold text-accent/50 mt-0.5 leading-none">
                      {step.step}
                    </span>
                    <div className="leading-tight">
                      <span className="text-sm font-semibold text-foreground block">
                        {step.label}
                      </span>
                      <span className="text-[11px] text-muted-foreground leading-none">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Planning Strip */}
            <div className="px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Supply Planning
              </p>
              <div className="flex items-center divide-x divide-border">
                {planningItems.map((item) => (
                  <div key={item.label} className="flex-1 text-center px-2 first:pl-0 first:text-left last:pr-0 last:text-right">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel CTA */}
            <div className="px-5 py-4 border-t border-border bg-muted/30">
              <Button variant="industrial" size="sm" asChild>
                <Link to="/supply#specs">Request Full Spec Sheet</Link>
              </Button>
            </div>
          </div>

          {/* Right — Image */}
          <div>
            <img
              src={harvestImage}
              alt="Harvested water bamboo stems"
              className="w-full aspect-[4/3] object-cover"
            />
            <p className="text-xs text-muted-foreground mt-2 tracking-wide">
              Graded stems prepared for distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
