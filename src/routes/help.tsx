import { createFileRoute, Link } from "@tanstack/react-router";
import { HelpCircle, BookOpen, MessageSquare, Mail } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help center — Gearshift" },
      {
        name: "description",
        content:
          "Gearshift help center: FAQs, guides, troubleshooting tips and contact support for riders and clubs.",
      },
    ],
  }),
  component: HelpCenter,
});

const faqs = [
  {
    q: "How do I add a new route?",
    a: "Use the Explore routes page to search by area or city. If your route is not listed, you can suggest it from the route detail page and our team will review it.",
  },
  {
    q: "Is Gearshift free?",
    a: "Yes. Route discovery, gear reviews, ride logging and community access are free for everyone. Optional premium features may be added later.",
  },
  {
    q: "How accurate is the route safety data?",
    a: "Route conditions are submitted by riders and club members, then checked by moderators. We also show recent weather and traffic context so you can judge freshness.",
  },
  {
    q: "How do I join a club?",
    a: "Visit the Community page, find a club in your area, and tap Join. Some clubs may require approval from the coordinator.",
  },
  {
    q: "Can I use Gearshift offline?",
    a: "Route details and saved rides are available offline. Real-time conditions and map data need an internet connection.",
  },
  {
    q: "How do I report unsafe content?",
    a: "Use the Contact page and select Safety as the topic. We review every report promptly and take action when needed.",
  },
];

function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Support and guidance</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Help center</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Find answers to common questions, learn how to use Gearshift, and get in touch if you
            need more help.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <BookOpen className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Getting started</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create an account, set your preferences, and discover your first route in under five
                minutes.
              </p>
              <Link
                to="/"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
              >
                View guide <span aria-hidden>↗</span>
              </Link>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <MessageSquare className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Community support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask questions in club discussions or the community feed. Riders help riders here.
              </p>
              <Link
                to="/community"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
              >
                Browse community <span aria-hidden>↗</span>
              </Link>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Mail className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Contact support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Can not find what you need? Send us a message and we will get back to you within 24
                hours.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
              >
                Get in touch <span aria-hidden>↗</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Frequently asked questions</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Quick answers to the most common questions from riders and club coordinators.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 90}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <HelpCircle className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Still need help?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our support team is here to help with account issues, route questions, safety reports
            and feedback.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Contact support <Mail className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
