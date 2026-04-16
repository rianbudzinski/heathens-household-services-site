import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE, SITE_BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, planning guides, and updates on home services, remodeling, and maintenance in Western New York from Heathen Household Services.",
  alternates: { canonical: `${SITE_BASE_URL}/blog` },
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description:
      "Articles about home services, remodeling, exteriors, and local projects across Chautauqua County and Western New York.",
    url: `${SITE_BASE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="text-heathen-accent">Blog</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Planning ideas and local insights for homeowners and businesses in Western New York.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            <a
              href={`${SITE_BASE_URL}/rss.xml`}
              className="text-heathen-accent hover:text-heathen-gold"
              rel="alternate"
              type="application/rss+xml"
            >
              Subscribe via RSS
            </a>
          </p>
        </header>

        <ul className="space-y-6">
          {sorted.map((post) => {
            const date = new Date(post.publishedAt);
            return (
              <li key={post.slug}>
                <article className="rounded-lg border border-white/10 bg-[#0a0a0a] p-6 transition hover:border-heathen-accent/40">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    <time dateTime={post.publishedAt}>{date.toLocaleDateString("en-US", { dateStyle: "long" })}</time>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-white md:text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-heathen-accent">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-heathen-accent hover:text-heathen-gold"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
