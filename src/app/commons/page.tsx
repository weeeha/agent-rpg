"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Gauge,
  Users,
  Package,
  ShoppingCart,
  Settings,
  Ship,
  Target,
  Zap,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Agent = {
  id: string;
  name: string;
  role: string;
  status: string;
  mood: "😀" | "🙂" | "😐" | "😕";
};

const AGENTS: Agent[] = [
  { id: "atlas", name: "ATLAS", role: "Architect", status: "Drafting schematics", mood: "🙂" },
  { id: "cipher", name: "CIPHER", role: "Decoder", status: "Brewing coffee", mood: "😀" },
  { id: "forge", name: "FORGE", role: "Engineer", status: "Sparring", mood: "🙂" },
  { id: "echo", name: "ECHO", role: "Signal", status: "Queued a song", mood: "😀" },
  { id: "mirror", name: "MIRROR", role: "Reflection", status: "Meditating", mood: "😐" },
  { id: "muse", name: "MUSE", role: "Creator", status: "Sketching", mood: "😀" },
  { id: "sentinel", name: "SENTINEL", role: "Guardian", status: "On patrol", mood: "🙂" },
  { id: "nova", name: "NOVA", role: "Explorer", status: "Charting stars", mood: "🙂" },
];

const ACTIVITY_LOG = [
  { t: "T-00:05", msg: "ATLAS entered lounge" },
  { t: "T-00:12", msg: "CIPHER brewing coffee" },
  { t: "T-00:22", msg: "FORGE finished sparring" },
  { t: "T-00:30", msg: "ECHO queued a song" },
  { t: "T-00:41", msg: "MUSE started a canvas" },
  { t: "T-00:58", msg: "NOVA updated starchart" },
];

const SPEEDS = ["1x", "2x", "4x"] as const;

export default function CommonsPage() {
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>("1x");
  const [selected, setSelected] = useState<Agent | null>(null);

  const avgMoodIdx =
    AGENTS.reduce((s, a) => s + (a.mood === "😀" ? 3 : a.mood === "🙂" ? 2 : a.mood === "😐" ? 1 : 0), 0) /
    AGENTS.length;
  const avgMood = avgMoodIdx > 2.2 ? "😀" : avgMoodIdx > 1.4 ? "🙂" : avgMoodIdx > 0.7 ? "😐" : "😕";

  return (
    <div className="flex h-dvh flex-col bg-[#06121a] text-cyan-100 font-mono">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-cyan-500/30 bg-[#081a24] px-4 py-2">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex size-8 items-center justify-center rounded border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
            aria-label="Back"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <div>
            <h1 className="text-lg font-bold tracking-wider text-cyan-300">COMMONS — CREW DECK 02</h1>
            <p className="text-xs tracking-widest text-cyan-500/70">HUB &amp; QUARTERS</p>
          </div>
        </div>
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
      </header>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left nav rail */}
        <nav className="flex w-16 flex-col items-center gap-2 border-r border-cyan-500/30 bg-[#081a24] py-4">
          {[
            { icon: Ship, label: "Bridge" },
            { icon: Target, label: "Missions" },
            { icon: Users, label: "Crew" },
            { icon: Package, label: "Inventory" },
            { icon: ShoppingCart, label: "Shop" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              title={label}
              className="flex size-10 items-center justify-center rounded border border-cyan-500/20 bg-[#0a2230] text-cyan-300/70 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              <Icon className="size-4" />
            </button>
          ))}
        </nav>

        {/* Scene */}
        <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#041018] p-4">
          <div className="relative aspect-[16/9] w-full max-h-full overflow-hidden rounded border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <Image
              src="/screens/commons-topdown.png"
              alt="Commons top-down view"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-contain [image-rendering:pixelated]"
            />
            {/* scanline overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.6) 3px)",
              }}
            />
            {/* agent quick chips */}
            <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
              {AGENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setSelected(a)}
                  className="rounded border border-cyan-400/40 bg-[#031018]/80 px-2 py-0.5 text-[10px] font-bold tracking-wider text-cyan-200 backdrop-blur hover:border-cyan-300 hover:text-cyan-50"
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="flex w-72 flex-col gap-3 border-l border-cyan-500/30 bg-[#081a24] p-3">
          <section className="rounded border border-cyan-500/30 bg-[#0a2230] p-3">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-cyan-300">ACTIVITY LOG</h2>
            <ul className="space-y-1 text-[11px] leading-tight text-cyan-200/80">
              {ACTIVITY_LOG.map((e, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-cyan-500/60">{e.t}</span>
                  <span>{e.msg}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded border border-cyan-500/30 bg-[#0a2230] p-3">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-cyan-300">OCCUPANCY</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-cyan-200">{AGENTS.length}</span>
              <span className="text-cyan-500/60">/ {AGENTS.length}</span>
              <span className="ml-auto text-[10px] tracking-widest text-cyan-400/70">AGENTS PRESENT</span>
            </div>
          </section>

          <section className="rounded border border-cyan-500/30 bg-[#0a2230] p-3">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-cyan-300">MOOD</h2>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{avgMood}</span>
              <div className="flex-1 text-[11px] text-cyan-200/70">
                <div className="flex gap-1">
                  {AGENTS.map((a) => (
                    <span key={a.id} title={a.name}>{a.mood}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {selected && (
            <section className="rounded border border-cyan-400/60 bg-[#0a2230] p-3">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-sm font-bold tracking-wider text-cyan-200">{selected.name}</h2>
                  <p className="text-[11px] text-cyan-400/80">{selected.role}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-cyan-400/60 hover:text-cyan-200" aria-label="Close">
                  ×
                </button>
              </div>
              <p className="mt-2 text-[11px] text-cyan-100/80">{selected.status}</p>
              <div className="mt-3 flex gap-2">
                <Badge variant="outline" className="border-cyan-500/40 text-cyan-200">{selected.mood} mood</Badge>
                <Badge variant="outline" className="border-cyan-500/40 text-cyan-200">on deck 02</Badge>
              </div>
            </section>
          )}
        </aside>
      </div>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between gap-3 border-t border-cyan-500/30 bg-[#081a24] px-4 py-2 text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-300"><Coins className="size-3.5" /> <b>CR 1,850</b></span>
          <span className="flex items-center gap-1.5 text-cyan-200"><Zap className="size-3.5" /> <b>12/30</b></span>
          <span className="flex items-center gap-1.5 text-cyan-200"><Gauge className="size-3.5" /> <b>2 ops</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">ASSIGN</Button>
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">CALL MEETING</Button>
          <Button size="sm" className="bg-cyan-400 text-[#06121a] hover:bg-cyan-300">SHIP STATUS</Button>
        </div>
      </footer>
    </div>
  );
}
