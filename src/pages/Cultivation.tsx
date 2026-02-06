import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import cultivationImage from "@/assets/cultivation.jpg";
import heroImage from "@/assets/hero-field.jpg";

const cultivationStructure = [
  {
    title: "Production Base",
    description: "Central cultivation facility with controlled growing conditions. Foundation for quality planting materials and technical standards.",
  },
  {
    title: "Cooperative Farming Network",
    description: "Extended cultivation through partner farms following standardized practices. Enables production scale while maintaining consistency.",
  },
  {
    title: "Technical Guidance",
    description: "Agronomic support covering water management, pest control, and harvest timing. Field guidance ensures yield stability.",
  },
  {
    title: "Planting Materials",
    description: "Propagation of quality rhizomes and seedlings. Material selection for regional adaptation and disease resistance.",
  },
];

const focusAreas = [
  {
    title: "Yield Stability",
    description: "Consistent production volumes through standardized cultivation practices and seasonal planning.",
  },
  {
    title: "Field Consistency",
    description: "Uniform product quality across growing sites through technical oversight and grading standards.",
  },
  {
    title: "Production Coordination",
    description: "Aligned harvesting and processing schedules to meet supply commitments.",
  },
];

const technicalAspects = [
  "Water depth management for stem development",
  "Nutrient programs for commercial production",
  "Pest and disease monitoring protocols",
  "Harvest timing optimization",
  "Post-harvest handling at field level",
];

export default function CultivationPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Origin-based cultivation structure
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Zizania latifolia cultivation organized through production base and cooperative farming network. Technical guidance supports consistent output for water bamboo supply.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <img
          src={heroImage}
          alt="Water bamboo cultivation fields"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Cultivation Structure */}
      <section id="base" className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Cultivation Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cultivationStructure.map((item) => (
              <div key={item.title} className="card-industrial">
                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Production Focus
              </h2>
              <div className="space-y-8">
                {focusAreas.map((area) => (
                  <div key={area.title}>
                    <h3 className="text-lg font-medium text-foreground">{area.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={cultivationImage}
                alt="Cultivation practice"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Guidance */}
      <section id="guidance" className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Technical Guidance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Agronomic expertise applied across production network. Technical support covers key aspects of wild rice stem cultivation.
            </p>
            <ul className="space-y-4">
              {technicalAspects.map((aspect) => (
                <li key={aspect} className="flex items-start gap-4 text-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                  {aspect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Planting Materials */}
      <section id="materials" className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Planting Materials
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Quality water bamboo planting materials produced at production base. Rhizome selection focuses on vigor, yield potential, and adaptation to regional conditions.
              </p>
              <p className="leading-relaxed">
                Material distribution supports cooperative network establishment and expansion. Technical guidance accompanies material supply for successful cultivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Interested in cultivation cooperation?
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Discussion open for production partnerships and technical cooperation.
            </p>
            <div className="mt-8">
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact?type=cultivation">Discuss Cultivation Cooperation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
