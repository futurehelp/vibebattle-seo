import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibebattle SEO Pages",
  description:
    "Browse Vibebattle SEO pages covering live AI coding battles, builder competitions, creator matchups, and related search topics.",
  alternates: {
    canonical: "https://vibebattle.space/seo",
  },
};

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
          Content Hub
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Vibebattle SEO content hub
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          These pages cover the search topics around live coding battles, builder competitions,
          AI creator contests, and spectator-voted product battles.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <a
              key="live-ai-coding-battles"
              href="/live-ai-coding-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Live AI Coding Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about live ai coding battles.
              </p>
            </a>
            <a
              key="ai-app-building-competition"
              href="/ai-app-building-competition"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">AI App Building Competition</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about ai app building competition.
              </p>
            </a>
            <a
              key="live-coding-competition-platform"
              href="/live-coding-competition-platform"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Live Coding Competition Platform</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about live coding competition platform.
              </p>
            </a>
            <a
              key="builder-battles"
              href="/builder-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Builder Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about builder battles.
              </p>
            </a>
            <a
              key="ai-hackathon-alternative"
              href="/ai-hackathon-alternative"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">AI Hackathon Alternative</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about ai hackathon alternative.
              </p>
            </a>
            <a
              key="watch-people-build-apps-live"
              href="/watch-people-build-apps-live"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Watch People Build Apps Live</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about watch people build apps live.
              </p>
            </a>
            <a
              key="spectator-voted-coding-battles"
              href="/spectator-voted-coding-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Spectator Voted Coding Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about spectator voted coding battles.
              </p>
            </a>
            <a
              key="real-time-builder-competition"
              href="/real-time-builder-competition"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Real-Time Builder Competition</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about real-time builder competition.
              </p>
            </a>
            <a
              key="coding-battles-with-ai-tools"
              href="/coding-battles-with-ai-tools"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Coding Battles With AI Tools</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about coding battles with ai tools.
              </p>
            </a>
            <a
              key="startup-battle-platform"
              href="/startup-battle-platform"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Startup Battle Platform</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about startup battle platform.
              </p>
            </a>
            <a
              key="competitive-app-building"
              href="/competitive-app-building"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Competitive App Building</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about competitive app building.
              </p>
            </a>
            <a
              key="esports-for-builders"
              href="/esports-for-builders"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Esports for Builders</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about esports for builders.
              </p>
            </a>
            <a
              key="live-product-build-show"
              href="/live-product-build-show"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Live Product Build Show</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about live product build show.
              </p>
            </a>
            <a
              key="online-coding-tournament"
              href="/online-coding-tournament"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Online Coding Tournament</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about online coding tournament.
              </p>
            </a>
            <a
              key="creator-battle-platform"
              href="/creator-battle-platform"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Creator Battle Platform</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about creator battle platform.
              </p>
            </a>
            <a
              key="head-to-head-coding-battles"
              href="/head-to-head-coding-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Head-to-Head Coding Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about head-to-head coding battles.
              </p>
            </a>
            <a
              key="live-build-off-platform"
              href="/live-build-off-platform"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Live Build-Off Platform</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about live build-off platform.
              </p>
            </a>
            <a
              key="ai-creator-competition"
              href="/ai-creator-competition"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">AI Creator Competition</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about ai creator competition.
              </p>
            </a>
            <a
              key="community-voted-builder-battles"
              href="/community-voted-builder-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Community Voted Builder Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about community voted builder battles.
              </p>
            </a>
            <a
              key="best-platform-for-live-coding-battles"
              href="/best-platform-for-live-coding-battles"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">Best Platform for Live Coding Battles</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Read more about best platform for live coding battles.
              </p>
            </a>
        </div>
      </div>
    </main>
  );
}
