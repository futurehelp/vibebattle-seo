"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import WaitlistLink from "@/components/waitlist-link";

type Section = {
  title: string;
  body: string;
};

type SeoPageShellProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: Section[];
};

export default function SeoPageShell({
  eyebrow = "Vibebattle Guide",
  title,
  intro,
  sections,
}: SeoPageShellProps) {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#05070b] text-white">
        <div className="bg-grid relative overflow-hidden">
          <motion.div
            className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 35, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <article className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="card-glow rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.82),rgba(6,10,18,0.96))] p-8 sm:p-10 lg:p-12">
              <div className="mb-6 h-px w-32 bg-rainbow-line" />

              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
                {eyebrow}
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
                {intro}
              </p>

              <div className="mt-12 space-y-10">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                    <p className="mt-4 leading-8 text-white/70">
                      {section.body}
                    </p>
                  </section>
                ))}

                <section className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <h2 className="text-2xl font-bold text-white">
                    Join the waitlist
                  </h2>
                  <p className="mt-4 leading-8 text-white/70">
                    Get early access to live battles, launch updates, and the
                    next generation of AI-native creator competition.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <WaitlistLink className="inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-black">
                      Go to the waitlist
                    </WaitlistLink>

                    <Link
                      href="/seo"
                      className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      Explore more topics
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
