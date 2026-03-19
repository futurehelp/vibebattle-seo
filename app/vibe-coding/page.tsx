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
