import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-field.jpg";

export function Hero() {
  const scrollToContent = () => {
    const element = document.querySelector('#production');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-earth/70" />
        <img
          src={heroImage}
          alt="Water bamboo cultivation fields"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-field/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 section-hero">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/90 font-medium">
              Production & Supply System
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight mb-6 animate-slide-up">
            ZizaniaStem
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 leading-relaxed mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Origin-based production and supply of edible Zizania latifolia stem.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We deliver premium quality water bamboo products to customers worldwide while supporting sustainable farming practices and maintaining the highest standards of agricultural excellence.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm text-primary-foreground/90">
              Cultivation
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm text-primary-foreground/90">
              Supply
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm text-primary-foreground/90">
              Processing
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero-outline" 
              size="lg" 
              asChild
              className="group btn-glow"
            >
              <Link to="/supply#specs" className="flex items-center gap-2">
                Request Specs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              asChild
              className="btn-3d"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-subtle cursor-pointer" onClick={scrollToContent}>
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
