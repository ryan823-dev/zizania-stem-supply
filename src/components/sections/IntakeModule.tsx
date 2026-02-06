import { Package, Sprout, Factory, Lightbulb } from "lucide-react";

export type InquiryTrack = "supply" | "cultivation" | "processing" | "innovation";

interface TrackCard {
  id: InquiryTrack;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tracks: TrackCard[] = [
  {
    id: "supply",
    label: "Supply",
    description: "Fresh, frozen, or processed stem sourcing",
    icon: Package,
  },
  {
    id: "cultivation",
    label: "Cultivation",
    description: "Regional planting and production coordination",
    icon: Sprout,
  },
  {
    id: "processing",
    label: "Processing",
    description: "Product form, texture, and compliance",
    icon: Factory,
  },
  {
    id: "innovation",
    label: "Innovation",
    description: "Biomass, feed, aroma, and new applications",
    icon: Lightbulb,
  },
];

interface IntakeModuleProps {
  onSelectTrack: (track: InquiryTrack) => void;
}

export function IntakeModule({ onSelectTrack }: IntakeModuleProps) {
  return (
    <section className="bg-card border-y border-border">
      <div className="container section-compact">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
            Tell us your need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-8 bg-border border border-border">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              className="group bg-background p-6 md:p-7 text-left transition-colors hover:bg-secondary focus:outline-none focus:bg-secondary"
            >
              <track.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mb-4" />
              <p className="text-sm font-semibold text-foreground tracking-tight">
                {track.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                {track.description}
              </p>
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-5 tracking-wide">
          AI-assisted intake. A responsible team member will follow up within 1–2 business days.
        </p>
      </div>
    </section>
  );
}
