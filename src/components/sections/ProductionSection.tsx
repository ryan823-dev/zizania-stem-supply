const productionPoints = [
  { 
    label: "Base-led production", 
    detail: "Centralized coordination from production base",
    icon: "🏭"
  },
  { 
    label: "Cooperative farming support", 
    detail: "Structured network of partner farms",
    icon: "🤝"
  },
  { 
    label: "Seasonal coordination", 
    detail: "Planting and harvest cycle alignment",
    icon: "📅"
  },
  { 
    label: "Output planning", 
    detail: "Volume and distribution scheduling",
    icon: "📊"
  },
];

export function ProductionSection() {
  return (
    <section id="production" className="section-industrial bg-card border-y border-border">
      <div className="container">
        <div className="mb-12 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Production
          </p>
          <h2 className="text-foreground leading-tight">
            Production organized at origin
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productionPoints.map((point, i) => (
            <div
              key={point.label}
              className="card-interactive animate-on-scroll group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </span>
                <span className="text-[10px] font-bold text-accent/50 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                {point.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
