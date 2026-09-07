import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, ShieldCheck, Clock, Mountain, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { routes, type RouteItem } from "@/lib/data";

export const Route = createFileRoute("/routes/$routeId")({
  head: () => ({
    meta: [
      { title: `Route detail — Gearshift` },
      { name: "description", content: "Route details on Gearshift." },
    ],
  }),
  loader: async ({ params }) => {
    const route = routes.find((r) => r.id === params.routeId);
    if (!route) throw notFound();
    return { route };
  },
  component: RouteDetail,
});

function RouteDetail() {
  const { route } = Route.useLoaderData() as { route: RouteItem };

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <Link
          to="/routes"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All routes
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">{route.area}</p>
                  <h1 className="mt-2 text-4xl lg:text-5xl">{route.name}</h1>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {route.difficulty}
                </span>
              </div>

              <p className="mt-4 text-muted-foreground">{route.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat
                  icon={<Clock className="size-4 text-gold" />}
                  label="Time"
                  value={route.time}
                />
                <Stat
                  icon={<Mountain className="size-4 text-gold" />}
                  label="Climb"
                  value={`${route.climb} m`}
                />
                <Stat
                  icon={<MapPin className="size-4 text-gold" />}
                  label="Surface"
                  value={route.surface}
                />
                <Stat
                  icon={<ShieldCheck className="size-4 text-gold" />}
                  label="Traffic"
                  value={route.traffic}
                />
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Highlights</h3>
                <ul className="mt-3 space-y-2">
                  {route.highlights.map((h: string) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-gold" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Segments</h3>
                <div className="mt-4 space-y-3">
                  {route.segments.map(
                    (s: { name: string; km: number; grade: string; note: string }) => (
                      <div
                        key={s.name}
                        className="rounded-2xl border border-border bg-background p-4"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">{s.name}</p>
                          <p className="font-mono text-sm text-muted-foreground">{s.km} km</p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Grade {s.grade} — {s.note}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Conditions</h3>
              <p className="mt-2 text-3xl font-mono text-primary">{route.conditions}</p>
              <p className="mt-1 text-sm text-muted-foreground">Updated hourly from local riders</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Riders this week</h3>
              <p className="mt-2 text-3xl font-mono text-primary">{route.riders}</p>
              <div className="mt-4 flex items-center gap-2">
                <Users className="size-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Local community active</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Reviews</h3>
              <div className="mt-4 space-y-4">
                {route.reviews.map(
                  (review: { author: string; when: string; text: string; rating: number }) => (
                    <div
                      key={review.author}
                      className="border-b border-border last:border-0 pb-3 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.when}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{review.text}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon} {label}
      </div>
      <p className="mt-1 font-mono text-sm">{value}</p>
    </div>
  );
}
