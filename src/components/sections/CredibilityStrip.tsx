interface CredibilityStripProps {
  statements: string[];
  variant?: "light" | "dark" | "bordered";
}

export function CredibilityStrip({ statements, variant = "bordered" }: CredibilityStripProps) {
  const baseClasses = "py-8 md:py-10";
  const variantClasses = {
    light: "bg-background",
    dark: "bg-primary text-primary-foreground",
    bordered: "bg-background border-y border-border",
  };

  const textClasses = {
    light: "text-muted-foreground",
    dark: "text-primary-foreground/80",
    bordered: "text-muted-foreground",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {statements.map((statement) => (
            <p
              key={statement}
              className={`text-sm font-medium tracking-wide text-center md:text-left ${textClasses[variant]}`}
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
