import type { Metadata } from "next";
import SeoPageShell from "@/components/seo-page-shell";

export const metadata: Metadata = {
  title: "Spectator Voted Coding Battles | Vibebattle",
  description: "Spectator Voted Coding Battles explained with live builder competition context.",
  alternates: {
    canonical: "https://vibebattle.space/spectator-voted-coding-battles",
  },
};

export default function Page() {
  return (
    <SeoPageShell
      title="Spectator Voted Coding Battles"
      intro="Spectator Voted Coding Battles is part of the emerging category of vibe coding, live builder competitions, and AI-native creation."
      sections={[{"title": "Why this matters", "body": "Creators want faster ways to build and compete. This topic is part of a larger shift toward real-time, AI-assisted creation and public competition."}, {"title": "How Vibebattle fits in", "body": "Vibebattle turns these ideas into a live format where builders compete head-to-head and audiences decide outcomes."}]}
    />
  );
}
