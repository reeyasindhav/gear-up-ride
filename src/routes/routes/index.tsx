import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { routes } from "@/lib/data";
import { RouteSpark } from "@/components/RouteSpark";

export const Route = createFileRoute("/routes/")({
  head: () => ({
    meta: [
      { title: "Routes — Gearshift" },
      {
        name: "description",
        content: "Explore community-verified cycling routes with safety data and conditions.",
      },
    ],
  }),
  component: Routes,
});

function Routes() {
  const [filter, setFilter] = useState("");

  const filtered = routes.filter(
    (r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.area.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Explore routes</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">Routes near you</h1>
          <p className="mt-2 text-muted-foreground">
            Community-verified surfaces, traffic levels and conditions.
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search routes..."
            className="w-full max-w-md rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <Link
              key={r.id}
              to="/routes/$routeId"
              params={{ routeId: r.id }}
              className="hover-lift block rounded-3xl border border-border bg-card p-4 shadow-card"
            >
              <RouteSpark tone={r.tone} className="h-40" showMarker />
              <div className="px-2 pb-1 pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg">{r.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 text-gold" /> {r.area}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    {r.difficulty}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {r.km} km · {r.time} · {r.climb} m climb
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" /> {r.conditions}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
