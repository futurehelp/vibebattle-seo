import type { Metadata } from "next";
import SeoPageShell from "@/components/seo-page-shell";

export const metadata: Metadata = {
  title: "Vibe Coding | Vibebattle",
  description:
    "What is vibe coding? Learn how AI-assisted building, live coding battles, spectator voting, and creator competitions connect to the new vibe coding movement.",
  alternates: {
    canonical: "https://vibebattle.space/vibe-coding",
  },
};

export default function VibeCodingPage() {
  return (
    <SeoPageShell
      eyebrow="Vibebattle Guide"
      title="Vibe coding is changing how software gets built"
      intro="Vibe coding is the growing practice of building software with AI by describing what you want, iterating quickly, and relying on tools to generate large parts of the implementation."
      sections={[
        {
          title: "What vibe coding means",
          body:
            "Vibe coding refers to guiding software creation with prompts, feedback loops, AI-assisted edits, and rapid iteration. The focus is less on manually writing every line and more on directing the outcome.",
        },
        {
          title: "Why people search for vibe coding",
          body:
            "The topic is growing because creators, founders, developers, and non-technical builders all want faster ways to turn ideas into real products. AI tools have made software creation dramatically more accessible.",
        },
        {
          title: "Examples of vibe coding in practice",
          body:
            "Vibe coding shows up when builders rapidly create apps using AI tools, iterate on prompts, refine outputs, and ship working products quickly. It is less about writing every line manually and more about directing the system toward a clear outcome.",
        },
        {
          title: "Why vibe coding is growing so fast",
          body:
            "AI-assisted development tools have lowered the barrier to building software. More people can create, iterate, and launch products quickly, which increases interest in how the process works and how it can be done better.",
        },
        {
          title: "How Vibebattle fits in",
          body:
            "Vibebattle turns vibe coding into a live competition format where builders go head-to-head, spectators watch in real time, and outcomes are decided by the community.",
        },
      ]}
    />
  );
}
