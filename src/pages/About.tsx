import { Layout } from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              About
            </h1>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ZizaniaStem represents a production and supply system focused on edible Zizania latifolia stem, known also as water bamboo, wild rice stem, or Manchurian wild rice stem.
              </p>
              <p>
                Operations are structured around origin-based production, with cultivation organized through a central production base and cooperative farming network. Supply capabilities span fresh, frozen, and processed formats for international distribution.
              </p>
              <p>
                Technical expertise accumulated through years of cultivation practice supports consistent production quality. Innovation activities explore value-chain applications beyond fresh produce.
              </p>
              <p>
                Industry expertise exists behind production planning and supply coordination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
