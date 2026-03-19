"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import WaitlistLink from "@/components/waitlist-link";

function RingDots() {
  const colors = [
    "border-sky-500",
    "border-amber-400",
    "border-zinc-500",
    "border-emerald-500",
    "border-pink-500",
  ];

  return (
    <div className="flex items-center gap-1.5">
      {colors.map((color) => (
        <span
          key={color}
          className={`h-4 w-4 rounded-full border-2 ${color} bg-transparent shadow-[0_0_12px_rgba(255,255,255,0.04)]`}
        />
      ))}
    </div>
  );
}

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,8,14,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-5">
          <Link href="/" className="group flex items-center gap-4">
            <RingDots />
            <div>
              <div className="text-2xl font-black uppercase tracking-[-0.04em] text-white transition group-hover:text-white/90">
                Vibe Battle
              </div>
              <div className="text-[11px] uppercase tracking-[0.42em] text-white/40">
                AI-native competition
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href="/seo"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-white/75 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              Story
            </Link>
            <Link
              href="/vibe-coding"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-white/75 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              Vibe Coding
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/8 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-sky-200/90 lg:flex">
            <Sparkles className="h-3.5 w-3.5" />
            waitlist live
          </div>

          <WaitlistLink
            className="hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
          >
            <span>Join waitlist</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </WaitlistLink>
        </div>
      </div>
    </header>
  );
}
