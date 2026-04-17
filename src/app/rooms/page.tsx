import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/game-data";
import { ScreenShell } from "@/components/chrome/screen-shell";

export default function RoomsPage() {
  return (
    <ScreenShell title="SHIP ROOMS" subtitle="SELECT A COMPARTMENT">
      <div className="grid w-full gap-3 md:grid-cols-2">
        {ROOMS.map((r) => (
          <Link
            key={r.slug}
            href={`/rooms/${r.slug}`}
            className="group relative overflow-hidden rounded border-2 border-cyan-500/30 transition hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            <div className="relative aspect-video">
              <Image
                src={r.image}
                alt={r.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover [image-rendering:pixelated]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06121a]/90 via-[#06121a]/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3">
              <div className="text-lg font-black tracking-wider text-cyan-200 drop-shadow">{r.name.toUpperCase()}</div>
              <div className="text-[11px] tracking-widest text-cyan-400/90">{r.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </ScreenShell>
  );
}
