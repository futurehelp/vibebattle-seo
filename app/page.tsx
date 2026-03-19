"use client";

import { motion } from "framer-motion";
import { Trophy, Swords, Zap, ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.16),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.14),transparent_28%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
          >
            <Zap className="h-4 w-4" />
            Live coding battles for the AI era
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-5xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
          >
            Build. Battle. Become legend.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl"
          >
            Vibebattle is where builders go head-to-head in live creative combat.
            Spectators watch the build happen in real time, vote on the winner,
            and push the leaderboard forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#waitlist"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              How it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-20 grid gap-4 md:grid-cols-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Swords className="mb-4 h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold">1v1 live battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Head-to-head build challenges designed for speed, pressure, and spectacle.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Trophy className="mb-4 h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold">Spectator voting</h2>
              <p className="mt-2 text-sm leading-7 text-white/65">
                The crowd decides what ships, what wins, and who climbs the ladder.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Zap className="mb-4 h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold">Built for hype</h2>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Clean visuals, sharp motion, and a format that feels more like esports than a demo day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
            How it works
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            A competitive format built for builders and spectators
          </h2>
          <p className="mt-4 text-base leading-8 text-white/65 sm:text-lg">
            Players enter live head-to-head coding battles, the audience watches
            every move, and the community decides who wins.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Join the waitlist and get approved",
            "Enter a battle and build live",
            "Let the crowd vote on the winner",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 text-sm text-white/40">0{index + 1}</div>
              <div className="text-xl font-semibold">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
                Join the waitlist
              </p>
              <h2 className="max-w-2xl text-3xl font-bold sm:text-5xl">
                Claim your spot before the first public battles go live
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Early users get priority access to battles, spectator features,
                leaderboard presence, and launch announcements.
              </p>
            </div>

            <form className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-white/80"
              >
                Email
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4">
                <Mail className="h-4 w-4 text-white/45" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/30"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-3 text-sm text-white/40">
                Form hookup comes next. Right now we’re locking in the structure and SEO.
              </p>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
