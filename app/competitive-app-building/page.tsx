import type { Metadata } from "next";
import SeoPageShell from "@/components/seo-page-shell";

export const metadata: Metadata = {
  title: "Competitive App Building | Vibebattle",
  description: "Competitive App Building explained with live builder competition context.",
  alternates: {
    canonical: "https://vibebattle.space/competitive-app-building",
  },
};

export default function Page() {
  return (
    <SeoPageShell
      title="Competitive App Building"
      intro="Competitive App Building is part of the emerging category of vibe coding, live builder competitions, and AI-native creation."
      sections={[{"title": "Why this matters", "body": "Creators want faster ways to build and compete. This topic is part of a larger shift toward real-time, AI-assisted creation and public competition."}, {"title": "How Vibebattle fits in", "body": "Vibebattle turns these ideas into a live format where builders compete head-to-head and audiences decide outcomes."}]}
    />
  );
}
