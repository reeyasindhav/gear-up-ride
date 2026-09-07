import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Key, LogOut } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/profile/")({
  head: () => ({
    meta: [
      { title: "Profile — Gearshift" },
      { name: "description", content: "Your Gearshift profile and settings." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const { user, signOut } = useAuth();
  const [confirmSignOut, setConfirmSignOut] = useState(false);

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Profile</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">Your account</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-clay text-xl font-semibold text-primary">
                {user?.initials ?? "GS"}
              </span>
              <div>
                <h2 className="text-xl font-semibold">{user?.name ?? "Rider"}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="size-4 text-gold" /> Role
                </div>
                <p className="text-sm font-medium">{user?.role ?? "Weekend explorer"}</p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <Key className="size-4 text-gold" /> City
                </div>
                <p className="text-sm font-medium">{user?.city ?? "Portland, Oregon"}</p>
              </div>
            </div>
            <button
              onClick={() => setConfirmSignOut(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <LogOut className="size-4" /> Sign out
            </button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold">Preferences</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email notifications</p>
                  <p className="text-xs text-muted-foreground">Ride reminders and club updates</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  On
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Public profile</p>
                  <p className="text-xs text-muted-foreground">Visible to club members</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  On
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Weekly summary</p>
                  <p className="text-xs text-muted-foreground">Distance and progress report</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Off
                </span>
              </div>
            </div>
          </div>
        </div>
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
    </AppShell>
  );
}
