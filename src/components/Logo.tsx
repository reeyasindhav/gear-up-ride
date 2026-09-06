import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="6" cy="16.5" r="3.6" className="text-gold" stroke="currentColor" />
          <circle cx="18" cy="16.5" r="3.6" className="text-gold" stroke="currentColor" />
          <path d="M6 16.5 11 9h4l3 7.5M11 9 9.5 6H8" />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-xl font-semibold tracking-tight">
          gearshift<span className="text-gold">.</span>
        </span>
      )}
    </span>
  );
}
