import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const resourceCategories = [
  {
    title: "Product Knowledge",
    description: "Understanding Zizania latifolia stem characteristics, varieties, and quality attributes.",
    articles: [
      { title: "Introduction to Water Bamboo", slug: "intro-water-bamboo" },
      { title: "Quality Grading Standards", slug: "grading-standards" },
      { title: "Nutritional Profile", slug: "nutritional-profile" },
      { title: "Storage and Handling", slug: "storage-handling" },
    ],
  },
  {
    title: "Supply & Handling",
    description: "Practical information for distribution, cold chain, and import considerations.",
    articles: [
      { title: "Cold Chain Requirements", slug: "cold-chain" },
      { title: "Packaging Specifications", slug: "packaging" },
      { title: "Import Documentation", slug: "import-docs" },
      { title: "Shelf Life Management", slug: "shelf-life" },
    ],
  },
  {
    title: "Cultivation Insights",
    description: "Technical knowledge for water bamboo growing and production planning.",
    articles: [
      { title: "Site Selection", slug: "site-selection" },
      { title: "Water Management", slug: "water-management" },
      { title: "Seasonal Calendar", slug: "seasonal-calendar" },
      { title: "Yield Optimization", slug: "yield-optimization" },
    ],
  },
  {
    title: "Market & Applications",
    description: "Culinary uses, market trends, and application development.",
    articles: [
      { title: "Culinary Applications", slug: "culinary-applications" },
      { title: "Processing Methods", slug: "processing-methods" },
      { title: "Market Overview", slug: "market-overview" },
      { title: "Emerging Applications", slug: "emerging-applications" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Resources
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Structured knowledge covering product, supply, cultivation, and applications. Informational content supporting informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category) => (
              <div key={category.title} className="card-industrial">
                <h2 className="text-xl font-medium text-foreground">{category.title}</h2>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {category.articles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        to={`/resources/${article.slug}`}
                        className="flex items-center justify-between py-2 text-foreground hover:text-accent transition-colors group"
                      >
                        <span>{article.title}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-compact bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">
              Resource articles are being developed. Contact us for specific information requests.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
