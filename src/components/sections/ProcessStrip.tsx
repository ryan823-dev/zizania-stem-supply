interface ProcessStep {
  label: string;
  detail?: string;
}

interface ProcessStripProps {
  title?: string;
  steps: ProcessStep[];
}

export function ProcessStrip({ title, steps }: ProcessStripProps) {
  return (
    <div className="bg-card border-y border-border">
      <div className="container py-8 md:py-10">
        {title && (
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start">
              <div className="text-center px-2 md:px-4">
                <span className="text-xs font-medium text-muted-foreground/60 block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground block">
                  {step.label}
                </span>
                {step.detail && (
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {step.detail}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <span className="text-muted-foreground/30 mt-4 mx-1 md:mx-2 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
