import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cultivationImage from "@/assets/cultivation.jpg";

const networkData = [
  { label: "Structure", value: "Production base + cooperative farms" },
  { label: "Materials", value: "Rhizome propagation & selection" },
  { label: "Guidance", value: "Water, pest, harvest management" },
  { label: "Output", value: "Consistent seasonal supply" },
];

const processSteps = [
  "Site preparation",
  "Planting materials",
  "Water management",
  "Growth monitoring",
  "Harvest timing",
  "Field-level handling",
];

export function CultivationPreview() {
  return (
    <section className="section-industrial bg-card">
      <div className="container">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Cultivation
          </p>
          <h2 className="text-foreground leading-tight">
            Cultivation through production base and cooperative network
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image + caption */}
          <div className="order-2 lg:order-1">
            <img
              src={cultivationImage}
              alt="Water bamboo cultivation field"
              className="w-full aspect-[4/3] object-cover"
            />
            <p className="text-xs text-muted-foreground mt-2 tracking-wide">
              Cooperative farming network — field-level coordination
            </p>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Network Card */}
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Production Network
              </p>
              <dl className="space-y-3">
                {networkData.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4 py-1 border-b border-border last:border-b-0">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm text-foreground text-right font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Process Steps */}
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Cultivation Process
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {processSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2 py-1.5 border-b border-border">
                    <span className="text-xs font-medium text-accent/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="industrial" asChild>
              <Link to="/contact?type=cultivation">Discuss Cultivation Cooperation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
