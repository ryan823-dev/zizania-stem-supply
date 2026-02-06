import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import harvestImage from "@/assets/harvest-stems.jpg";

const specItems = [
  { label: "Forms", value: "Fresh / Frozen / Processed" },
  { label: "Options", value: "Whole / Peeled / Cut" },
  { label: "Packing", value: "Export cartons" },
  { label: "Markets", value: "North America / Australia" },
];

export function SupplyPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Supply
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Global supply structured at origin
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Consistency. Handling. Planning.
            </p>

            {/* Spec Card */}
            <div className="mt-8 card-industrial">
              <dl className="space-y-4">
                {specItems.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4">
                    <dt className="text-sm text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm text-foreground text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <Button variant="industrial" asChild>
                <Link to="/supply#specs">Request Full Spec Sheet</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={harvestImage}
              alt="Harvested water bamboo stems"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
