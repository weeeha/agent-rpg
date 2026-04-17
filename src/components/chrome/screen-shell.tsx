"use client";

import Link from "next/link";
import { ArrowLeft, Ship, Target, Users, Package, ShoppingCart, Settings, Cpu, Network } from "lucide-react";
import { ReactNode, useState } from "react";
import { Coins, Zap, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ScreenShellProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  children: ReactNode;
  sidebar?: ReactNode;
  bottomActions?: ReactNode;
  showSpeeds?: boolean;
};

const NAV_ITEMS = [
  { icon: Ship, label: "Base", href: "/" },
  { icon: Users, label: "Commons", href: "/commons" },
  { icon: Target, label: "Missions", href: "/missions" },
  { icon: Package, label: "Agents", href: "/agents" },
  { icon: Cpu, label: "Cyberware", href: "/cyberware" },
  { icon: Network, label: "Skills", href: "/skills" },
  { icon: ShoppingCart, label: "Rooms", href: "/rooms" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const SPEEDS = ["1x", "2x", "4x"] as const;

export function ScreenShell({
  title,
  subtitle,
  backHref = "/",
  children,
  sidebar,
  bottomActions,
  showSpeeds = true,
}: ScreenShellProps) {
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>("1x");

  return (
    <div className="flex h-dvh flex-col bg-[#06121a] text-cyan-100 font-mono">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-cyan-500/30 bg-[#081a24] px-4 py-2">
        <div className="flex items-center gap-3">
          <Link
            href={backHref}
            className="flex size-8 items-center justify-center rounded border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
            aria-label="Back"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <div>
            <h1 className="text-lg font-bold tracking-wider text-cyan-300">{title}</h1>
            {subtitle && <p className="text-xs tracking-widest text-cyan-500/70">{subtitle}</p>}
          </div>
        </div>
        {showSpeeds && (
          <div className="flex items-center gap-1 rounded border border-cyan-500/30 bg-[#0a2230] p-0.5">
            {SPEEDS.map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`rounded px-3 py-1 text-xs font-bold transition ${
                  speed === s ? "bg-cyan-400 text-[#06121a]" : "text-cyan-300/70 hover:text-cyan-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left nav rail */}
        <nav className="flex w-16 flex-col items-center gap-2 border-r border-cyan-500/30 bg-[#081a24] py-4">
          {NAV_ITEMS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              title={label}
              className="flex size-10 items-center justify-center rounded border border-cyan-500/20 bg-[#0a2230] text-cyan-300/70 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </nav>

        {/* Scene */}
        <main className="relative flex flex-1 items-stretch justify-center overflow-auto bg-[#041018] p-4">
          {children}
        </main>

        {/* Right sidebar */}
        {sidebar && <aside className="flex w-72 flex-col gap-3 overflow-y-auto border-l border-cyan-500/30 bg-[#081a24] p-3">{sidebar}</aside>}
      </div>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between gap-3 border-t border-cyan-500/30 bg-[#081a24] px-4 py-2 text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-300"><Coins className="size-3.5" /> <b>CR 1,850</b></span>
          <span className="flex items-center gap-1.5 text-cyan-200"><Zap className="size-3.5" /> <b>12/30</b></span>
          <span className="flex items-center gap-1.5 text-cyan-200"><Gauge className="size-3.5" /> <b>2 ops</b></span>
        </div>
        {bottomActions ?? (
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">ASSIGN</Button>
            <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">SAVE</Button>
          </div>
        )}
      </footer>
    </div>
  );
}

export function Panel({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="rounded border border-cyan-500/30 bg-[#0a2230] p-3">
      {title && <h2 className="mb-2 text-xs font-bold tracking-widest text-cyan-300">{title}</h2>}
      {children}
    </section>
  );
}

export function Scanlines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.6) 3px)",
      }}
    />
  );
}

export function StatBar({ label, value, max = 100, accent = "cyan" }: { label: string; value: number; max?: number; accent?: "cyan" | "amber" | "red" | "green" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const color = accent === "amber" ? "bg-amber-400" : accent === "red" ? "bg-red-400" : accent === "green" ? "bg-emerald-400" : "bg-cyan-400";
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-[11px] uppercase tracking-wider text-cyan-300/80">{label}</span>
      <div className="relative h-2 flex-1 overflow-hidden rounded-sm bg-cyan-500/15">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 text-right text-[11px] font-bold tabular-nums text-cyan-100">{value}</span>
    </div>
  );
}
