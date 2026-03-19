import Link from "next/link";
import WaitlistLink from "@/components/waitlist-link";

const links = [
  { href: "/vibe-coding", label: "Vibe Coding" },
  { href: "/live-ai-coding-battles", label: "Live AI Coding Battles" },
  { href: "/ai-app-building-competition", label: "AI App Building Competition" },
  { href: "/builder-battles", label: "Builder Battles" },
  { href: "/spectator-voted-coding-battles", label: "Spectator Voted Coding Battles" },
  { href: "/real-time-builder-competition", label: "Real-Time Builder Competition" },
  { href: "/coding-battles-with-ai-tools", label: "Coding Battles With AI Tools" },
  { href: "/competitive-app-building", label: "Competitive App Building" },
  { href: "/esports-for-builders", label: "Esports for Builders" },
  { href: "/creator-battle-platform", label: "Creator Battle Platform" },
  { href: "/head-to-head-coding-battles", label: "Head-to-Head Coding Battles" },
  { href: "/best-platform-for-live-coding-battles", label: "Best Platform for Live Coding Battles" },
  { href: "/seo", label: "SEO Content Hub" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#060a12]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(22,163,255,0.08),transparent_22%),radial-gradient(circle_at_85%_30%,rgba(255,59,129,0.07),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(255,214,10,0.04),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/38">
              Vibe Battle
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
              Live coding.
              <br />
              Real spectators.
              <br />
              Ranked outcomes.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-white/52">
              Vibebattle is building a premium competitive format for live AI-native
              creation, audience voting, and creator progression.
            </p>

            <div className="mt-6">
              <WaitlistLink className="inline-flex rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
                Join waitlist
              </WaitlistLink>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/38">
              Explore
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/72 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/34 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vibebattle.space</p>

          <div className="flex gap-5">
            <WaitlistLink className="hover:text-white/70">
              Join Waitlist
            </WaitlistLink>
            <Link href="/seo" className="hover:text-white/70">
              Content Hub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
