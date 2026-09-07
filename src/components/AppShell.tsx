import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
  Users,
  LineChart,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";

const nav = [
  { label: "Overview", to: "/dashboard", icon: Activity },
  { label: "Explore routes", to: "/routes", icon: MapPin },
  { label: "Gear guide", to: "/gear", icon: ShieldCheck },
  { label: "Ride log", to: "/rides", icon: LineChart },
  { label: "Community", to: "/community", icon: Users, dot: true },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const { user, signOut } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [confirmSignOut, setConfirmSignOut] = useState(false);

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  const sidebar = (
    <div className="flex h-full flex-col gap-8 overflow-y-auto px-5 py-7">
      <Link to="/" className="animate-fade-in">
        <Logo />
      </Link>

      <nav className="flex flex-col gap-1">
        <p className="eyebrow mb-3 px-3">Your ride</p>
        {nav.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className={cn(
              "group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors animate-slide-right",
              isActive(item.to)
                ? "bg-accent text-accent-foreground"
                : "text-foreground/75 hover:bg-accent/60 hover:text-accent-foreground",
            )}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <item.icon className="size-[18px] transition-transform duration-300 group-hover:-rotate-6" />
            <span className="font-display text-[0.95rem]">{item.label}</span>
            {"dot" in item && item.dot && (
              <span className="ml-auto size-2 rounded-full bg-gold animate-pulse-dot" />
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-5">
        <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-card">
          <Users className="size-5 text-gold animate-float" />
          <h3 className="mt-6 text-2xl leading-tight">Ride a little further together.</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Find your next good day out with people nearby.
          </p>
          <Link
            to="/community"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold link-underline"
          >
            Find a club <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 border-t border-border pt-4">
          <span className="flex size-9 items-center justify-center rounded-full bg-clay text-xs font-semibold text-primary">
            {user?.initials ?? "GS"}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{user?.name ?? "Rider"}</p>
            <p className="truncate text-xs text-muted-foreground">{user?.role}</p>
          </div>
          <button
            onClick={() => setConfirmSignOut(true)}
            className="ml-auto text-xs text-muted-foreground transition-colors hover:text-foreground link-underline"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-[280px] border-r border-border bg-sidebar lg:block">
        {sidebar}
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/30 animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-[280px] bg-sidebar animate-slide-right">
            {sidebar}
          </aside>
        </div>
      )}

      <div className="lg:pl-[280px]">
        <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-border/70 bg-background/85 px-5 py-4 backdrop-blur-md lg:px-10">
          <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Link
            to="/routes"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="size-4 text-gold" />
            {user?.city ?? "Portland, Oregon"}
            <span aria-hidden className="text-muted-foreground/60">
              ›
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/routes"
              aria-label="Search routes"
              className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-accent"
            >
              <Search className="size-[18px]" />
            </Link>
            <Link
              to="/community"
              aria-label="Community"
              className="relative flex size-9 items-center justify-center rounded-full transition-colors hover:bg-accent"
            >
              <MessageCircle className="size-[18px]" />
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-gold animate-pulse-dot" />
            </Link>
            <Link
              to="/profile"
              className="flex size-9 items-center justify-center rounded-full bg-clay text-xs font-semibold text-primary transition-transform hover:scale-105"
            >
              {user?.initials ?? "GS"}
            </Link>
          </div>
        </header>
        <main className="px-5 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>

      {confirmSignOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setConfirmSignOut(false)}
          />
          <div className="relative w-full max-w-sm rounded-3xl border border-border bg-background p-6 shadow-card">
            <h3 className="text-lg font-semibold">Sign out?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You will need to log in again to access your rides, routes and gear data.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setConfirmSignOut(false)}
                className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Cancel
              </button>
              <button
                onClick={() => signOut()}
                className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Compass };
