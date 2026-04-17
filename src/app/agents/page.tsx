import Image from "next/image";
import Link from "next/link";
import { AGENTS } from "@/lib/game-data";
import { ScreenShell } from "@/components/chrome/screen-shell";

export default function AgentsPage() {
  return (
    <ScreenShell title="AGENT ROSTER" subtitle="SELECT A CREW MEMBER">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {AGENTS.map((a) => (
            <Link
              key={a.slug}
              href={`/agents/${a.slug}`}
              className="group relative overflow-hidden rounded border-2 border-cyan-500/30 bg-[#081a24] shadow-[0_0_0_1px_rgba(34,211,238,0.1)] transition hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={a.portrait}
                  alt={a.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover [image-rendering:pixelated]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06121a]/95 via-[#06121a]/70 to-transparent p-2">
                  <div className="text-sm font-bold tracking-wider text-cyan-200">{a.name}</div>
                  <div className="flex items-center justify-between text-[10px] text-cyan-400/80">
                    <span>{a.role}</span>
                    <span>LVL {a.level}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
