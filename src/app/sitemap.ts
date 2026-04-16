import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { allServiceAreaSlugs, SITE_BASE_URL } from "@/lib/site";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/portfolio",
  "/blog",
  "/service-areas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${SITE_BASE_URL}${path}`,
      lastModified,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.85,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...allServiceAreaSlugs().map((slug) => ({
      url: `${SITE_BASE_URL}/service-areas/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
