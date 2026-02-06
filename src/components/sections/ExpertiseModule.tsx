const expertisePoints = [
  "Production structured at origin",
  "Handling aligned with distribution",
  "Cultivation supports supply stability",
];

export function ExpertiseModule() {
  return (
    <section className="py-8 md:py-10 bg-card border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            System Approach
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-2">
            {expertisePoints.map((point, i) => (
              <span key={point} className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">{point}</span>
                {i < expertisePoints.length - 1 && (
                  <span className="text-border hidden md:inline">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
