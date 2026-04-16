import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SITE, SITE_BASE_URL, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our completed projects and see the quality and craftsmanship we bring to every job.",
  alternates: { canonical: `${SITE_BASE_URL}/portfolio` },
  openGraph: { url: `${SITE_BASE_URL}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        {/* Hero */}
        <header className="mb-14 text-center md:mb-16">
          <h1 className="text-4xl font-bold md:text-5xl">
            <span className="text-white">Our </span>
            <span className="text-heathen-accent">Portfolio</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-heathen-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white md:text-xl">
            Explore our completed projects and see the quality and craftsmanship we bring to every job.
            From small repairs to major renovations, we take pride in our work.
          </p>
        </header>

        <PortfolioGrid />

        {/* Client Testimonials */}
        <section className="mt-24 border-t border-white/10 pt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-white">Client </span>
              <span className="text-heathen-accent">Testimonials</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-heathen-accent" />
            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our work.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.name}>
                <blockquote className="flex h-full flex-col rounded-lg border border-heathen-accent/40 bg-[#0a0a0a] p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="flex-1 italic text-white">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-24 max-w-4xl rounded-lg border border-heathen-accent/40 bg-black px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to start your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white">
            Let us help turn your vision into reality. Contact us today for a free consultation and estimate.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.35)] hover:brightness-110"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md border border-gray-500 bg-transparent px-8 py-3 font-semibold text-white hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
