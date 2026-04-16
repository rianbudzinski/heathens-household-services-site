import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE, SITE_BASE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not found" };

  const canonical = `${SITE_BASE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt);

  return (
    <>
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />

      <div className="min-h-screen bg-black">
        <article className="mx-auto max-w-[800px] px-6 py-16 md:py-20">
          <p className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-heathen-accent hover:text-heathen-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </p>

          <header>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" aria-hidden />
              <time dateTime={post.publishedAt}>{date.toLocaleDateString("en-US", { dateStyle: "long" })}</time>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-lg text-gray-400">{post.description}</p>
          </header>

          <div className="mt-10 max-w-none">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-base leading-relaxed text-gray-300">
                {p}
              </p>
            ))}
          </div>

          <footer className="mt-14 border-t border-white/10 pt-10">
            <p className="text-lg font-semibold text-white">Request a quote</p>
            <p className="mt-2 text-gray-400">
              Call{" "}
              <a href="tel:7164500085" className="text-heathen-accent hover:text-heathen-gold">
                716-450-0085
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-heathen-accent hover:text-heathen-gold">
                contact us online
              </Link>
              . Official site:{" "}
              <a href={SITE_BASE_URL} className="text-heathen-accent hover:text-heathen-gold">
                heathenhouseholdservices.com
              </a>
              .
            </p>
          </footer>
        </article>
      </div>
    </>
  );
}
