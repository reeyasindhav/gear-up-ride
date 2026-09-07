import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ShieldCheck } from "lucide-react";
import { gear } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gear/")({
  head: () => ({
    meta: [
      { title: "Gear guide — Gearshift" },
      {
        name: "description",
        content: "Honest cycling gear reviews written after the kilometres, not before.",
      },
    ],
  }),
  component: Gear,
});

function Gear() {
  const [category, setCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(gear.map((g) => g.category)))];
  const filtered = category === "All" ? gear : gear.filter((g) => g.category === category);

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Gear guide</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">Reviews after the kilometres</h1>
          <p className="mt-2 text-muted-foreground">
            No affiliate rankings, no sponsored top picks. Just real testing.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-accent",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g, i) => (
            <Link
              key={g.id}
              to="/gear/$gearId"
              params={{ gearId: g.id }}
              className="hover-lift block rounded-3xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{g.brand}</p>
                <span className="text-xs text-muted-foreground">{g.rating.toFixed(1)}</span>
              </div>
              <h3 className="mt-2 text-lg">{g.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{g.verdict}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-sm text-primary">${g.price}</span>
                <span className="text-xs text-muted-foreground">{g.reviewCount} reviews</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
