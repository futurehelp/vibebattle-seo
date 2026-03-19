import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Vibebattle Waitlist",
  description:
    "Join the Vibebattle waitlist for early access to live AI coding battles, spectator voting, leaderboard competition, and launch updates.",
  alternates: {
    canonical: "https://vibebattle.space/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/45">
          Vibebattle Waitlist
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Join the waitlist for live AI coding battles
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Vibebattle is building a competitive live experience where creators go
          head-to-head, spectators vote on winners, and the best builders rise
          through a public leaderboard.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <form className="max-w-xl">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-white/80"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@domain.com"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none placeholder:text-white/30"
            />

            <button
              type="submit"
              className="mt-4 rounded-2xl bg-white px-6 py-4 font-semibold text-black"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
