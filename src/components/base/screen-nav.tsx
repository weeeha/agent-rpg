"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  Target,
  Cpu,
  Network,
  DoorOpen,
  Sparkles,
  Settings,
  Menu,
  X,
  Home,
} from "lucide-react";

const LINKS = [
  { icon: Home, label: "Base", href: "/" },
  { icon: Sparkles, label: "Title", href: "/title" },
  { icon: Users, label: "Commons", href: "/commons" },
  { icon: Target, label: "Missions", href: "/missions" },
  { icon: Users, label: "Agents", href: "/agents" },
  { icon: Cpu, label: "Cyberware", href: "/cyberware" },
  { icon: Network, label: "Skills", href: "/skills" },
  { icon: DoorOpen, label: "Rooms", href: "/rooms" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function ScreenNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-3 right-3 z-50 font-mono">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded border border-cyan-500/40 bg-[#081a24]/90 px-3 py-2 text-xs font-bold tracking-widest text-cyan-200 backdrop-blur hover:border-cyan-300 hover:text-cyan-50"
          aria-label="Open menu"
        >
          <Menu className="size-4" />
          SCREENS
        </button>
      ) : (
        <div className="flex flex-col gap-1 rounded border border-cyan-500/40 bg-[#081a24]/95 p-2 backdrop-blur min-w-[180px]">
          <div className="flex items-center justify-between px-1 pb-1">
            <span className="text-[10px] font-bold tracking-widest text-cyan-400">NAVIGATE</span>
            <button
              onClick={() => setOpen(false)}
              className="text-cyan-400/70 hover:text-cyan-100"
              aria-label="Close menu"
            >
              <X className="size-3.5" />
            </button>
          </div>
          {LINKS.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded px-2 py-1.5 text-[11px] font-bold tracking-wider text-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-50"
            >
              <Icon className="size-3.5 text-cyan-400" />
              {label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
