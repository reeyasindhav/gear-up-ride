import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Lock, Eye, Cookie, Globe, Mail } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gearshift" },
      {
        name: "description",
        content:
          "Learn how Gearshift protects your data, respects your privacy, and gives you control over your information.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Your privacy matters</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Privacy Policy</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Last updated: September 2026. Gearshift is built for riders, by riders. We don't sell
            your data. This policy explains what we collect, why we collect it, and how you can
            control it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Shield className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Data we collect</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Account details, ride logs, saved routes, gear preferences, and community
                interactions. We never collect payment information on the free tier.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Eye className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">How we use it</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To improve route suggestions, personalise gear recommendations, and connect you with
                nearby clubs. We do not use your data for third-party advertising.
              </p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Lock className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Your control</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You can export or delete your data at any time from your profile settings. Opt out
                of analytics and cookies without losing access to core features.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Transparency first.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We believe privacy is a feature, not a legal footnote. Here is how we handle your
              information day to day.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "No sale",
                v: "We do not sell personal data",
                d: "Your riding history stays yours.",
              },
              {
                k: "Encrypted",
                v: "Data in transit and at rest",
                d: "Industry standard protections.",
              },
              {
                k: "Minimal",
                v: "We collect only what we need",
                d: "Less risk for everyone.",
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
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Cookies and tracking</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Gearshift uses essential cookies for authentication and session management. Analytics
            cookies are optional and can be disabled in your browser settings at any time. We do not
            use tracking cookies for cross-site advertising.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal delay={90}>
            <article className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Cookie className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Essential cookies</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Required for login, route state, and basic security. These cannot be disabled
                without breaking core functionality.
              </p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Globe className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Analytics cookies</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Help us understand usage patterns so we can improve performance and reliability.
                Fully optional and anonymised.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Questions?</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              If you have concerns about how your data is handled, reach out and we will respond
              promptly.
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
        </div>
      </section>
      <Footer />
    </div>
  );
}
