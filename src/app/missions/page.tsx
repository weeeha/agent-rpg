import Link from "next/link";
import { MISSIONS } from "@/lib/game-data";
import { ScreenShell, Panel } from "@/components/chrome/screen-shell";
import { Badge } from "@/components/ui/badge";

function DifficultyStars({ n }: { n: number }) {
  return (
    <span className="tracking-tight" aria-label={`Difficulty ${n}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-amber-300" : "text-cyan-500/25"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function MissionsPage() {
  return (
    <ScreenShell
      title="MISSIONS"
      subtitle="MISSION BOARD"
      sidebar={
        <>
          <Panel title="FILTERS">
            <ul className="space-y-1 text-[11px]">
              {["All", "Engineering", "Security", "Documentation", "Legendary"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="size-3 rounded border border-cyan-500/40 bg-cyan-500/10" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="COMPLETED">
            <div className="text-2xl font-bold text-cyan-200">0</div>
            <div className="text-[10px] tracking-widest text-cyan-400/70">THIS WEEK</div>
          </Panel>
        </>
      }
    >
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-cyan-500/40 text-cyan-200">
            {MISSIONS.length} AVAILABLE
          </Badge>
          <div className="flex gap-2 text-[11px] text-cyan-400/80">
            <span className="rounded border border-cyan-500/30 bg-[#081a24] px-2 py-1">SORT BY</span>
            <span className="rounded border border-cyan-500/30 bg-[#081a24] px-2 py-1">CATEGORY</span>
            <span className="rounded border border-cyan-500/30 bg-[#081a24] px-2 py-1">DIFFICULTY</span>
          </div>
        </div>
        <ul className="space-y-2">
          {MISSIONS.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/missions/${m.slug}`}
                className="flex items-center gap-3 rounded border border-cyan-500/30 bg-[#081a24] p-3 transition hover:border-cyan-300 hover:bg-[#0a2230]"
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded border border-cyan-500/30 bg-[#06121a] text-2xl">
                  {m.risk === "HIGH-IMPACT" ? "🚨" : "📘"}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-bold text-cyan-200">{m.title}</span>
                    <DifficultyStars n={m.difficulty} />
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px]">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded bg-cyan-500/15 px-1.5 py-0.5 tracking-wider text-cyan-200">
                        {t.toUpperCase()}
                      </span>
                    ))}
                    <span className={`rounded px-1.5 py-0.5 tracking-wider ${m.risk === "HIGH-IMPACT" ? "bg-red-500/20 text-red-200" : "bg-emerald-500/20 text-emerald-200"}`}>
                      {m.risk}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-1 text-[11px] text-cyan-100/70">{m.description}</p>
                </div>
                <div className="shrink-0 text-right text-[11px]">
                  <div className="text-amber-300">{m.xp}</div>
                  <div className="text-cyan-200">{m.cr}</div>
                  <div className="text-cyan-400/70">{m.eta}</div>
                </div>
                <span className="shrink-0 rounded border border-cyan-400 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-bold tracking-widest text-cyan-200">
                  ACCEPT
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ScreenShell>
  );
}
