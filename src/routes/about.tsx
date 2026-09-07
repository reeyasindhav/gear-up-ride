import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck, LineChart, Users } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why Gearshift — Gearshift" },
      {
        name: "description",
        content:
          "Gearshift brings route discovery, honest gear reviews, ride tracking and local cycling clubs into one place.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    icon: MapPin,
    title: "Routes you can trust",
    text: "Community-verified surfaces, traffic levels and daily conditions before you clip in.",
  },
  {
    icon: ShieldCheck,
    title: "Gear without the spin",
    text: "Reviews from riders with real distance logged — pros, cons and what it's actually for.",
  },
  {
    icon: LineChart,
    title: "Progress that reads clearly",
    text: "Distance, moving time and effort in one calm view, without a wall of graphs.",
  },
  {
    icon: Users,
    title: "People nearby",
    text: "Local clubs, paces and group rides you can join this weekend.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">The fragmentation ends here</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">
            Four tools cyclists juggle, finally in one place.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Instead of bouncing between apps, websites and group chats, Gearshift gives you route
            safety, honest gear insight, ride tracking and your local riding community in a single
            calm space.
          </p>
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

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">
              Built for riders who value their time.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Most cycling tools are built for engineers or marketers. Gearshift is built by riders
              who log thousands of kilometres a year and want better information without the noise.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "1,480",
                v: "routes mapped",
                d: "Community-verified roads, paths and climbs.",
              },
              {
                k: "9,200",
                v: "gear reviews",
                d: "Written after real testing, not before.",
              },
              {
                k: "310",
                v: "local clubs",
                d: "Connected and ready to ride.",
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
