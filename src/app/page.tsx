import Image from "next/image";
import Link from "next/link";
import { AGENTS } from "@/lib/game-data";
import { ScreenShell, Panel, Scanlines } from "@/components/chrome/screen-shell";
import { Button } from "@/components/ui/button";

const ACTIVITY_LOG = [
  { t: "T-00:05", msg: "ATLAS rerouted to Bridge" },
  { t: "T-00:12", msg: "Reactor idle" },
  { t: "T-00:22", msg: "CIPHER brewing coffee" },
  { t: "T-00:30", msg: "FORGE fabrication queue +1" },
  { t: "T-00:45", msg: "ECHO queued a song" },
  { t: "T-00:58", msg: "Mission briefing auto-drafted" },
];

const ROOM_LINKS = [
  { label: "BRIDGE", href: "/rooms/bridge", color: "bg-violet-500/80" },
  { label: "MEMORY", href: "/rooms/memory-vault", color: "bg-cyan-500/80" },
  { label: "MEDBAY", href: "/rooms/medbay", color: "bg-emerald-500/80" },
  { label: "WORKSHOP", href: "/rooms/workshop", color: "bg-amber-500/80" },
  { label: "COMMONS", href: "/commons", color: "bg-orange-500/80" },
];

export default function HomePage() {
  return (
    <ScreenShell
      title="AGENT BASE"
      subtitle="VANGUARD-CLASS CORVETTE · SECTOR 7"
      backHref="/title"
      bottomActions={
        <div className="flex items-center gap-2">
          <Link
            href="/play"
            className="rounded-md border border-cyan-500/40 bg-transparent px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/10"
          >
            OPEN LIVE SIM
          </Link>
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">ASSIGN</Button>
          <Button size="sm" className="bg-cyan-400 text-[#06121a] hover:bg-cyan-300">MISSION CONTROL</Button>
        </div>
      }
      sidebar={
        <>
          <Panel title="ACTIVITY LOG">
            <ul className="space-y-1 text-[11px] leading-tight text-cyan-200/80">
              {ACTIVITY_LOG.map((e, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-cyan-500/60">{e.t}</span>
                  <span>{e.msg}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="BASE MAP">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-cyan-200">15</span>
              <span className="text-[10px] tracking-widest text-cyan-400/70">ROOMS</span>
              <span className="ml-auto text-[11px] text-emerald-300">82% EFFICIENCY</span>
            </div>
          </Panel>
          <Panel title="CREW">
            <div className="grid grid-cols-4 gap-1">
              {AGENTS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agents/${a.slug}`}
                  title={a.name}
                  className="relative aspect-square overflow-hidden rounded border border-cyan-500/30 hover:border-cyan-300"
                >
                  <Image src={a.portrait} alt={a.name} fill sizes="48px" className="object-cover [image-rendering:pixelated]" />
                </Link>
              ))}
            </div>
            <div className="mt-2 text-[10px] tracking-widest text-cyan-400/70">8 / 8 ON DECK</div>
          </Panel>
        </>
      }
    >
      <div className="flex w-full flex-col gap-3">
        <div className="relative overflow-hidden rounded border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="relative aspect-[16/9]">
            <Image
              src="/screens/base-topdown.png"
              alt="Base top-down view"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover [image-rendering:pixelated]"
            />
            <Scanlines />
          </div>
          <div className="absolute inset-x-3 top-3 flex flex-wrap gap-1.5">
            {ROOM_LINKS.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className={`rounded border border-white/20 ${r.color} px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#06121a] backdrop-blur-sm hover:brightness-125`}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legend / hint row */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-cyan-500/30 bg-[#081a24] px-3 py-2 text-[11px] text-cyan-300/80">
          <span className="tracking-widest">15 ROOMS · 8 AGENTS · 2 ACTIVE OPS</span>
          <span className="tracking-widest">CLICK A LABEL OR USE <kbd className="rounded border border-cyan-500/40 bg-[#06121a] px-1">☰ SCREENS</kbd> TO NAVIGATE</span>
        </div>
      </div>
    </ScreenShell>
  );
}
