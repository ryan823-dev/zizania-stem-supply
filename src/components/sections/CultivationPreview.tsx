import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cultivationImage from "@/assets/cultivation.jpg";

const capabilities = [
  "Planting materials",
  "Seasonal management",
  "Technical support",
];

export function CultivationPreview() {
  return (
    <section className="section-industrial bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <img
              src={cultivationImage}
              alt="Water bamboo cultivation"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Cultivation
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Cultivation through production base and cooperative network
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Structured cultivation organized through production base and cooperative farming network.
            </p>

            {/* Capabilities */}
            <ul className="mt-8 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="industrial" asChild>
                <Link to="/contact?type=cultivation">Discuss Cultivation Cooperation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
