import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Calendar, Clock } from "lucide-react";
import harvestImage from "@/assets/harvest-stems.jpg";

const specRows = [
  { label: "Forms", value: "Fresh / Frozen / Processed", icon: Package },
  { label: "Options", value: "Whole / Peeled / Cut", icon: Package },
  { label: "Packing", value: "Export cartons", icon: Package },
  { label: "Markets", value: "North America / Australia", icon: Truck },
];

const handlingSteps = [
  { step: "01", label: "Grading", detail: "Size & quality classification", icon: "📋" },
  { step: "02", label: "Trimming", detail: "Precision preparation", icon: "✂️" },
  { step: "03", label: "Packing", detail: "Export-standard cartons", icon: "📦" },
  { step: "04", label: "Cold Chain", detail: "Temperature-controlled", icon: "❄️" },
];

const planningItems = [
  { label: "Peak Season", value: "Sep – Nov", icon: Calendar },
  { label: "Frozen", value: "Year-round", icon: Snowflake },
  { label: "Lead Time", value: "4–6 weeks", icon: Clock },
];

const Snowflake = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="12" y1="2" x2="12" y2="22" transform="rotate(60 12 12)" />
    <line x1="12" y1="2" x2="12" y2="22" transform="rotate(120 12 12)" />
  </svg>
);

export function SupplyPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        {/* Anchor line */}
        <p className="text-sm font-medium text-foreground tracking-wide mb-8 border-l-2 border-accent pl-3 animate-on-scroll">
          Production structured for ingredient supply and distribution.
        </p>

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-8 animate-on-scroll">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Supply
            </p>
            <h2 className="text-foreground leading-tight font-bold">
              Supply system structured at origin
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            Consistency · Handling · Planning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left — Supply System Panel */}
          <div className="card-industrial animate-on-scroll hover:shadow-lg transition-shadow duration-300">
            {/* Panel header */}
            <div className="px-5 py-3 border-b border-border bg-muted/40 rounded-t-lg">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                Supply System Overview
              </span>
            </div>

            {/* Product Specification Block */}
            <div className="px-5 py-4 border-b border-border">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Product Specification
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specRows.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <Icon size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium block">
                          {item.label}
                        </span>
                        <span className="text-sm text-foreground font-medium block truncate">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Handling Structure Block */}
            <div className="px-5 py-4 border-b border-border">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Handling Structure
              </p>
              <div className="grid grid-cols-2 gap-3">
                {handlingSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
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
                {planningItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex-1 text-center px-2 first:pl-0 first:text-left last:pr-0 last:text-right group">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <Icon size={14} className="text-primary group-hover:text-accent transition-colors" />
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Panel CTA */}
            <div className="px-5 py-4 border-t border-border bg-muted/30 rounded-b-lg">
              <Button 
                variant="industrial" 
                size="sm" 
                asChild
                className="w-full group"
              >
                <Link to="/supply#specs" className="flex items-center gap-2">
                  Request Full Spec Sheet
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right — Image fills panel height */}
          <div className="flex flex-col animate-on-scroll">
            <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-lg group">
              <img
                src={harvestImage}
                alt="Harvested water bamboo stems"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 tracking-wide">
              Graded stems prepared for distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
