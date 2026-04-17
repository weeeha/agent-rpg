import Image from "next/image";
import { notFound } from "next/navigation";
import { ROOMS } from "@/lib/game-data";
import { ScreenShell, Panel, Scanlines } from "@/components/chrome/screen-shell";

export function generateStaticParams() {
  return ROOMS.filter((r) => r.slug !== "memory-vault").map((r) => ({ slug: r.slug }));
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) notFound();

  return (
    <ScreenShell title={room.name.toUpperCase()} subtitle={room.subtitle.toUpperCase()} backHref="/rooms">
      <div className="grid w-full gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-video overflow-hidden rounded border-2 border-cyan-500/40">
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
          <Panel title="DESCRIPTION">
            <p className="text-[11px] leading-relaxed text-cyan-100/80">
              The {room.name} is currently operating within normal parameters. Agents can be assigned here to operate the facility.
            </p>
          </Panel>
        </div>
      </div>
    </ScreenShell>
  );
}
