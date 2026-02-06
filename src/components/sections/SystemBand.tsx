interface SystemBandProps {
  items: string[];
}

export function SystemBand({ items }: SystemBandProps) {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 md:py-5">
          {items.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-8 text-xs md:text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium"
            >
              {item}
              {i < items.length - 1 && (
                <span className="text-primary-foreground/30 ml-8 hidden sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
