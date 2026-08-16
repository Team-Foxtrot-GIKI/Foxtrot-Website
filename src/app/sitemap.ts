import type { MetadataRoute } from "next";
import { aircraft } from "@/data/aircraft";
import { briefings } from "@/data/briefings";
import { mainNav, secondaryNav, site } from "@/data/site";

/** Required by `output: "export"` — written once at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedAt = new Date("2026-08-13");
  const sectionPaths = [
    ...mainNav.map((link) => link.href),
    ...secondaryNav.map((link) => link.href),
  ];

  const uniqueSections = [...new Set(sectionPaths)];
  const toUrl = (path: string) =>
    `${site.url}${path === "/" ? "/" : `${path}/`}`;

  return [
    { url: toUrl("/"), lastModified: publishedAt, changeFrequency: "weekly", priority: 1 },
    ...uniqueSections
      .filter((path) => path !== "/")
      .map((path) => ({
        url: toUrl(path),
        lastModified: publishedAt,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ...aircraft.map((item) => ({
      url: toUrl(`/aircraft/${item.slug}`),
      lastModified: publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...briefings.map((briefing) => ({
      url: toUrl(`/intelligence/${briefing.slug}`),
      lastModified: new Date(briefing.isoDate),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
