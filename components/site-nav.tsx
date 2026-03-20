"use client";

import Link from "next/link";
import { buttonPrimary, buttonSecondary, buttonIconWrap } from "@/components/button-styles";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/seo", label: "SEO Hub" },
  { href: "/vibe-coding", label: "Vibe Coding" },
  { href: "/live-ai-coding-battles", label: "Live AI Coding Battles" },
  { href: "/ai-app-building-competition", label: "AI App Building Competition" },
  { href: "/builder-battles", label: "Builder Battles" },
  { href: "/spectator-voted-coding-battles", label: "Spectator Voting" },
];

function ConnectedRings() {
  const rings = [
    { color: "#14A3FF", x: 0, y: 0 },
    { color: "#FFCC18", x: 24, y: 0 },
    { color: "#8B8FA1", x: 48, y: 0 },
    { color: "#00D39B", x: 12, y: 16 },
    { color: "#FF3B9D", x: 36, y: 16 },
  ];

  return (
    <div className="relative h-12 w-[76px] shrink-0">
      {rings.map((ring) => (
        <span
          key={`${ring.color}-${ring.x}-${ring.y}`}
          className="absolute rounded-full border-[3px]"
          style={{
            width: 26,
            height: 26,
            left: ring.x,
            top: ring.y,
            borderColor: ring.color,
            background: "transparent",
          }}
        />
      ))}
    </div>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const topButtonClass =
    "inline-flex h-12 items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,8,14,0.82)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1600px] px-6 py-5 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="group flex min-w-0 items-center gap-5">
            <ConnectedRings />

            <div className="min-w-0">
              <div className="text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
                Vibebattle
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.42em] text-white/34 sm:text-[12px]">
                AI-native competition
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`${topButtonClass} w-[180px]`}
            >
              <span className="inline-flex items-center gap-3">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span>Menu</span>
              </span>
            </button>

            <Link
              href="https://vibebattle.live/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className={`${topButtonClass} w-[180px]`}
            >
              <span>Join waitlist</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {open ? (
          <div className="mt-5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.95),rgba(6,10,18,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/78 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
