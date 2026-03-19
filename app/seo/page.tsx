import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const pages = [
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

export const metadata: Metadata = {
  title: "Vibebattle SEO Content Hub",
  description:
    "Browse Vibebattle content about vibe coding, live AI coding battles, builder competitions, creator contests, and spectator-voted formats.",
  alternates: {
    canonical: "https://vibebattle.space/seo",
  },
};

export default function SeoHubPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#05070b] text-white">
        <div className="bg-grid relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,163,255,0.08),transparent_28%),radial-gradient(circle_at_70%_18%,rgba(255,214,10,0.05),transparent_20%),radial-gradient(circle_at_82%_24%,rgba(255,59,129,0.07),transparent_24%)]" />

          <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="card-glow rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.82),rgba(6,10,18,0.96))] p-8 sm:p-10 lg:p-12">
              <div className="mb-6 h-px w-32 bg-rainbow-line" />

              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
                Vibebattle Content Hub
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Explore vibe coding, live coding battles, and creator competition
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
                These pages are built to map the search landscape around vibe coding,
                AI-native building, spectator-voted coding battles, and the future of
                creator competition.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <h2 className="text-xl font-bold text-white">{page.label}</h2>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Read more about {page.label.toLowerCase()}.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
