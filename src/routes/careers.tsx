import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart, MapPin, ShieldCheck, Users } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Gearshift" },
      {
        name: "description",
        content:
          "Join Gearshift and help build the tools cyclists actually need. We're looking for riders, builders and storytellers.",
      },
    ],
  }),
  component: Careers,
});

const openRoles = [
  {
    title: "Frontend Engineer",
    location: "Remote (US)",
    description:
      "Build fast, accessible React experiences for cyclists discovering routes and tracking rides.",
  },
  {
    title: "Product Designer",
    location: "Remote (US)",
    description:
      "Design calm, data-rich interfaces that make route planning and gear selection effortless.",
  },
  {
    title: "Data Scientist",
    location: "Remote (US)",
    description:
      "Work with community-verified route data and gear performance metrics to surface insights.",
  },
];

function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Join us</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">
            Build tools cyclists actually want to use.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Gearshift is built by riders, for riders. We obsess over the details that matter — route
            safety, honest gear insights, and community connections — because we live them every
            day.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          <Reveal>
            <h3 className="text-2xl font-medium">Open roles</h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 90}>
                <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                  <h4 className="text-xl">{role.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{role.location}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                  >
                    Apply <span aria-hidden>↗</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">What we believe</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We hire riders, builders and storytellers who care about the details — not the hype.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "Ride-first",
                v: "mindset",
                d: "Every decision starts with what it actually feels like on the bike.",
              },
              {
                k: "Honest",
                v: "reviews",
                d: "We publish real pros, cons and what we'd actually buy.",
              },
              {
                k: "Community",
                v: "driven",
                d: "Local clubs and riders verify every route and recommendation.",
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
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Stop guessing. Start riding.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Whether you are planning your first weekend ride or your fifth season, Gearshift gives
            you the information to make better decisions.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Create your account
            </Link>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
