import type { Metadata } from "next";
import SeoPageShell from "@/components/seo-page-shell";

export const metadata: Metadata = {
  title: "Vibe Coding | Vibebattle",
  description:
    "What is vibe coding? Learn how AI-assisted building, live coding battles, spectator voting, and creator competitions connect to the new vibe coding movement.",
  alternates: {
    canonical: "https://vibebattle.space/vibe-coding",
  },
  openGraph: {
    title: "Vibe Coding | Vibebattle",
    description:
      "A guide to vibe coding, AI-assisted building, and live creator competition.",
    url: "https://vibebattle.space/vibe-coding",
    siteName: "Vibebattle",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding | Vibebattle",
    description:
      "A guide to vibe coding, AI-assisted building, and live creator competition.",
  },
};

export default function VibeCodingPage() {
  return (
    <SeoPageShell
      eyebrow="Vibebattle Guide"
      title="Vibe coding is turning software creation into a faster, more public process"
      intro="Vibe coding is the growing practice of building software with AI by describing what you want, iterating quickly, and relying on tools to generate large parts of the implementation. As the term has spread, the category has also become more competitive, more visible, and more watchable."
      sections={[
        {
          title: "What vibe coding means",
          body:
            "In practice, vibe coding refers to guiding software creation with prompts, feedback loops, AI-assisted edits, and rapid iteration. The focus is less on manually writing every line and more on directing the outcome, testing, refining, and shipping fast.",
        },
        {
          title: "Why people search for vibe coding",
          body:
            "The topic is growing because creators, founders, developers, and non-technical builders all want faster ways to turn ideas into real products. AI tools have made software creation dramatically more accessible, which is why interest in vibe coding keeps expanding.",
        },
        {
          title: "How Vibebattle fits the vibe coding movement",
          body:
            "Vibebattle takes the energy of vibe coding and turns it into a live competitive format. Builders go head-to-head, spectators watch both sides in real time, the community votes on outcomes, and the best creators rise through visible progression.",
        },
      ]}
    />
  );
}

/* --- EXTRA SEO SECTION --- */

<section>
  <h2>Examples of vibe coding in practice</h2>
  <p>
    Vibe coding shows up when builders rapidly create apps using AI tools,
    iterate on prompts, refine outputs, and ship working products in hours
    instead of days. It is less about writing every line manually and more
    about directing the system toward a clear outcome.
  </p>

  <p>
    As vibe coding continues to grow, more platforms are emerging that make
    the process visible and competitive. Instead of building in isolation,
    creators can now build in public, compare results, and participate in
    live environments where outcomes are decided by an audience.
  </p>
</section>

<section>
  <h2>Why vibe coding is growing so fast</h2>
  <p>
    The rise of AI-assisted development tools has lowered the barrier to
    building software. More people can create, iterate, and launch products
    quickly, which naturally increases interest in how the process works.
  </p>

  <p>
    At the same time, audiences are becoming more interested in watching
    creation happen in real time. This combination is why vibe coding is
    not just a technique, but a broader shift in how software gets built
    and shared online.
  </p>
</section>
