import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Cookie, BarChart2, Settings } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies — Gearshift" },
      {
        name: "description",
        content:
          "Learn how Gearshift uses cookies and similar technologies to keep routes loading fast, personalize your feed, and respect your privacy.",
      },
    ],
  }),
  component: Cookies,
});

const cookieCategories = [
  {
    icon: Shield,
    title: "Essential cookies",
    text: "Required for core functionality like authentication, route security and ride log syncing. These cannot be disabled.",
  },
  {
    icon: BarChart2,
    title: "Performance cookies",
    text: "Help us understand how visitors interact with the site so we can improve speed, reliability and user flows.",
  },
  {
    icon: Cookie,
    title: "Preference cookies",
    text: "Remember your unit settings, map style and notification preferences across sessions.",
  },
  {
    icon: Settings,
    title: "Targeting cookies",
    text: "Used by our partners to deliver relevant gear offers and community recommendations.",
  },
];

function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Your choices matter</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Cookie Policy</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Last updated: September 2026. Gearshift uses cookies and similar technologies to keep
            your rides safe, routes fast, and the experience tailored to you. You can manage your
            preferences at any time.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cookieCategories.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="mt-16 rounded-3xl border border-border bg-secondary/50 p-8">
            <h3 className="text-xl font-semibold">Your cookie settings</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You can control non-essential cookies through your browser settings. Blocking
              essential cookies may cause route loading and ride log features to break.
            </p>
            <div className="mt-6">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
              >
                Read our full Privacy Policy <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-medium">Stop guessing. Start riding.</h2>
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
