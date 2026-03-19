import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vibebattle.space";

  const routes = [
    "",
    "/seo",
    "/vibe-coding",
    "/live-ai-coding-battles",
    "/ai-app-building-competition",
    "/live-coding-competition-platform",
    "/builder-battles",
    "/ai-hackathon-alternative",
    "/watch-people-build-apps-live",
    "/spectator-voted-coding-battles",
    "/real-time-builder-competition",
    "/coding-battles-with-ai-tools",
    "/startup-battle-platform",
    "/competitive-app-building",
    "/esports-for-builders",
    "/live-product-build-show",
    "/online-coding-tournament",
    "/creator-battle-platform",
    "/head-to-head-coding-battles",
    "/live-build-off-platform",
    "/ai-creator-competition",
    "/community-voted-builder-battles",
    "/best-platform-for-live-coding-battles",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/vibe-coding" ? 0.9 : 0.8,
  }));
}
