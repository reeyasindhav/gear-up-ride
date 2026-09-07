import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  MapPin,
  ShieldCheck,
  LineChart,
  Users,
  MessageCircle,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { weeklyRides, monthlyProgress, rideLog, badges, toneClass } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Gearshift" },
      {
        name: "description",
        content: "Your ride overview, weekly activity and progress tracking.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const weekData = weeklyRides.map((d) => ({ day: d.day, km: d.km }));

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Overview</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">
            Hello, {user?.name?.split(" ")[0] ?? "Rider"}
          </h1>
          <p className="mt-2 text-muted-foreground">Here is your riding week at a glance.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              This week
            </p>
            <p className="mt-3 text-3xl font-mono text-primary">
              {weeklyRides.reduce((a, b) => a + b.km, 0).toFixed(1)}{" "}
              <span className="text-base text-muted-foreground">km</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {weeklyRides.filter((d) => d.km > 0).length} rides
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Moving time
            </p>
            <p className="mt-3 text-3xl font-mono text-primary">
              {Math.round(weeklyRides.reduce((a, b) => a + b.time, 0) / 60)}
              <span className="text-base text-muted-foreground">h</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Across all sessions</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Avg pace
            </p>
            <p className="mt-3 text-3xl font-mono text-primary">22.4</p>
            <p className="mt-1 text-sm text-muted-foreground">km/h average</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold">Weekly distance</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weekData}>
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                    }}
                    labelStyle={{ color: "var(--color-muted-foreground)" }}
                  />
                  <Bar dataKey="km" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold">Badges</h3>
            <div className="mt-5 space-y-4">
              {badges.map((b) => (
                <div key={b.id} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full text-primary",
                      toneClass[b.tone],
                    )}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{b.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{b.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card shadow-card overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h3 className="text-lg font-semibold">Recent rides</h3>
          </div>
          <div className="divide-y divide-border">
            {rideLog.map((ride) => (
              <div key={ride.id} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-semibold">{ride.route}</p>
                  <p className="text-sm text-muted-foreground">{ride.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm">{ride.km} km</p>
                  <p className="text-xs text-muted-foreground">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
