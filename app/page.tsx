"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Swords,
  Trophy,
  Tv,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import WaitlistLink from "@/components/waitlist-link";

const promiseItems = [
  "Real-time head-to-head product building",
  "Dual-stream spectator experience",
  "Community-ruled outcomes with appeal mechanics",
  "Leaderboard credits and medal logic for progression",
];

const pillars = [
  {
    title: "Built for spectators, not just builders",
    body:
      "This is not a hidden coding session in a livestream tab. It is a productized competition format with dedicated spectator views, battle states, chat, voting, and outcomes.",
    icon: Tv,
  },
  {
    title: "Competition structure with broadcast energy",
    body:
      "The experience combines esports framing, hackathon creativity, and Olympic-style symbolism. The product is designed to make head-to-head creation legible and exciting to watch.",
    icon: Swords,
  },
  {
    title: "Fairness by product rules",
    body:
      "Access is approval-based, voting is one-account-per-round, and battle outcomes can be challenged through a visible community threshold instead of hidden admin overrides.",
    icon: Trophy,
  },
];

const seoLinks = [
  { href: "/vibe-coding", label: "Vibe Coding" },
  { href: "/live-ai-coding-battles", label: "Live AI Coding Battles" },
  { href: "/ai-app-building-competition", label: "AI App Building Competition" },
  { href: "/builder-battles", label: "Builder Battles" },
  { href: "/spectator-voted-coding-battles", label: "Spectator Voted Coding Battles" },
  { href: "/seo", label: "SEO Content Hub" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vibebattle",
  url: "https://vibebattle.space",
  description:
    "A premium live competition format for AI-native builders, spectator voting, and ranked creative battles.",
  publisher: {
    "@type": "Organization",
    name: "Vibebattle",
    url: "https://vibebattle.space",
  },
};

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
          className={`h-5 w-5 rounded-full border-2 ${color} bg-transparent`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-grid relative min-h-screen">
          <motion.div
            className="pointer-events-none absolute -left-16 top-16 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
            animate={{ x: [0, 35, 0], y: [0, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
            animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="card-glow relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.78),rgba(6,10,18,0.96))] p-5 sm:p-7 lg:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-rainbow-line opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_30%)]" />

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
                <div className="pt-2">
                  <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
                    <RingDots />
                    <span className="text-sm uppercase tracking-[0.35em] text-white/55">
                      Story / Positioning Deck
                    </span>
                  </div>

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-200">
                    <Zap className="h-3.5 w-3.5" />
                    live coding battles for the AI era
                  </div>

                  <h1 className="max-w-5xl text-[46px] font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-[78px] lg:text-[112px]">
                    Vibe Battle turns live coding into a{" "}
                    <span className="text-rainbow">
                      watchable competition format.
                    </span>
                  </h1>

                  <p className="mt-8 max-w-4xl text-xl leading-[1.7] text-white/52 sm:text-2xl">
                    A premium live 1v1 arena for AI-native builders. Competitors
                    build in public, spectators watch both sides in real time,
                    and the community decides who rises.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <WaitlistLink className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.015]">
                      Join the waitlist
                      <ArrowRight className="h-4 w-4" />
                    </WaitlistLink>

                    <Link
                      href="/vibe-coding"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      Explore vibe coding
                    </Link>
                  </div>
                </div>

                <div className="self-center rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 sm:p-7">
                  <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/45">
                    Core promise
                  </p>

                  <div className="space-y-5">
                    {promiseItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 * index }}
                        className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#09111d] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.025)_inset]"
                      >
                        <Shield className="h-5 w-5 shrink-0 text-amber-400" />
                        <span className="text-xl text-white/82">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <section className="mt-10 grid gap-5 lg:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 * index }}
                    className="card-glow rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,29,0.9),rgba(7,11,20,0.96))] p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>

                    <h2 className="max-w-xs text-[22px] font-black uppercase leading-tight tracking-[-0.02em] sm:text-[26px]">
                      {pillar.title}
                    </h2>

                    <p className="mt-4 text-[18px] leading-[1.7] text-white/48">
                      {pillar.body}
                    </p>
                  </motion.div>
                );
              })}
            </section>

            <section className="mt-10 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,29,0.86),rgba(7,11,20,0.96))] p-7 card-glow">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-white/45">
                    Search topics
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em]">
                    Explore vibe coding and battle pages
                  </h2>
                </div>
                <Link
                  href="/seo"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Open content hub
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {seoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-[#09111d] px-5 py-4 text-white/78 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
