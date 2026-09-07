import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, LineChart, MapPin, ShieldCheck, Users } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { MapCanvas, RouteSpark } from "@/components/RouteSpark";
import { Footer } from "@/components/Footer";
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
        content:
          "Route safety data, unbiased gear insight, ride tracking and local club rides in a single platform.",
      },
    ],
  }),
  component: Landing,
});

const steps = [
  {
    title: "Pick a route",
    text: "Browse community-verified routes with live conditions, traffic levels and surface details.",
    icon: MapPin,
  },
  {
    title: "Gear up confidently",
    text: "Read honest reviews written after real kilometres — no sponsored rankings, just facts.",
    icon: ShieldCheck,
  },
  {
    title: "Ride and track",
    text: "Log every ride, monitor progress and join group rides with local clubs.",
    icon: LineChart,
  },
];

const testimonials = [
  {
    name: "Maya R.",
    role: "Weekend explorer",
    text: "I used to check three apps before every ride. Now I open Gearshift and have everything in one calm view.",
    tone: "mint" as const,
  },
  {
    name: "Dev P.",
    role: "Gravel regular",
    text: "The gear reviews actually feel honest. I bought the Allroad 38s after reading the long-term test and they've been flawless.",
    tone: "sand" as const,
  },
  {
    name: "Ines K.",
    role: "Club coordinator",
    text: "Our club grew from 60 to 148 members because people could see ride conditions and join without guesswork.",
    tone: "sky" as const,
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 map-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="eyebrow animate-fade-in">Hyperlocal cycling platform</p>
              <h1 className="mt-4 text-5xl leading-[1.02] animate-fade-up lg:text-7xl">
                Every good ride
                <br />
                starts with better
                <br />
                <span className="text-primary/70">information.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
                Gearshift pulls route safety, honest gear insight, ride tracking and your local
                cycling community into one calm, connected place — whether it's your first 10 km or
                your fifth season.
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
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Fresh conditions and community-loved roads around you.
                </p>
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
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm text-muted-foreground">
          {[...Array(2)].map((_, dup) => (
            <span key={dup} className="flex gap-10">
              {[
                "Route conditions updated hourly",
                "486 m of climbing on North Ridge",
                "9,200 verified gear reviews",
                "Saturday Social · 12 riders",
                "Gravel Union · Gorge day out",
                "Low traffic on Riverside Loop",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-gold" /> {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Three steps to a better ride.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            No more scattered notes, group chat links and old PDFs. Gearshift keeps everything in
            one place.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <step.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="eyebrow">Loved locally</p>
            <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Community picks this week.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The most ridden routes, most reviewed gear and most active clubs — updated weekly from
              real rider activity.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {routes.slice(0, 3).map((r, i) => (
              <Reveal key={r.id} delay={i * 100}>
                <Link
                  to="/routes/$routeId"
                  params={{ routeId: r.id }}
                  className="hover-lift block rounded-3xl border border-border bg-card p-4 shadow-card"
                >
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
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {gear.slice(0, 2).map((g, i) => (
              <Reveal key={g.id} delay={i * 100}>
                <Link
                  to="/gear/$gearId"
                  params={{ gearId: g.id }}
                  className="hover-lift block rounded-3xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{g.brand}</p>
                      <h3 className="text-lg">{g.name}</h3>
                    </div>
                    <div className="text-xs text-muted-foreground">{g.rating.toFixed(1)}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{g.verdict}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">
            Riders who already made the switch.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-primary ${t.tone === "mint" ? "bg-mint" : t.tone === "sand" ? "bg-sand" : "bg-sky"}`}
                >
                  {t.role}
                </span>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground lg:px-20">
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight lg:text-5xl">
              Your next good ride is already mapped.
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
      <Footer />
    </div>
  );
}
