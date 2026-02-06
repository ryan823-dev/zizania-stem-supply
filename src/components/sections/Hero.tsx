import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-field.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Water bamboo cultivation fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-4">
            Production & Supply System
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight tracking-tight">
            ZizaniaStem
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Origin-based production and supply of edible Zizania latifolia stem.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/60 font-medium tracking-[0.15em] uppercase">
            Cultivation · Supply · Processing
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/supply#specs">Request Specs</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact?type=samples">Request Samples</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
