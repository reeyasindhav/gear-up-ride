import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, LineChart, Users } from "lucide-react";
import { MapCanvas, RouteSpark } from "@/components/RouteSpark";
import { Reveal } from "@/components/Reveal";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Gearshift" },
      {
        name: "description",
        content: "Log in to Gearshift to access routes, gear reviews and your ride log.",
      },
    ],
  }),
  component: Login,
});

const features = [
  { icon: ShieldCheck, text: "Community-verified routes" },
  { icon: LineChart, text: "Honest gear reviews" },
  { icon: Users, text: "Local riding clubs" },
];

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    signIn(email, name);
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
              <MapCanvas className="h-56 xl:h-64 animate-scale-in shadow-card mb-8">
                <div>
                  <p className="eyebrow">Your local pulse</p>
                  <h2 className="mt-2 text-2xl xl:text-3xl">Routes worth riding</h2>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Fresh conditions and community-loved roads around you.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-card">
                    <ShieldCheck className="size-3.5 text-primary" /> Safe today
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-card">
                    12 nearby
                  </span>
                </div>
              </MapCanvas>

              <Reveal>
                <h3 className="text-2xl xl:text-3xl font-display leading-tight">
                  Every good ride starts with better
                  <span className="text-primary/70"> information</span>.
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Join thousands of riders who plan, track and share their rides with Gearshift.
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
              <p className="eyebrow">Welcome back</p>
              <h1 className="mt-3 text-3xl font-display font-semibold tracking-tight">
                Log in to your account
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Continue your rides, routes and gear tracking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                Log in <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By logging in, you agree to our{" "}
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
              No account yet?{" "}
              <Link to="/signup" className="font-semibold text-primary link-underline">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
