import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { LineChart, Clock, Flame } from "lucide-react";
import { rideLog, weeklyRides } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/rides/")({
  head: () => ({
    meta: [
      { title: "Ride log — Gearshift" },
      {
        name: "description",
        content: "Track every ride, review distance, time and effort over time.",
      },
    ],
  }),
  component: Rides,
});

function Rides() {
  const weekData = weeklyRides.map((d) => ({ day: d.day, km: d.km, time: d.time }));

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="eyebrow">Ride log</p>
          <h1 className="mt-2 text-4xl lg:text-5xl">Your rides</h1>
          <p className="mt-2 text-muted-foreground">
            Distance, moving time and effort in one calm view.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold">Weekly activity</h3>
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
            <h3 className="text-lg font-semibold">Totals</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LineChart className="size-4 text-gold" /> Distance
                </div>
                <p className="font-mono text-sm">
                  {rideLog.reduce((a, b) => a + b.km, 0).toFixed(1)} km
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4 text-gold" /> Time
                </div>
                <p className="font-mono text-sm">
                  {Math.round(rideLog.reduce((a, b) => a + parseFloat(b.time), 0) / 60)}h
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flame className="size-4 text-gold" /> Avg effort
                </div>
                <p className="font-mono text-sm">Moderate</p>
              </div>
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
