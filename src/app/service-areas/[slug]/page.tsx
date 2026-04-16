import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { BreadcrumbJsonLd, ServiceAreaWebPageJsonLd } from "@/components/json-ld";
import { serviceAreaIntroParagraphs, serviceAreaMetaDescription } from "@/lib/service-area-copy";
import {
  SITE,
  SITE_BASE_URL,
  allServiceAreaSlugs,
  serviceAreaBySlug,
  serviceAreaSlug,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreaBySlug(slug);
  if (!area) return { title: "Not found" };

  const title = `Home Services in ${area}`;
  const description = serviceAreaMetaDescription(area);
  const canonical = `${SITE_BASE_URL}/service-areas/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreaBySlug(slug);
  if (!area) notFound();

  const description = serviceAreaMetaDescription(area);
  const paras = serviceAreaIntroParagraphs(area);

  return (
    <>
      <ServiceAreaWebPageJsonLd areaName={area} slug={slug} description={description} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: area, path: `/service-areas/${serviceAreaSlug(area)}` },
        ]}
      />

      <div className="min-h-screen bg-black">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:py-20">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:text-heathen-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden> / </li>
              <li>
                <Link href="/service-areas" className="hover:text-heathen-accent">
                  Service areas
                </Link>
              </li>
              <li aria-hidden> / </li>
              <li className="text-gray-400">{area}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Home &amp; commercial services in {area}
            </h1>
            <p className="mt-4 text-lg text-heathen-accent">{SITE.name}</p>
          </header>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-300">
            {paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-lg border border-heathen-accent/30 bg-[#0a0a0a] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-heathen-gold">Call us</p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-1 inline-flex items-center gap-2 text-xl font-bold text-heathen-accent hover:text-heathen-gold"
              >
                <Phone className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-heathen-accent px-6 py-3 text-center font-semibold text-white hover:brightness-110"
            >
              Request a quote
            </Link>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            <p>
              More:{" "}
              <Link href="/services" className="text-heathen-accent hover:text-heathen-gold">
                All services
              </Link>
              {" · "}
              <Link href="/blog" className="text-heathen-accent hover:text-heathen-gold">
                Blog
              </Link>
              {" · "}
              <Link href="/portfolio" className="text-heathen-accent hover:text-heathen-gold">
                Portfolio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
