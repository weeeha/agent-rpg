import Image from "next/image";
import { notFound } from "next/navigation";
import { AGENTS, MISSIONS } from "@/lib/game-data";
import { ScreenShell, Panel } from "@/components/chrome/screen-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return MISSIONS.map((m) => ({ slug: m.slug }));
}

function DifficultyStars({ n }: { n: number }) {
  return (
    <span aria-label={`Difficulty ${n}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-amber-300" : "text-cyan-500/25"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default async function MissionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mission = MISSIONS.find((m) => m.slug === slug);
  if (!mission) notFound();

  const assigned = mission.assigned
    .map((s) => AGENTS.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <ScreenShell
      title="TASK BRIEFING"
      subtitle={mission.title.toUpperCase()}
      backHref="/missions"
      bottomActions={
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">CANCEL</Button>
          <Button size="sm" className="bg-amber-400 text-[#06121a] hover:bg-amber-300 font-bold">DEPLOY SQUAD</Button>
        </div>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-2">
        {/* Scenario illustration */}
        <div className="relative aspect-video overflow-hidden rounded border-2 border-cyan-500/40 bg-[#081a24] shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <Image
            src="/screens/mission-briefing.png"
            alt={mission.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover [image-rendering:pixelated]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.6) 3px)" }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Panel>
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-xl font-bold tracking-wider text-cyan-200">{mission.title}</h2>
              <DifficultyStars n={mission.difficulty} />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {mission.tags.map((t) => (
                <Badge key={t} variant="outline" className="border-cyan-500/40 text-cyan-200">{t}</Badge>
              ))}
              <Badge className={mission.risk === "HIGH-IMPACT" ? "bg-red-500/20 text-red-200 hover:bg-red-500/20" : "bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/20"}>
                {mission.risk}
              </Badge>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-cyan-100/80">{mission.description}</p>
          </Panel>

          <Panel title="OBJECTIVES">
            <ul className="space-y-1 text-[12px]">
              {mission.objectives.map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <span className="mt-0.5 size-3 rounded border border-cyan-500/40" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="ASSIGNED AGENTS">
            <div className="flex flex-wrap gap-2">
              {assigned.map((a) => (
                <div key={a.slug} className="flex items-center gap-2 rounded border border-cyan-500/30 bg-[#06121a] p-2">
                  <div className="relative size-10 overflow-hidden rounded border border-cyan-500/40">
                    <Image src={a.portrait} alt={a.name} fill sizes="40px" className="object-cover [image-rendering:pixelated]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-cyan-100">{a.name}</div>
                    <div className="text-[10px] text-cyan-400/80">{a.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="REWARDS">
            <div className="grid grid-cols-3 gap-2 text-[11px]">
              <div className="rounded bg-[#06121a] p-2 text-center">
                <div className="text-amber-300 font-bold">{mission.xp}</div>
                <div className="text-[9px] tracking-widest text-cyan-400/70">EXPERIENCE</div>
              </div>
              <div className="rounded bg-[#06121a] p-2 text-center">
                <div className="text-cyan-200 font-bold">{mission.cr}</div>
                <div className="text-[9px] tracking-widest text-cyan-400/70">CREDITS</div>
              </div>
              <div className="rounded bg-[#06121a] p-2 text-center">
                <div className="text-cyan-100 font-bold">{mission.eta}</div>
                <div className="text-[9px] tracking-widest text-cyan-400/70">EST. TIME</div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </ScreenShell>
  );
}
