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
    <div className="w-full bg-primary border-b border-border">
      <div className="container flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 py-3">
        <span className="text-xs font-medium text-primary-foreground/60 tracking-wide uppercase shrink-0 mr-6">
          Tell us your need
        </span>
        <div className="flex flex-wrap items-center gap-px flex-1">
          {tracks.map((track, i) => (
            <button
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <track.icon className="w-3.5 h-3.5" />
              <span>{track.label}</span>
              <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-60 group-hover:ml-0 transition-all" />
              {i < tracks.length - 1 && (
                <span className="hidden sm:inline text-primary-foreground/20 ml-2">|</span>
              )}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-primary-foreground/40 tracking-wide hidden lg:block shrink-0">
          AI-assisted intake · Follow-up within 1–2 business days
        </span>
      </div>
    </div>
  );
}
