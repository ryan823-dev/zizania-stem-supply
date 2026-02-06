import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const pipelineStages = [
  {
    stage: "Concept",
    description: "Research and feasibility assessment for new applications.",
  },
  {
    stage: "Pilot",
    description: "Small-scale testing and process development.",
  },
  {
    stage: "Scale",
    description: "Commercial production preparation and market introduction.",
  },
];

const currentDirections = [
  {
    title: "Biomass Utilization",
    status: "Active",
    description: "Processing of cultivation byproducts into value-added materials. Fiber extraction and composting applications under development.",
  },
  {
    title: "Feed Applications",
    status: "Pilot",
    description: "Testing of leaf and stem residues for animal nutrition. Palatability and nutritional analysis in progress with research partners.",
  },
  {
    title: "Leaf-based Concepts",
    status: "Pilot",
    description: "Exploration of Zizania leaf applications including wrapping materials and natural packaging concepts.",
  },
];

export default function InnovationPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Value-chain exploration
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Applications explored beyond fresh produce. Innovation pipeline structured for systematic development of new uses.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Model */}
      <section className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Development Pipeline
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pipelineStages.map((item, index) => (
              <div key={item.stage} className="relative">
                <div className="card-industrial h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground text-lg font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-medium text-foreground">{item.stage}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < pipelineStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Directions */}
      <section className="section-industrial bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Current Directions
          </h2>
          <div className="space-y-8">
            {currentDirections.map((direction) => (
              <div key={direction.title} className="card-industrial">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-medium text-foreground">{direction.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground">
                    {direction.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {direction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Partnership Approach
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Innovation development through collaborative partnerships. Open to working with research institutions, processors, and market partners.
              </p>
              <p className="leading-relaxed">
                Raw material supply and field-level expertise available to support joint development projects. Structured approach from concept through commercialization.
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
              Interested in innovation partnership?
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Connect to discuss joint development opportunities.
            </p>
            <div className="mt-8">
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact?type=innovation">Innovation Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
