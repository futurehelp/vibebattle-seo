import Link from "next/link";
import HeroCTA from "@/components/hero-cta";

const guides = [
  { href: "/vibe-coding", title: "Vibe Coding", desc: "Definition, trends, and why it matters." },
  { href: "/live-ai-coding-battles", title: "Live AI Coding Battles", desc: "How live coding turns into a spectator format." },
  { href: "/ai-app-building-competition", title: "AI App Building Competition", desc: "Competitive product building with AI-native workflows." },
  { href: "/builder-battles", title: "Builder Battles", desc: "Head-to-head creator competition." },
  { href: "/spectator-voted-coding-battles", title: "Spectator Voting", desc: "Why audience judgment changes the format." },
  { href: "/real-time-builder-competition", title: "Real-Time Competition", desc: "Pressure, execution, and public outcomes." },
];

export default function HomeDocs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/40">
              Documentation
            </div>

            <nav className="space-y-1">
              {guides.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-white/66 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-white/8 pt-4">
              <Link
                href="/seo"
                className="block rounded-xl px-3 py-2 text-sm text-white/66 transition hover:bg-white/[0.06] hover:text-white"
              >
                SEO Hub
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10">
            <div className="mb-6 h-px w-24 bg-rainbow-line" />

            <p className="text-[11px] uppercase tracking-[0.3em] text-white/42">
              Vibebattle Docs
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
              Vibe coding, live builder battles, and AI-native competition.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
              This site documents the emerging category around vibe coding,
              live AI coding battles, creator competition, and audience-voted
              product building.
            </p>

            <HeroCTA />

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {guides.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-[#0b1220] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <h2 className="text-base font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
