import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { blogPosts, type BlogPost } from "@/lib/data";

export const Route = createFileRoute("/blog/$blogId")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.id === params.blogId);
    return {
      meta: [
        { title: post ? `${post.title} — Gearshift` : "Blog — Gearshift" },
        {
          name: "description",
          content: post
            ? post.excerpt
            : "Gearshift blog: riding tips, gear reviews, route guides and stories from the cycling community.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.id === params.blogId);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to blog
          </Link>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs font-semibold text-muted-foreground">{post.date}</p>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {post.tag}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal delay={90}>
            <div className="prose prose-lg max-w-none">
              {post.body.split("\n\n").map((paragraph: string, i: number) => (
                <p key={i} className="mb-6 text-base leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-4xl lg:text-5xl">Keep reading</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              More riding tips, gear insight and community stories from the Gearshift blog.
            </p>
          </Reveal>
          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              All articles <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
