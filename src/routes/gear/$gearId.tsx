import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { gear, type GearItem } from "@/lib/data";

export const Route = createFileRoute("/gear/$gearId")({
  head: () => ({
    meta: [
      { title: `Gear detail — Gearshift` },
      { name: "description", content: "Detailed gear review on Gearshift." },
    ],
  }),
  loader: async ({ params }) => {
    const item = gear.find((g) => g.id === params.gearId);
    if (!item) throw notFound();
    return { item };
  },
  component: GearDetail,
});

function GearDetail() {
  const { item } = Route.useLoaderData() as { item: GearItem };

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <Link
          to="/gear"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All gear
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  {item.brand} · {item.category}
                </p>
                <h1 className="mt-2 text-4xl lg:text-5xl">{item.name}</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl font-mono text-primary">${item.price}</p>
                <div className="mt-1 flex items-center justify-end text-xs text-muted-foreground">
                  {item.rating.toFixed(1)} / {item.reviewCount} reviews
                </div>
              </div>
            </div>

            <p className="mt-4 text-muted-foreground">{item.verdict}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {item.specs.map((s: { label: string; value: string }) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 font-mono text-sm">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Pros
                </h3>
                <ul className="mt-3 space-y-2">
                  {item.pros.map((p: string) => (
                    <li key={p} className="text-sm text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <XCircle className="size-4 text-destructive" /> Cons
                </h3>
                <ul className="mt-3 space-y-2">
                  {item.cons.map((c: string) => (
                    <li key={c} className="text-sm text-muted-foreground">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-5">
              <h3 className="font-semibold">Best for</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.bestFor}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Reviews</h3>
              <div className="mt-4 space-y-4">
                {item.reviews.map(
                  (review: { author: string; when: string; text: string; km: string }) => (
                    <div
                      key={review.author}
                      className="border-b border-border last:border-0 pb-3 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.when}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{review.text}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{review.km}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
