import { createFileRoute, Link } from "@tanstack/react-router";
import { PenLine, BookOpen, Mail } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Gearshift" },
      {
        name: "description",
        content:
          "Gearshift blog: riding tips, gear reviews, route guides and stories from the cycling community.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Stories and guides</p>
          <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Blog</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Riding tips, gear insight, route guides and community stories from riders who actually
            log the kilometres.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground">{post.date}</p>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {post.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-xl">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <Link
                  to="/blog/$blogId"
                  params={{ blogId: post.id }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                >
                  Read article <span aria-hidden>↗</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Write with us</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We publish route guides, gear reviews and community stories from riders. If you have
              something to share, we want to hear it.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <PenLine className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Submit an article</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Route guides, gear long-tests and event recaps. We edit for clarity, not voice.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <BookOpen className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Editorial guidelines</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Honest, first-person writing backed by real experience. No sponsored rankings, no
                  affiliate hype.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Mail className="size-5" />
                </span>
                <h3 className="mt-6 text-xl">Pitch us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  editorial@gearshift.app — include a short summary, route data or gear notes if
                  relevant.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-4xl lg:text-5xl">Stay in the saddle</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            New posts every week. No spam, unsubscribe anytime.
          </p>
          <div className="mt-8 max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
