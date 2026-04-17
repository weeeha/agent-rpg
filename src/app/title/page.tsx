import Image from "next/image";
import Link from "next/link";

const MENU = [
  { label: "NEW GAME", href: "/" },
  { label: "COMMONS", href: "/commons" },
  { label: "AGENTS", href: "/agents" },
  { label: "MISSIONS", href: "/missions" },
  { label: "CYBERWARE", href: "/cyberware" },
  { label: "SKILLS", href: "/skills" },
  { label: "ROOMS", href: "/rooms" },
];

export default function TitlePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#06121a] font-mono text-cyan-100">
      <Image
        src="/screens/title.png"
        alt="Agent RPG title"
        fill
        priority
        className="object-cover opacity-80 [image-rendering:pixelated]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06121a]/30 via-transparent to-[#06121a]/80" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-between p-10">
        <div className="flex w-full justify-between text-xs tracking-widest text-cyan-300/80">
          <span className="rounded border border-cyan-500/40 bg-[#081a24]/80 px-2 py-1">8 AGENTS</span>
          <span className="rounded border border-cyan-500/40 bg-[#081a24]/80 px-2 py-1">15 ROOMS</span>
        </div>

        <div className="text-center">
          <h1 className="text-6xl font-black tracking-[0.2em] text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] md:text-8xl">
            AGENT RPG
          </h1>
          <p className="mt-2 text-sm font-bold tracking-[0.4em] text-amber-300 md:text-base">CYBERPUNK COMMAND HQ</p>
          <p className="mt-1 text-xs tracking-widest text-cyan-400/70">VANGUARD-CLASS CORVETTE</p>
        </div>

        <nav className="grid w-full max-w-xl grid-cols-2 gap-2 md:grid-cols-4">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded border border-cyan-500/40 bg-[#081a24]/80 px-4 py-2 text-center text-xs font-bold tracking-wider text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-50"
            >
              {m.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
