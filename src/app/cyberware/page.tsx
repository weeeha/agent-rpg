import { AGENTS, CYBERWARE_MODULES } from "@/lib/game-data";
import { ScreenShell, Panel, StatBar } from "@/components/chrome/screen-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MODULE_ICONS: Record<string, string> = {
  cortex: "🧠",
  "neural-mesh": "💀",
  optics: "👁️",
  vocoder: "🎙️",
  manipulators: "🦾",
  "skill-matrix": "🧩",
  "reflex-arc": "⚡",
  firewall: "🛡️",
};

export default function CyberwarePage() {
  const atlas = AGENTS.find((a) => a.slug === "atlas")!;

  return (
    <ScreenShell
      title="CYBERWARE"
      subtitle="AUGMENTATION MATRIX"
      sidebar={
        <>
          <Panel title="REPUTATION">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏅</span>
              <span className="text-sm font-bold text-emerald-300">{atlas.reputation.toUpperCase()}</span>
            </div>
          </Panel>
          <Panel title="MISSIONS">
            <div className="text-2xl font-bold text-cyan-200">{atlas.missions}</div>
            <div className="text-[10px] tracking-widest text-cyan-400/70">COMPLETED</div>
          </Panel>
        </>
      }
      bottomActions={
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">SHOP</Button>
          <Button size="sm" className="bg-cyan-400 text-[#06121a] hover:bg-cyan-300">INSTALL</Button>
        </div>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-[auto_1fr]">
        {/* Agent summary */}
        <div className="flex w-64 flex-col gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded border-2 border-cyan-500/40">
            <Image src={atlas.portrait} alt={atlas.name} fill sizes="256px" className="object-cover [image-rendering:pixelated]" />
          </div>
          <Panel>
            <div className="text-xl font-black tracking-wider text-cyan-200">{atlas.name}</div>
            <div className="text-[10px] tracking-widest text-cyan-400">LVL {atlas.level} · {atlas.class.toUpperCase()}</div>
            <div className="mt-2 text-xs text-amber-300">CR {atlas.credits.toLocaleString()}</div>
            <div className="mt-1">
              <Badge variant="outline" className="border-emerald-400/60 text-emerald-300">{atlas.reputation}</Badge>
            </div>
          </Panel>
          <Panel title="CORE STATS">
            <div className="space-y-1.5">
              <StatBar label="Reason" value={atlas.stats.reasoning} />
              <StatBar label="Speed" value={atlas.stats.speed} />
              <StatBar label="Accuracy" value={atlas.stats.accuracy} />
              <StatBar label="Context" value={atlas.stats.context} />
              <StatBar label="Tool-use" value={atlas.stats.tooluse} />
            </div>
          </Panel>
        </div>

        {/* Modules grid */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs tracking-widest text-cyan-400/70">8 MODULES · 17 SLOTS TOTAL</span>
            <span className="text-[11px] text-amber-300">14 SKILL POINTS AVAILABLE</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CYBERWARE_MODULES.map((m) => {
              const pct = (m.tier / m.max) * 100;
              return (
                <div
                  key={m.slug}
                  className="rounded border border-cyan-500/30 bg-[#081a24] p-3 transition hover:border-cyan-300 hover:bg-[#0a2230]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{MODULE_ICONS[m.slug]}</span>
                    <Badge variant="outline" className="border-cyan-500/40 text-cyan-200">
                      {m.tier}/{m.max}
                    </Badge>
                  </div>
                  <div className="mt-2 text-sm font-bold tracking-wider text-cyan-200">{m.name.toUpperCase()}</div>
                  <div className="text-[10px] text-cyan-400/70">{m.desc}</div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-cyan-500/15">
                    <div className="h-full bg-cyan-400" style={{ width: `${pct}%` }} />
                  </div>
                  <button className="mt-2 w-full rounded border border-cyan-500/40 bg-[#06121a] py-1 text-[10px] font-bold tracking-widest text-cyan-300 hover:bg-cyan-500/10">
                    UPGRADE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
