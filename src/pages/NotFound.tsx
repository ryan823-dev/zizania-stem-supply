import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-industrial bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground">404</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Page not found
            </p>
            <div className="mt-10">
              <Button variant="industrial" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
