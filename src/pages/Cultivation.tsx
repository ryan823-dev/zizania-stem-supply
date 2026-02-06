import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SystemBand } from "@/components/sections/SystemBand";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import cultivationImage from "@/assets/cultivation.jpg";
import heroImage from "@/assets/hero-field.jpg";

const cultivationStructure = [
  {
    title: "Production Base",
    description: "Central cultivation facility with controlled growing conditions. Foundation for quality planting materials and technical standards.",
    type: "Core",
  },
  {
    title: "Cooperative Network",
    description: "Extended cultivation through partner farms following standardized practices. Enables scale while maintaining consistency.",
    type: "Extended",
  },
  {
    title: "Technical Guidance",
    description: "Agronomic support covering water management, pest control, and harvest timing. Field guidance ensures yield stability.",
    type: "Support",
  },
  {
    title: "Planting Materials",
    description: "Propagation of quality rhizomes and seedlings. Material selection for regional adaptation and disease resistance.",
    type: "Input",
  },
];

const focusMetrics = [
  { label: "Yield Stability", value: "Standardized practices" },
  { label: "Field Consistency", value: "Technical oversight" },
  { label: "Coordination", value: "Aligned schedules" },
];

const processSteps = [
  { label: "Site Preparation", detail: "Water & soil analysis" },
  { label: "Material Selection", detail: "Rhizome propagation" },
  { label: "Planting", detail: "Seasonal timing" },
  { label: "Water Management", detail: "Depth control" },
  { label: "Growth Monitoring", detail: "Pest & nutrient" },
  { label: "Harvest", detail: "Timing optimization" },
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
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Cultivation System</p>
            <h1 className="text-foreground">
              Origin-based cultivation structure
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Zizania latifolia cultivation organized through production base and cooperative farming network. Technical guidance supports consistent output for water bamboo supply.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner - tighter */}
      <section className="relative h-[30vh] md:h-[40vh]">
        <img src={heroImage} alt="Water bamboo cultivation fields" className="w-full h-full object-cover" />
      </section>

      <SystemBand items={["Base", "Network", "Guidance", "Materials", "Output"]} />

      {/* Cultivation Structure */}
      <section id="base" className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-foreground mb-8">Cultivation Structure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cultivationStructure.map((item) => (
              <div key={item.title} className="card-evidence">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium border border-accent/30 px-2 py-0.5">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Strip */}
      <div className="bg-background border-y border-border">
        <div className="container py-6 md:py-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-5">
            Cultivation Process
          </p>
          <div className="flex flex-wrap items-start gap-0">
            {processSteps.map((step, i) => (
              <div key={step.label} className="flex items-start">
                <div className="text-center px-2 md:px-4">
                  <span className="text-xs font-medium text-accent/60 block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground block">{step.label}</span>
                  <span className="text-xs text-muted-foreground mt-0.5 block">{step.detail}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <span className="text-muted-foreground/30 mt-4 mx-1 md:mx-2 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-foreground mb-6">Production Focus</h2>
              <div className="space-y-4">
                {focusMetrics.map((area) => (
                  <div key={area.label} className="flex justify-between items-center py-3 border-b border-border">
                    <h3 className="text-sm font-semibold text-foreground">{area.label}</h3>
                    <span className="text-sm text-muted-foreground">{area.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={cultivationImage} alt="Cultivation practice" className="w-full aspect-[4/3] object-cover" />
              <p className="text-xs text-muted-foreground mt-2 tracking-wide">
                Field-level cultivation management
              </p>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip
        statements={[
          "Cultivation supports supply stability",
          "Technical standards across network",
          "Material quality drives field output",
        ]}
      />

      {/* Technical Guidance */}
      <section id="guidance" className="section-industrial bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-foreground mb-4">Technical Guidance</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Agronomic expertise applied across production network. Technical support covers key aspects of wild rice stem cultivation.
              </p>
            </div>
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Technical Coverage
              </p>
              <div className="space-y-0">
                {technicalAspects.map((aspect) => (
                  <div key={aspect} className="checklist-item">{aspect}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planting Materials */}
      <section id="materials" className="section-industrial bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-foreground mb-4">Planting Materials</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Quality water bamboo planting materials produced at production base. Rhizome selection focuses on vigor, yield potential, and adaptation to regional conditions.
                </p>
                <p>
                  Material distribution supports cooperative network establishment and expansion. Technical guidance accompanies material supply for successful cultivation.
                </p>
              </div>
            </div>
            <div className="card-evidence">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">
                Material Standards
              </p>
              <div className="space-y-0">
                <div className="checklist-item">Disease-free rhizome selection</div>
                <div className="checklist-item">Regional adaptation testing</div>
                <div className="checklist-item">Propagation quality control</div>
                <div className="checklist-item">Distribution with guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-primary-foreground">Cultivation cooperation</h2>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Discussion open for production partnerships and technical cooperation.
              </p>
            </div>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact?type=cultivation">Discuss Cooperation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
