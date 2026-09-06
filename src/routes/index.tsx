import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, LineChart, MapPin, ShieldCheck, Users } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { MapCanvas, RouteSpark } from "@/components/RouteSpark";
import { routes, gear, clubs } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gearshift — One place for routes, gear and riding mates" },
      {
        name: "description",
        content:
          "Discover safe cycling routes, read honest gear reviews, track every ride and join local clubs — all inside Gearshift.",
      },
      { property: "og:title", content: "Gearshift — One place for routes, gear and riding mates" },
      {
        property: "og:description",
        content: "Route safety data, unbiased gear insight, ride tracking and local club rides in a single platform.",
      },
    ],
  }),
  component: Landing,
});

const pillars = [
  { icon: MapPin, title: "Routes you can trust", text: "Community-verified surfaces, traffic levels and daily conditions before you clip in." },
  { icon: ShieldCheck, title: "Gear without the spin", text: "Reviews from riders with real distance logged — pros, cons and what it's actually for." },
  { icon: LineChart, title: "Progress that reads clearly", text: "Distance, moving time and effort in one calm view, without a wall of graphs." },
  { icon: Users, title: "People nearby", text: "Local clubs, paces and group rides you can join this weekend." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-4 lg:px-10">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#pillars" className="link-underline text-foreground/75 transition-colors hover:text-foreground">Why Gearshift</a>
            <a href="#routes" className="link-underline text-foreground/75 transition-colors hover:text-foreground">Routes</a>
            <a href="#gear" className="link-underline text-foreground/75 transition-colors hover:text-foreground">Gear</a>
            <a href="#clubs" className="link-underline text-foreground/75 transition-colors hover:text-foreground">Clubs</a>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <Link to="/login" className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent">
              Log in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start riding <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pt-14 pb-10 lg:px-10 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow animate-fade-in">Hyperlocal cycling platform</p>
            <h1 className="mt-4 text-5xl leading-[1.02] animate-fade-up lg:text-7xl">
              Every good ride
              <br />
              starts with better
              <br />
              <span className="text-primary/70">information<span className="text-gold">.</span></span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
              Gearshift pulls route safety, honest gear insight, ride tracking and your local cycling community into one
              calm, connected place — whether it's your first 10 km or your fifth season.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:200ms]">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Compass className="size-4" /> Create your account
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                Explore the demo
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 animate-fade-up [animation-delay:280ms]">
              {[
                { k: "1,480", v: "routes mapped" },
                { k: "9,200", v: "gear reviews" },
                { k: "310", v: "local clubs" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-mono text-2xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <MapCanvas className="h-[440px] animate-scale-in shadow-card">
            <div>
              <p className="eyebrow">Your local pulse</p>
              <h2 className="mt-2 text-3xl">Routes worth riding</h2>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">Fresh conditions and community-loved roads around you.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold shadow-card">
                <ShieldCheck className="size-4 text-primary" /> Safe conditions today
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold shadow-card">
                12 routes nearby
              </span>
            </div>
          </MapCanvas>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm text-muted-foreground">
          {[...Array(2)].map((_, dup) => (
            <span key={dup} className="flex gap-10">
              {["Route conditions updated hourly", "486 m of climbing on North Ridge", "9,200 verified gear reviews", "Saturday Social · 12 riders", "Gravel Union · Gorge day out", "Low traffic on Riverside Loop"].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-gold" /> {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section id="pillars" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">The fragmentation ends here</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Four tools cyclists juggle, finally in one place.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="routes" className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Loved locally</p>
            <h2 className="mt-3 text-4xl lg:text-5xl">Community picks this week</h2>
          </div>
          <Link to="/routes" className="inline-flex items-center gap-2 text-sm font-semibold link-underline">
            Explore all routes <span aria-hidden>↗</span>
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {routes.slice(0, 3).map((r, i) => (
            <Reveal key={r.id} delay={i * 100}>
              <Link to="/routes/$routeId" params={{ routeId: r.id }} className="hover-lift block rounded-3xl border border-border bg-card p-4 shadow-card">
                <RouteSpark tone={r.tone} className="h-40" showMarker />
                <div className="flex items-end justify-between px-2 pb-1 pt-4">
                  <div>
                    <h3 className="text-lg">{r.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.km} km · {r.time} · {r.climb} m climb
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gear" className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">Gear guide</p>
            <h2 className="mt-3 text-4xl lg:text-5xl">Reviews written after the kilometres, not before.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every review shows the distance tested, what the rider disliked, and the type of riding it suits. No
              affiliate ranking, no sponsored top picks.
            </p>
            <Link
              to="/gear"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Browse the gear guide <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {gear.slice(0, 4).map((g, i) => (
              <Reveal key={g.id} delay={i * 90}>
                <Link to="/gear/$gearId" params={{ gearId: g.id }} className="hover-lift block rounded-3xl border border-border bg-card p-5 shadow-card">
                  <RouteSpark tone={g.tone} className="h-20" variant="solid" />
                  <p className="mt-4 text-xs text-muted-foreground">{g.brand}</p>
                  <h3 className="text-lg">{g.name}</h3>
                  <p className="mt-2 font-mono text-sm text-primary">
                    {g.rating.toFixed(1)} <span className="text-muted-foreground">/ {g.reviewCount} reviews</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Community</p>
          <h2 className="mt-3 max-w-xl text-4xl lg:text-5xl">Clubs riding at your pace, this week.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {clubs.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <div className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-primary bg-${c.tone === "mint" ? "mint" : c.tone === "sand" ? "sand" : c.tone === "sky" ? "sky" : "lilac"}`}>
                  {c.area}
                </span>
                <h3 className="mt-5 text-xl">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.vibe}</p>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  {c.members} members · {c.pace}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground lg:px-20">
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight lg:text-5xl">
              Your next good ride is already mapped<span className="text-gold">.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/70">
              Join Gearshift free. Bring your routes, your bike and your opinions on tyres.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.04]"
            >
              Create your free account <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-5 text-sm text-muted-foreground lg:px-10">
          <Logo />
          <p className="ml-auto">Routes · Gear · Tracking · Community</p>
          <p>© 2026 Gearshift</p>
        </div>
      </footer>
    </div>
  );
}
