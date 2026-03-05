import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

// 模拟文章数据
const articles = {
  "intro-water-bamboo": {
    title: "Introduction to Water Bamboo",
    category: "Product Knowledge",
    content: `
      <h2>What is Water Bamboo?</h2>
      <p>Water bamboo, scientifically known as Zizania latifolia, is a unique aquatic vegetable native to Asia. It's also commonly referred to as Manchurian wild rice stem, water oat, or simply "jiao bai" in Chinese.</p>
      
      <h3>Botanical Characteristics</h3>
      <p>Water bamboo grows in freshwater environments, typically in marshes, ponds, and paddy fields. It's a tall grass-like plant that can reach heights of 2-3 meters. The edible part is the swollen stem base, which forms when the plant is infected by a symbiotic fungus.</p>
      
      <h3>Cultural Significance</h3>
      <p>Water bamboo has been cultivated in China for over 2,000 years and is highly valued in Asian cuisines. It's known for its crisp texture, mild flavor, and versatility in various dishes.</p>
      
      <h3>Global Potential</h3>
      <p>While traditionally consumed in Asia, water bamboo is gaining recognition worldwide for its unique taste and nutritional benefits. Its low calorie content and high fiber make it an attractive option for health-conscious consumers.</p>
    `
  },
  "nutritional-profile": {
    title: "Nutritional Profile",
    category: "Product Knowledge",
    content: `
      <h2>Nutritional Benefits of Water Bamboo</h2>
      <p>Water bamboo is not only delicious but also highly nutritious, offering a range of health benefits:</p>
      
      <h3>Key Nutrients</h3>
      <ul>
        <li>Low in calories (only about 20 calories per 100g)</li>
        <li>High in dietary fiber</li>
        <li>Rich in vitamins, including vitamin C, vitamin E, and B vitamins</li>
        <li>Good source of minerals like potassium, magnesium, and phosphorus</li>
        <li>Contains antioxidants that help protect against oxidative stress</li>
      </ul>
      
      <h3>Health Benefits</h3>
      <ul>
        <li>Supports digestive health due to its high fiber content</li>
        <li>Helps maintain healthy blood pressure levels</li>
        <li>Boosts immune system function</li>
        <li>Promotes healthy skin and hair</li>
        <li>Supports weight management due to its low calorie and high fiber content</li>
      </ul>
      
      <h3>Comparison with Other Vegetables</h3>
      <p>Compared to other common vegetables, water bamboo stands out for its unique combination of low calories, high fiber, and rich nutrient content. It's particularly beneficial for those following a healthy diet or looking to maintain a healthy weight.</p>
    `
  },
  "culinary-applications": {
    title: "Culinary Applications",
    category: "Market & Applications",
    content: `
      <h2>Cooking with Water Bamboo</h2>
      <p>Water bamboo is a versatile ingredient that can be used in a variety of dishes, from stir-fries to salads. Here are some popular ways to prepare it:</p>
      
      <h3>Traditional Asian Dishes</h3>
      <ul>
        <li><strong>Stir-fried Water Bamboo</strong>: Sauté with garlic, ginger, and your choice of protein</li>
        <li><strong>Water Bamboo Soup</strong>: Add to clear broths for a refreshing flavor</li>
        <li><strong>Pickled Water Bamboo</strong>: A popular condiment in many Asian cuisines</li>
        <li><strong>Water Bamboo with Tofu</strong>: A classic vegetarian dish</li>
      </ul>
      
      <h3>Western Adaptations</h3>
      <ul>
        <li><strong>Water Bamboo Salad</strong>: Thinly sliced and mixed with greens, nuts, and a light vinaigrette</li>
        <li><strong>Water Bamboo Stir-fry</strong>: With bell peppers, onions, and your choice of protein</li>
        <li><strong>Water Bamboo Chips</strong>: Thinly sliced and baked for a healthy snack</li>
        <li><strong>Water Bamboo in Pasta</strong>: Added to pasta dishes for a unique texture</li>
      </ul>
      
      <h3>Cooking Tips</h3>
      <ul>
        <li>Peel the outer layers before cooking</li>
        <li>Cut into uniform pieces for even cooking</li>
        <li>Blanch briefly in boiling water to enhance crispness</li>
        <li>Cook quickly over high heat to preserve texture</li>
        <li>Pair with bold flavors like garlic, ginger, and chili</li>
      </ul>
      
      <h3>Recipe Ideas</h3>
      <p>Try these simple recipes to introduce water bamboo to your diet:</p>
      <ol>
        <li><strong>Garlic Stir-fried Water Bamboo</strong>: Sauté with garlic, soy sauce, and a touch of sugar</li>
        <li><strong>Water Bamboo and Shrimp Salad</strong>: Combine with fresh shrimp, lime juice, and cilantro</li>
        <li><strong>Water Bamboo Curry</strong>: Add to your favorite curry recipe for a unique twist</li>
      </ol>
    `
  },
  "grading-standards": {
    title: "Quality Grading Standards",
    category: "Product Knowledge",
    content: `
      <h2>Water Bamboo Quality Grading</h2>
      <p>At ZizaniaStem, we maintain strict quality standards to ensure our customers receive the best possible product.</p>
      
      <h3>Grading Criteria</h3>
      <ul>
        <li><strong>Size</strong>: Uniform diameter and length</li>
        <li><strong>Color</strong>: Fresh, pale white to light green</li>
        <li><strong>Texture</strong>: Firm, crisp, and free from blemishes</li>
        <li><strong>Freshness</strong>: Minimal moisture loss, no wilting</li>
        <li><strong>Cleanliness</strong>: Free from dirt and debris</li>
      </ul>
      
      <h3>Grade Levels</h3>
      <ul>
        <li><strong>Premium Grade</strong>: Perfect shape, uniform size, exceptional quality</li>
        <li><strong>Standard Grade</strong>: Good quality, minor imperfections acceptable</li>
        <li><strong>Processing Grade</strong>: Suitable for processing and value-added products</li>
      </ul>
      
      <h3>Quality Control Process</h3>
      <p>Our quality control process includes:</p>
      <ol>
        <li>Visual inspection at harvest</li>
        <li>Sorting by size and quality</li>
        <li>Packaging in optimal conditions</li>
        <li>Regular quality checks during storage and transportation</li>
      </ol>
    `
  },
  "storage-handling": {
    title: "Storage and Handling",
    category: "Product Knowledge",
    content: `
      <h2>Proper Storage and Handling</h2>
      <p>To maintain the freshness and quality of water bamboo, proper storage and handling are essential.</p>
      
      <h3>Storage Requirements</h3>
      <ul>
        <li><strong>Temperature</strong>: 0-4°C (32-40°F)</li>
        <li><strong>Humidity</strong>: 90-95%</li>
        <li><strong>Atmosphere</strong>: Controlled atmosphere with modified oxygen and carbon dioxide levels</li>
        <li><strong>Packaging</strong>: Perforated plastic bags or controlled atmosphere packaging</li>
      </ul>
      
      <h3>Handling Best Practices</h3>
      <ul>
        <li>Handle with care to avoid bruising</li>
        <li>Keep cool during transportation</li>
        <li>Avoid exposure to direct sunlight</li>
        <li>Maintain proper ventilation</li>
        <li>Rotate stock to ensure freshness</li>
      </ul>
      
      <h3>Shelf Life</h3>
      <p>When stored properly, water bamboo can maintain its quality for:</p>
      <ul>
        <li>7-10 days under optimal refrigeration</li>
        <li>Up to 30 days in controlled atmosphere storage</li>
      </ul>
    `
  }
};

export default function ResourceArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : undefined;

  if (!article) {
    return (
      <Layout>
        <section className="section-industrial bg-background">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
              Article Not Found
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              The requested article could not be found.
            </p>
            <Link 
              to="/resources" 
              className="mt-8 inline-flex items-center text-primary hover:text-primary/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-industrial bg-background">
        <div className="container">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {article.category}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-industrial bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
