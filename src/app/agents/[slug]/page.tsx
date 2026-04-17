import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENTS } from "@/lib/game-data";
import { ScreenShell, Panel, StatBar } from "@/components/chrome/screen-shell";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export default async function AgentProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS.find((a) => a.slug === slug);
  if (!agent) notFound();

  return (
    <ScreenShell
      title="AGENT PROFILE"
      subtitle={agent.name}
      backHref="/agents"
      sidebar={
        <>
          <Panel title="CYBERWARE">
            <ul className="space-y-1 text-[11px]">
              {agent.cyberware.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded bg-[#06121a] px-2 py-1">
                  <span className="text-cyan-200">{c.name}</span>
                  <span className="font-bold text-amber-300">TIER {c.tier}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="MEMORY BANKS">
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className={`h-6 w-4 rounded-sm ${i < 5 ? "bg-emerald-400/80" : "bg-cyan-500/15"}`} />
              ))}
            </div>
            <div className="mt-2 text-[10px] text-cyan-400/70">5 / 8 banks indexed</div>
          </Panel>
          <Panel title="CONNECTORS">
            <div className="flex gap-2 text-xs">
              {["IG", "LN", "X"].map((c) => (
                <span key={c} className="flex size-8 items-center justify-center rounded border border-cyan-500/40 bg-[#06121a] font-bold text-cyan-300">{c}</span>
              ))}
            </div>
          </Panel>
        </>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-[auto_1fr]">
        {/* Portrait column */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-[3/4] w-64 overflow-hidden rounded border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <Image
              src={agent.portrait}
              alt={agent.name}
              fill
              priority
              sizes="256px"
              className="object-cover [image-rendering:pixelated]"
            />
          </div>
          <div className="rounded border border-cyan-500/40 bg-[#081a24] p-3">
            <div className="text-2xl font-black tracking-wider text-cyan-200">{agent.name}</div>
            <div className="text-xs tracking-widest text-cyan-400">
              LVL {agent.level} · {agent.class.toUpperCase()}
            </div>
            <div className="mt-2 flex items-center gap-2 text-[11px]">
              <Badge variant="outline" className="border-emerald-400/60 text-emerald-300">
                {agent.reputation}
              </Badge>
              <span className="text-amber-300">CR {agent.credits.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Stats + skills */}
        <div className="flex flex-col gap-3">
          <Panel title="CORE STATS">
            <div className="space-y-1.5">
              <StatBar label="Reasoning" value={agent.stats.reasoning} />
              <StatBar label="Speed" value={agent.stats.speed} />
              <StatBar label="Accuracy" value={agent.stats.accuracy} />
              <StatBar label="Context" value={agent.stats.context} />
              <StatBar label="Tool-use" value={agent.stats.tooluse} />
            </div>
          </Panel>

          <Panel title="PERFORMANCE">
            <div className="space-y-1.5">
              <StatBar label="Success" value={agent.performance.success} accent="green" />
              <StatBar label="Quality" value={agent.performance.quality} accent="green" />
              <StatBar label="Autonomy" value={agent.performance.autonomy} accent="green" />
            </div>
            <div className="mt-2 flex items-baseline justify-between text-[11px]">
              <span className="text-cyan-400/70">TOTAL MISSIONS</span>
              <span className="font-bold text-cyan-100">{agent.missions}</span>
            </div>
          </Panel>

          <Panel title="SKILLS">
            <div className="grid grid-cols-3 gap-2">
              {agent.skills.map((s) => (
                <div
                  key={s.name}
                  className={`rounded border p-2 text-center ${
                    s.tier === "EPIC" ? "border-amber-400/60 bg-amber-500/10" : "border-violet-400/60 bg-violet-500/10"
                  }`}
                >
                  <div className="text-[11px] font-bold tracking-wider text-cyan-100">{s.name}</div>
                  <div className={`text-[9px] font-bold tracking-widest ${s.tier === "EPIC" ? "text-amber-300" : "text-violet-300"}`}>
                    {s.tier}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </ScreenShell>
  );
}
