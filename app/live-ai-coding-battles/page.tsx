import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live AI Coding Battles | Vibebattle",
  description:
    "Explore live AI coding battles where builders compete head-to-head, spectators vote in real time, and top creators rise on the leaderboard.",
  alternates: {
    canonical: "https://vibebattle.space/live-ai-coding-battles",
  },
  openGraph: {
    title: "Live AI Coding Battles | Vibebattle",
    description:
      "Head-to-head AI coding battles with live spectators, voting, and competitive leaderboards.",
    url: "https://vibebattle.space/live-ai-coding-battles",
    siteName: "Vibebattle",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live AI Coding Battles | Vibebattle",
    description:
      "Head-to-head AI coding battles with live spectators, voting, and competitive leaderboards.",
  },
};

export default function LiveAICodingBattlesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-8 lg:px-10">
      <article className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
          SEO Landing Page
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Live AI coding battles are becoming a new form of online competition
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          Live AI coding battles combine competitive building, audience
          participation, and real-time creative pressure. Instead of watching a
          static demo after a product is finished, viewers can watch creators
          build live, compare decisions side by side, and vote on outcomes as
          the action unfolds.
        </p>

        <div className="mt-10 space-y-10 text-white/72">
          <section>
            <h2 className="text-2xl font-bold text-white">
              What are live AI coding battles?
            </h2>
            <p className="mt-4 leading-8">
              Live AI coding battles are timed head-to-head competitions where
              builders use modern tools, including AI-assisted workflows, to
              create products, prototypes, features, or experiences under
              pressure. The format is part entertainment, part skill showcase,
              and part community competition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Why people want to watch builders compete live
            </h2>
            <p className="mt-4 leading-8">
              Spectators are not just interested in the final result. They want
              to see momentum, choices, tradeoffs, pivots, mistakes, and clutch
              moments. Live competition turns building into something watchable,
              dramatic, and socially engaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              How Vibebattle fits this category
            </h2>
            <p className="mt-4 leading-8">
              Vibebattle is being designed around real-time head-to-head creator
              matchups, spectator voting, leaderboard progression, and a format
              that feels closer to esports than a normal builder showcase. The
              goal is to make internet creation competitive, legible, and fun to
              watch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Join the waitlist
            </h2>
            <p className="mt-4 leading-8">
              If you want early access to live AI coding battles, future match
              announcements, and launch updates, join the Vibebattle waitlist.
            </p>

            <a
              href="/waitlist"
              className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-black"
            >
              Go to the waitlist
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
