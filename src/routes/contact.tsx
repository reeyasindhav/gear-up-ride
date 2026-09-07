import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gearshift" },
      {
        name: "description",
        content:
          "Get in touch with the Gearshift team for support, feedback, or partnership enquiries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">We are here to help</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Contact us</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Have a question, feedback, or partnership idea? Send us a message and we will get back
            to you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Mail className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">support@gearshift.app</p>
              <p className="mt-1 text-xs text-muted-foreground">
                We usually reply within 24 hours.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <MessageSquare className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Feedback</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Found a bug or have a feature request? Let us know.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Use the form below or message us on social.
              </p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">Safety</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Report unsafe route conditions or harmful content.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">We review every report promptly.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Send a message</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Fill in the form and we will get back to you as soon as possible.
            </p>
          </Reveal>
          <div className="mt-10 max-w-xl">
            {sent ? (
              <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card">
                <p className="text-lg font-semibold">Message sent</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. We will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
                    placeholder="Tell us what you need help with"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
