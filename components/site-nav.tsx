"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import WaitlistLink from "@/components/waitlist-link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/seo", label: "SEO Hub" },
  { href: "/vibe-coding", label: "Vibe Coding" },
  { href: "/live-ai-coding-battles", label: "Live AI Coding Battles" },
  { href: "/ai-app-building-competition", label: "AI App Building Competition" },
  { href: "/live-coding-competition-platform", label: "Live Coding Competition Platform" },
  { href: "/builder-battles", label: "Builder Battles" },
  { href: "/ai-hackathon-alternative", label: "AI Hackathon Alternative" },
  { href: "/watch-people-build-apps-live", label: "Watch People Build Apps Live" },
  { href: "/spectator-voted-coding-battles", label: "Spectator Voted Coding Battles" },
  { href: "/real-time-builder-competition", label: "Real-Time Builder Competition" },
  { href: "/coding-battles-with-ai-tools", label: "Coding Battles With AI Tools" },
  { href: "/startup-battle-platform", label: "Startup Battle Platform" },
  { href: "/competitive-app-building", label: "Competitive App Building" },
  { href: "/esports-for-builders", label: "Esports for Builders" },
  { href: "/live-product-build-show", label: "Live Product Build Show" },
  { href: "/online-coding-tournament", label: "Online Coding Tournament" },
  { href: "/creator-battle-platform", label: "Creator Battle Platform" },
  { href: "/head-to-head-coding-battles", label: "Head-to-Head Coding Battles" },
  { href: "/live-build-off-platform", label: "Live Build-Off Platform" },
  { href: "/ai-creator-competition", label: "AI Creator Competition" },
  { href: "/community-voted-builder-battles", label: "Community Voted Builder Battles" },
  { href: "/best-platform-for-live-coding-battles", label: "Best Platform for Live Coding Battles" },
];

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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,8,14,0.72)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1600px] px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <Link href="/" className="group flex items-center gap-4">
              <RingDots />
              <div>
                <div className="text-2xl font-black uppercase tracking-[-0.04em] text-white transition group-hover:text-white/90">
                  Vibebattle
                </div>
                <div className="text-[11px] uppercase tracking-[0.42em] text-white/40">
                  AI-native competition
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/8 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-sky-200/90 lg:flex">
              <Sparkles className="h-3.5 w-3.5" />
              pages live
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              Menu
            </button>

            <WaitlistLink className="hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white">
              <span>Join waitlist</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </WaitlistLink>
          </div>
        </div>

        {open ? (
          <div className="mt-4 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.9),rgba(6,10,18,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
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
