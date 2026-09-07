import { createFileRoute, Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { clubs, events, feed, toneClass } from "@/lib/data";

export const Route = createFileRoute("/community/")({
  head: () => ({
    meta: [
      { title: "Community — Gearshift" },
      {
        name: "description",
        content: "Find local cycling clubs, events and connect with riders nearby.",
      },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Community</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">Ride with people nearby</h1>
          <p className="mt-2 text-muted-foreground">
            Local clubs, paces and group rides you can join this weekend.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Clubs</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.map((c) => (
              <div
                key={c.id}
                className="hover-lift rounded-3xl border border-border bg-card p-6 shadow-card"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-primary ${toneClass[c.tone]}`}
                >
                  {c.area}
                </span>
                <h3 className="mt-4 text-xl">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.vibe}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {c.members} members · {c.pace}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{c.meets}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Upcoming events</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <div key={e.id} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <p className="text-xs font-semibold text-muted-foreground">{e.club}</p>
                <h3 className="mt-2 text-lg">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.when}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {e.distance} · {e.difficulty}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="size-3.5 text-gold" /> {e.riders} riders · {e.meetPoint}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Feed</h2>
          <div className="mt-5 space-y-4">
            {feed.map((f) => (
              <div key={f.id} className="rounded-3xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{f.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {f.handle} · {f.when}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    {f.kind}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
