import Image from "next/image";
import { AGENTS, ROOMS } from "@/lib/game-data";
import { ScreenShell, Panel, Scanlines } from "@/components/chrome/screen-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MEMORY_BANKS = [
  { name: "PROJECT-KEPLER", size: "247/12 TB", lastAgent: "cipher", ago: "active" },
  { name: "MISSION-NOX-7", size: "2711 GB", lastAgent: "echo", ago: "1 hr" },
  { name: "CLIENT-OMEGA", size: "62 GB", lastAgent: "mirror", ago: "3 hr" },
  { name: "POSTMORTEMS", size: "22 GB", lastAgent: "echo", ago: "1 hr" },
  { name: "RAG-INDEX", size: "64 GB", lastAgent: "cipher", ago: "2 hr" },
  { name: "ONBOARDING", size: "63 GB", lastAgent: "muse", ago: "6 hr" },
];

export default function MemoryVaultPage() {
  const room = ROOMS.find((r) => r.slug === "memory-vault")!;
  const cipher = AGENTS.find((a) => a.slug === "cipher")!;
  const echo = AGENTS.find((a) => a.slug === "echo")!;

  return (
    <ScreenShell
      title="MEMORY VAULT"
      subtitle={room.subtitle.toUpperCase()}
      backHref="/rooms"
      bottomActions={
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">ASSIGN AGENT</Button>
          <Button size="sm" variant="outline" className="border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10">BUILD SHARD</Button>
          <Button size="sm" className="bg-cyan-400 text-[#06121a] hover:bg-cyan-300">QUERY LOG</Button>
        </div>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-video overflow-hidden rounded border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          <Image
            src={room.image}
            alt={room.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover [image-rendering:pixelated]"
          />
          <Scanlines />
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="STATS">
            <div className="grid grid-cols-2 gap-2">
              {room.stats.map((s) => (
                <div key={s.label} className="rounded bg-[#06121a] p-2">
                  <div className="text-[10px] tracking-widest text-cyan-400/70">{s.label.toUpperCase()}</div>
                  <div className="text-base font-bold text-cyan-200">{s.value}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="MEMORY BANKS">
            <ul className="space-y-1 text-[11px]">
              {MEMORY_BANKS.map((b) => (
                <li key={b.name} className="flex items-center justify-between rounded bg-[#06121a] px-2 py-1">
                  <span className="font-bold text-cyan-200">{b.name}</span>
                  <span className="text-cyan-400/70">{b.size}</span>
                  <span className="text-right text-cyan-300/80">{b.ago}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="ASSIGNED AGENTS">
            <div className="flex gap-2">
              {[cipher, echo].map((a) => (
                <div key={a.slug} className="flex items-center gap-2 rounded border border-cyan-500/30 bg-[#06121a] p-2">
                  <div className="relative size-10 overflow-hidden rounded border border-cyan-500/40">
                    <Image src={a.portrait} alt={a.name} fill sizes="40px" className="object-cover [image-rendering:pixelated]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-cyan-100">{a.name}</div>
                    <div className="text-[10px] text-cyan-400/80">
                      {a.slug === "cipher" ? "Decrypting" : "Indexing"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-1">
              <Badge variant="outline" className="border-cyan-500/40 text-cyan-200">
                Capacity 48%
              </Badge>
              <Badge variant="outline" className="border-amber-400/60 text-amber-200">
                7 live queries
              </Badge>
            </div>
          </Panel>
        </div>
      </div>
    </ScreenShell>
  );
}
