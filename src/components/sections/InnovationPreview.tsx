import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const directions = [
  { title: "Biomass utilization", status: "Active" },
  { title: "Feed applications", status: "Pilot" },
  { title: "Leaf-based concepts", status: "Pilot" },
];

export function InnovationPreview() {
  return (
    <section className="section-industrial bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Applications beyond fresh produce
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Value-chain exploration across multiple directions.
          </p>
        </div>

        {/* Directions Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {directions.map((item) => (
            <div key={item.title} className="card-industrial text-center">
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.status}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="industrial" asChild>
            <Link to="/contact?type=innovation">Innovation Partnership</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
