import { BLOG_POSTS, blogPostUrl } from "@/lib/blog-posts";
import { SITE, SITE_BASE_URL } from "@/lib/site";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const buildDate = BLOG_POSTS.reduce(
    (max, p) => Math.max(max, new Date(p.updatedAt ?? p.publishedAt).getTime()),
    0,
  );
  const lastBuild = new Date(buildDate || Date.now()).toUTCString();

  const items = BLOG_POSTS.map((post) => {
    const link = blogPostUrl(post.slug);
    const pub = new Date(post.publishedAt).toUTCString();
    const body = post.paragraphs.map((x) => `<p>${escapeXml(x)}</p>`).join("");
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pub}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`;
  }).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE.name)} — Blog</title>
    <link>${SITE_BASE_URL}/blog</link>
    <description>${escapeXml("Articles about home services, remodeling, and maintenance in Western New York.")}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
