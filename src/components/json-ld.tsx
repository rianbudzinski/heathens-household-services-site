import {
  SERVICE_AREAS,
  SITE,
  SITE_ADDRESS_ZIP,
  SITE_BASE_URL,
  SITE_PHONE_E164,
} from "@/lib/site";
import type { BlogPost } from "@/lib/blog-posts";
import { blogPostUrl } from "@/lib/blog-posts";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization + Local business (site-wide). */
export function LocalBusinessJsonLd() {
  const areaServed = SERVICE_AREAS.map((full) => ({
    "@type": "City" as const,
    name: full.replace(/, NY$/i, "").trim(),
    containedInPlace: {
      "@type": "State",
      name: "New York",
    },
  }));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_BASE_URL}/#business`,
    name: SITE.name,
    description:
      "Licensed and insured home and commercial services including remodeling, exterior work, concrete, landscaping, and more. Serving Western New York.",
    url: SITE_BASE_URL,
    image: [SITE.logoUrl, SITE.ogImage],
    logo: SITE.logoUrl,
    telephone: SITE_PHONE_E164,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine1,
      addressLocality: "Frewsburg",
      addressRegion: "NY",
      postalCode: SITE_ADDRESS_ZIP,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed,
  };

  const webSite: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_BASE_URL}/#website`,
    name: SITE.name,
    url: SITE_BASE_URL,
    publisher: { "@id": `${SITE_BASE_URL}/#business` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ContactAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_BASE_URL}/contact`,
      },
      name: "Contact or request a quote",
    },
  };

  return (
    <>
      <JsonLdScript data={data} />
      <JsonLdScript data={webSite} />
    </>
  );
}

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const url = blogPostUrl(post.slug);
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SITE.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_BASE_URL}/blog#blog`,
      name: `${SITE.name} Blog`,
    },
    articleBody: post.paragraphs.join("\n\n"),
    keywords: post.keywords.join(", "),
  };
  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_BASE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
  return <JsonLdScript data={data} />;
}

export function ServiceAreaWebPageJsonLd({
  areaName,
  slug,
  description,
}: {
  areaName: string;
  slug: string;
  description: string;
}) {
  const url = `${SITE_BASE_URL}/service-areas/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: `${SITE.name} — ${areaName}`,
    description,
    isPartOf: { "@id": `${SITE_BASE_URL}/#website` },
    about: { "@id": `${SITE_BASE_URL}/#business` },
    inLanguage: "en-US",
    specialty: "Home improvement and construction services",
  };
  return <JsonLdScript data={data} />;
}
