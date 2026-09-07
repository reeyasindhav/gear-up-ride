import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldCheck, Users, AlertTriangle } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Gearshift" },
      {
        name: "description",
        content:
          "Read the Gearshift terms of service covering acceptable use, account responsibilities, ride risk, and community standards.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Rules of the road</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Terms of Service</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Last updated: September 2026. By using Gearshift, you agree to these terms. They exist
            to keep riders safe and the platform honest.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <FileText className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Acceptable use</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use Gearshift for route discovery, gear research, ride logging and community
                discussion. Do not scrape data, post harmful content, or misuse route information.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Account responsibility</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You are responsible for your account activity and any content you post. Keep your
                login details secure and notify us if you suspect unauthorised access.
              </p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Users className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Community standards</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Be respectful in clubs, comments and reviews. Harassment, spam, or intentionally
                false route and gear content may result in account suspension.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Ride at your own risk.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Gearshift shares information, not guarantees. Conditions change, and you remain
              responsible for judging whether a route or ride is safe for you.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "No liability",
                v: "Gearshift is not an instructor or insurer",
                d: "You accept responsibility for your own rides.",
              },
              {
                k: "Content",
                v: "User reviews reflect personal opinion",
                d: "Always verify conditions before riding.",
              },
              {
                k: "Changes",
                v: "Terms may be updated over time",
                d: "Continued use means acceptance of updates.",
              },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 90}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                  <p className="font-mono text-3xl text-primary">{s.k}</p>
                  <p className="mt-1 text-sm font-medium">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Questions?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            If anything is unclear, reach out and we will help.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Back to Gearshift
            </Link>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
