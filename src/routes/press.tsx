import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper, Image, Mail } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Gearshift" },
      {
        name: "description",
        content:
          "Gearshift press room: latest news, media kit, brand assets and press contact information.",
      },
    ],
  }),
  component: Press,
});

const news = [
  {
    date: "September 2026",
    title: "Gearshift raises seed round to expand route safety and gear review platform",
    excerpt:
      "Funding will support community growth, local club integrations and new route-condition features across North America.",
  },
  {
    date: "July 2026",
    title: "Gearshift reaches 50,000 registered riders",
    excerpt:
      "The milestone comes six months after launch, with route submissions and gear reviews growing faster than projected.",
  },
  {
    date: "May 2026",
    title: "Gearshift partners with Portland cycling clubs for live route updates",
    excerpt:
      "Local clubs will share real-time surface and traffic notes directly inside the Gearshift app.",
  },
];

function Press() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">News and media</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Press</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Latest announcements, stories and resources for journalists, podcasters and content
            creators.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <p className="text-xs font-semibold text-muted-foreground">{item.date}</p>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                >
                  Read more <span aria-hidden>↗</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Media kit</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Logos, product screenshots, brand guidelines and founder headshots for editorial use.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Image className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Brand assets</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  High-resolution logos, app icons and product screenshots for web, print and social
                  use.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Newspaper className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Company facts</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Founded in 2025, Gearshift is a Portland-based cycling platform serving riders
                  across North America.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Mail className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Press contact</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  press@gearshift.app — we usually respond within one business day.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Got a story?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We are happy to help with interviews, data requests and product access for journalists.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Contact press <Mail className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
