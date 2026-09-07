import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, LineChart, Users } from "lucide-react";
import { MapCanvas, RouteSpark } from "@/components/RouteSpark";
import { Reveal } from "@/components/Reveal";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — Gearshift" },
      {
        name: "description",
        content:
          "Create a free Gearshift account to discover routes, read gear reviews and track rides.",
      },
    ],
  }),
  component: Signup,
});

const features = [
  { icon: ShieldCheck, text: "Save favorite routes" },
  { icon: LineChart, text: "Log every ride" },
  { icon: Users, text: "Join local clubs" },
];

function Signup() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    signUp(name, email);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-1">
        <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden bg-secondary/40">
          <div className="absolute inset-0 map-grid opacity-60" />
          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Compass className="size-5" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">gearshift.</span>
            </Link>

            <div className="max-w-md">
              <div className="grid grid-cols-2 gap-3 mb-8">
                <RouteSpark tone="mint" className="h-24 animate-scale-in shadow-card" />
                <RouteSpark
                  tone="sand"
                  className="h-24 animate-scale-in shadow-card"
                  style={{ animationDelay: "100ms" }}
                />
                <RouteSpark
                  tone="sky"
                  className="h-24 animate-scale-in shadow-card"
                  style={{ animationDelay: "200ms" }}
                />
                <RouteSpark
                  tone="lilac"
                  className="h-24 animate-scale-in shadow-card"
                  style={{ animationDelay: "300ms" }}
                />
              </div>

              <Reveal>
                <h3 className="text-2xl xl:text-3xl font-display leading-tight">
                  Start tracking your
                  <span className="text-primary/70"> rides</span>.
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Create your free account and join a community that values honest routes, real gear
                  reviews and good company.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-wrap gap-4">
                {features.map((f) => (
                  <span
                    key={f.text}
                    className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium shadow-sm"
                  >
                    <f.icon className="size-3.5 text-gold" /> {f.text}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">© 2026 Gearshift. Built for riders.</p>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-[45%] items-center justify-center px-5 py-10 lg:px-10">
          <div className="w-full max-w-sm animate-fade-up">
            <div className="lg:hidden mb-8 text-center">
              <Link to="/" className="inline-flex items-center justify-center">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Compass className="size-5" />
                </span>
              </Link>
            </div>

            <div className="mb-8">
              <p className="eyebrow">Get started</p>
              <h1 className="mt-3 text-3xl font-display font-semibold tracking-tight">
                Create your account
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Join Gearshift free. Bring your routes, your bike and your opinions on tyres.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-ring)]"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Create account <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="link-underline hover:text-foreground">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="link-underline hover:text-foreground">
                Privacy Policy
              </Link>
              .
            </p>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-primary link-underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
