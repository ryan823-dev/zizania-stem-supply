const productionPoints = [
  { label: "Base-led production", detail: "Centralized coordination from production base" },
  { label: "Cooperative farming support", detail: "Structured network of partner farms" },
  { label: "Seasonal coordination", detail: "Planting and harvest cycle alignment" },
  { label: "Output planning", detail: "Volume and distribution scheduling" },
];

export function ProductionSection() {
  return (
    <section className="section-compact bg-card border-y border-border">
      <div className="container">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Production
          </p>
          <h2 className="text-foreground leading-tight">
            Production organized at origin
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {productionPoints.map((point, i) => (
            <div
              key={point.label}
              className={`px-5 py-5 ${i < productionPoints.length - 1 ? "border-b sm:border-b lg:border-b-0 sm:even:border-l lg:border-r lg:last:border-r-0" : "sm:border-l lg:border-l-0"} border-border`}
            >
              <span className="text-[10px] font-bold text-accent/50 block mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {point.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
