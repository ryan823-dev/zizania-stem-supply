import { Package, Sprout, Factory, Lightbulb, ChevronRight } from "lucide-react";

export type InquiryTrack = "supply" | "cultivation" | "processing" | "innovation";

interface TrackItem {
  id: InquiryTrack;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tracks: TrackItem[] = [
  { id: "supply", label: "Supply", icon: Package },
  { id: "cultivation", label: "Cultivation", icon: Sprout },
  { id: "processing", label: "Processing", icon: Factory },
  { id: "innovation", label: "Innovation", icon: Lightbulb },
];

interface IntakeBandProps {
  onSelectTrack: (track: InquiryTrack) => void;
}

export function IntakeBand({ onSelectTrack }: IntakeBandProps) {
  return (
    <div className="sticky top-16 md:top-20 z-40 w-full bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between py-0">
        <span className="text-[11px] font-semibold text-primary-foreground/65 tracking-[0.2em] uppercase shrink-0 mr-8 hidden md:block">
          Define your need
        </span>
        <div className="flex items-center flex-1">
          {tracks.map((track, i) => (
            <button
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              className="group relative flex items-center gap-2.5 px-5 lg:px-6 py-3.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/[0.08] active:bg-primary-foreground/[0.12]"
            >
              <track.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="tracking-wide">{track.label}</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-200" />
              {/* Active indicator on hover */}
              <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-primary-foreground/0 group-hover:bg-primary-foreground/40 transition-colors duration-200" />
              {/* Separator */}
              {i < tracks.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-primary-foreground/15" />
              )}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-primary-foreground/45 tracking-[0.15em] uppercase hidden lg:block shrink-0 ml-8">
          AI-assisted intake
        </span>
      </div>
    </div>
  );
}
