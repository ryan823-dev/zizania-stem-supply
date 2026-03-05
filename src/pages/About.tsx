import { Layout } from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              About ZizaniaStem
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Our journey from local cultivation to global supply
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8">Our Brand Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ZizaniaStem was born from a passion for sustainable agriculture and a vision to bring the unique taste and nutritional benefits of water bamboo to global markets. What began as a small local cultivation project has grown into a comprehensive production and supply system dedicated to delivering premium quality Zizania latifolia stem to customers worldwide.
              </p>
              <p>
                Our journey started in the fertile regions where water bamboo has been cultivated for centuries. We recognized the potential of this versatile vegetable and set out to create a sustainable supply chain that preserves its freshness and nutritional value from farm to table.
              </p>
              <p>
                Today, ZizaniaStem represents a commitment to quality, sustainability, and innovation. We work closely with local farmers through our cooperative network, ensuring fair practices and consistent production standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality, sustainably grown water bamboo to global markets while supporting local farming communities and promoting healthy eating habits worldwide.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading global supplier of water bamboo, recognized for our commitment to quality, sustainability, and innovation in the agricultural sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-industrial bg-card">
        <div className="container">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in every aspect of our operations, from cultivation to delivery.
              </p>
            </div>
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We implement eco-friendly practices to minimize our environmental footprint and preserve natural resources.
              </p>
            </div>
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new ways to improve our processes and develop value-added products.
              </p>
            </div>
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with honesty and transparency, building trust with our partners and customers.
              </p>
            </div>
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">
                We support local farming communities and contribute to their economic development.
              </p>
            </div>
            <div className="card-evidence text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and strive to exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-industrial bg-background">
        <div className="container">
          <h2 className="text-3xl font-semibold text-foreground mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-evidence">
              <h3 className="text-xl font-semibold text-foreground mb-3">European Market Expansion</h3>
              <p className="text-muted-foreground mb-4">
                We successfully entered the European market in 2024, establishing partnerships with major grocery chains and restaurants. Our fresh water bamboo quickly gained popularity among health-conscious consumers.
              </p>
              <p className="text-sm text-primary">
                Result: 300% increase in sales within the first year
              </p>
            </div>
            <div className="card-evidence">
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainable Farming Initiative</h3>
              <p className="text-muted-foreground mb-4">
                Our cooperative farming program has helped 50+ local farmers adopt sustainable practices, resulting in higher yields and better quality produce.
              </p>
              <p className="text-sm text-primary">
                Result: 25% increase in production efficiency
              </p>
            </div>
            <div className="card-evidence">
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Innovation</h3>
              <p className="text-muted-foreground mb-4">
                We developed a new frozen water bamboo product that maintains its crisp texture and flavor, extending shelf life while preserving nutritional value.
              </p>
              <p className="text-sm text-primary">
                Result: New product line now accounts for 40% of total sales
              </p>
            </div>
            <div className="card-evidence">
              <h3 className="text-xl font-semibold text-foreground mb-3">Supply Chain Optimization</h3>
              <p className="text-muted-foreground mb-4">
                By optimizing our supply chain logistics, we reduced delivery times by 40% and minimized product waste by 35%.
              </p>
              <p className="text-sm text-primary">
                Result: Improved customer satisfaction and reduced environmental impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
