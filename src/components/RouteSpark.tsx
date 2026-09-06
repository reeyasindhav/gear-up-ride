import { cn } from "@/lib/utils";
import { toneClass, type Tone } from "@/lib/data";

type Props = {
  tone?: Tone;
  className?: string;
  variant?: "solid" | "dashed";
  showMarker?: boolean;
  grid?: boolean;
};

const PATH = "M8 78 C 26 78, 34 40, 52 38 C 70 36, 74 66, 92 68 C 112 70, 118 22, 152 14";

/** Decorative elevation/route trace used across cards and map panels. */
export function RouteSpark({ tone = "mint", className, variant = "dashed", showMarker = false, grid = false }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", toneClass[tone], grid && "map-grid", className)}>
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:12px_12px] text-primary/25" />
      <svg viewBox="0 0 160 92" preserveAspectRatio="none" className="relative h-full w-full">
        <path
          d={PATH}
          fill="none"
          stroke="currentColor"
          className="text-primary/70"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray={variant === "dashed" ? "6 6" : "1400"}
          style={{ strokeDashoffset: variant === "dashed" ? undefined : 1400, animation: "draw 2.2s ease-in-out both" }}
        />
        {showMarker && <circle cx="118" cy="34" r="3" fill="none" stroke="currentColor" className="text-primary/70" strokeWidth="1.6" />}
      </svg>
    </div>
  );
}

/** Large hero map illustration with animated trace. */
export function MapCanvas({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-accent map-grid", className)}>
      <div className="absolute inset-0">
        <svg viewBox="0 0 600 420" preserveAspectRatio="none" className="h-full w-full">
          <g className="text-primary/10" fill="currentColor">
            <polygon points="0,320 600,120 600,168 0,368" />
            <polygon points="0,140 600,336 600,392 0,196" />
            <polygon points="120,0 240,420 300,420 180,0" />
          </g>
          <path
            d="M40 360 C 120 350, 150 190, 230 186 C 310 182, 320 300, 400 300 C 480 300, 500 120, 570 70"
            fill="none"
            stroke="currentColor"
            className="text-background"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M40 360 C 120 350, 150 190, 230 186 C 310 182, 320 300, 400 300 C 480 300, 500 120, 570 70"
            fill="none"
            stroke="currentColor"
            className="text-gold"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="10 12"
            style={{ strokeDashoffset: 1400, animation: "draw 3s ease-in-out both" }}
          />
        </svg>
      </div>
      <div className="relative flex h-full flex-col justify-between p-6">{children}</div>
    </div>
  );
}
