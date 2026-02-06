import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import harvestImage from "@/assets/harvest-stems.jpg";

const specItems = [
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

export function SupplyPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-10">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            {/* Spec Card */}
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Product Specification
              </p>
              <dl className="space-y-3">
                {specItems.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4 py-1 border-b border-border last:border-b-0">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm text-foreground text-right font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Handling Steps */}
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Handling Process
              </p>
              <div className="grid grid-cols-2 gap-4">
                {handlingSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-accent/60 mt-0.5">{step.step}</span>
                    <div>
                      <span className="text-sm font-medium text-foreground block">{step.label}</span>
                      <span className="text-xs text-muted-foreground">{step.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Note */}
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-1">
                Seasonal Note
              </p>
              <p className="text-sm text-foreground">
                Fresh supply: Sep–Nov peak season. Frozen available year-round.
              </p>
            </div>

            <Button variant="industrial" asChild>
              <Link to="/supply#specs">Request Full Spec Sheet</Link>
            </Button>
          </div>

          {/* Image */}
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
