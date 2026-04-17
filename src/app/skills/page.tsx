"use client";

import { useState } from "react";
import { SKILLS } from "@/lib/game-data";
import { ScreenShell, Panel } from "@/components/chrome/screen-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  { key: "all", label: "ALL", count: 15, icon: "📋" },
  { key: "analysis", label: "ANALYSIS", count: 3, icon: "🔍" },
  { key: "engineering", label: "ENGINEERING", count: 1, icon: "⚙️" },
  { key: "security", label: "SECURITY", count: 1, icon: "🛡️" },
  { key: "leadership", label: "LEADERSHIP", count: 1, icon: "👥" },
  { key: "memory", label: "MEMORY", count: 1, icon: "🧠" },
];

export default function SkillsPage() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(SKILLS.find((s) => s.slug === "system-design")!);

  const visible = SKILLS.filter((s) => category === "all" || s.category.toLowerCase() === category);

  return (
    <ScreenShell
      title="SKILL TREE"
      subtitle="CONSTELLATION"
      sidebar={
        <>
          <Panel title="SELECTED SKILL">
            <div className="text-center text-4xl">{selected.icon}</div>
            <div className="mt-1 text-center text-sm font-bold tracking-wider text-cyan-200">{selected.name}</div>
            <div className="mt-1 text-center">
              <Badge
                className={selected.tier === "EPIC" ? "bg-amber-500/20 text-amber-200 hover:bg-amber-500/20" : "bg-violet-500/20 text-violet-200 hover:bg-violet-500/20"}
              >
                {selected.tier}
              </Badge>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-cyan-100/80">
              This skill enables the agent to architect systems from the ground up, improving their design and reasoning capabilities on large codebases.
            </p>
            <div className="mt-3 space-y-1 text-[11px]">
              <div className="text-emerald-300">+3 ARCHITECTURE</div>
              <div className="text-emerald-300">+2 REASONING</div>
            </div>
            <div className="mt-3 text-[10px] tracking-widest text-cyan-400/70">PREREQUISITES</div>
            <ul className="text-[11px] text-cyan-200">
              <li>✓ Code Audit</li>
              <li>· Tool Fusion</li>
            </ul>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-amber-300">COST 2 SP</span>
              <Button size="sm" className="bg-cyan-400 text-[#06121a] hover:bg-cyan-300">UNLOCK</Button>
            </div>
          </Panel>
          <Panel>
            <div className="rounded border border-amber-400/60 bg-amber-500/10 p-2 text-center">
              <div className="text-2xl font-bold text-amber-300">14</div>
              <div className="text-[10px] tracking-widest text-amber-200/80">SKILL POINTS AVAILABLE</div>
            </div>
          </Panel>
        </>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-[220px_1fr]">
        {/* Categories */}
        <div className="flex flex-col gap-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`flex items-center gap-2 rounded border px-3 py-2 text-left text-[11px] font-bold tracking-wider transition ${
                category === c.key
                  ? "border-cyan-300 bg-cyan-400/15 text-cyan-100"
                  : "border-cyan-500/30 bg-[#081a24] text-cyan-300/80 hover:border-cyan-400 hover:text-cyan-200"
              }`}
            >
              <span className="text-base">{c.icon}</span>
              <span className="flex-1">{c.label}</span>
              <span className="text-[10px] text-cyan-400/70">({c.count})</span>
            </button>
          ))}
        </div>

        {/* Constellation */}
        <div className="relative min-h-[420px] overflow-hidden rounded border-2 border-cyan-500/40 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08),_transparent_60%),_linear-gradient(to_bottom,_#041018,_#06121a)]">
          {/* Starfield decoration */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(rgba(34,211,238,0.25) 1px, transparent 1px)",
              backgroundSize: "40px 40px, 70px 70px",
              backgroundPosition: "0 0, 20px 30px",
            }}
          />
          {/* Nodes arranged in a grid */}
          <div className="relative grid h-full grid-cols-3 gap-6 p-8">
            {visible.map((s) => {
              const isSelected = selected.slug === s.slug;
              return (
                <button
                  key={s.slug}
                  onClick={() => setSelected(s)}
                  className={`relative flex flex-col items-center gap-1 rounded-lg border-2 p-3 transition ${
                    isSelected
                      ? "border-amber-400 bg-amber-500/15 shadow-[0_0_25px_rgba(251,191,36,0.4)]"
                      : s.unlocked
                      ? "border-cyan-400/70 bg-cyan-500/10 hover:border-cyan-300 hover:bg-cyan-500/20"
                      : "border-cyan-500/20 bg-[#081a24]/60 text-cyan-500/40"
                  }`}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-center text-[11px] font-bold tracking-wider">{s.name.toUpperCase()}</span>
                  {!s.unlocked && <span className="absolute top-1 right-1 text-[10px]">🔒</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
