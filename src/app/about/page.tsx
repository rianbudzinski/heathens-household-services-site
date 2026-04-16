import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ExternalLink,
  Phone,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { SITE, SITE_BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Heathen Household Services—quality workmanship, licensed and insured, serving Western New York.",
  alternates: { canonical: `${SITE_BASE_URL}/about` },
  openGraph: { url: `${SITE_BASE_URL}/about` },
};

const VALUE_CARDS = [
  {
    title: "Fast Service",
    description: "Quick response times and efficient project completion.",
    Icon: Zap,
  },
  {
    title: "Quality Materials",
    description: "Only the highest quality materials for your projects.",
    Icon: Shield,
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with years of experience.",
    Icon: Users,
  },
  {
    title: "Satisfaction Guarantee",
    description: "Your satisfaction is our top priority on every job.",
    Icon: Building2,
  },
] as const;

const SISTER_BULLETS = [
  "Quality Equipment Rentals",
  "Well-Maintained Machinery",
  "Responsive Customer Service",
  "Same Great Heathen Quality",
] as const;

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero — two columns */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              <span className="text-white">About </span>
              <span className="text-heathen-accent">{SITE.name}</span>
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-white md:text-lg">
              <p>
                At {SITE.name}, we are committed to delivering exceptional workmanship for homes and
                businesses throughout the region. From small repairs to major renovations, we bring the
                same attention to detail and dependable service to every project we take on.
              </p>
              <p>
                We take a personalized approach—listening to your goals, explaining your options, and
                tailoring solutions that fit your timeline and budget. Our team works with you at every
                step so there are no surprises, only results you can trust.
              </p>
              <p>
                Customer satisfaction drives everything we do. We build lasting relationships through
                honesty, clear communication, and craftsmanship you can see in the finished work.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {(
                ["Quality Guaranteed", "Licensed & Insured", "Customer Satisfaction"] as const
              ).map((label) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-heathen-accent">
                    <Check className="h-4 w-4 text-black" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-white">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="custom-glow relative w-full max-w-md">
              <Image
                src={SITE.logoUrl}
                alt=""
                width={560}
                height={560}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition grid */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_CARDS.map(({ title, description, Icon }) => (
              <li key={title}>
                <article className="h-full rounded-lg border border-zinc-800 bg-[#0a0a0a] p-6">
                  <Icon className="h-8 w-8 text-heathen-accent" strokeWidth={2} aria-hidden />
                  <h2 className="mt-4 text-lg font-bold text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Sister Company — heading */}
      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-white">Our </span>
            <span className="text-heathen-accent">Sister Company</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-heathen-accent" />
        </div>
      </section>

      {/* Heathen Rentals — large glow box */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-xl border border-heathen-accent/40 bg-[#0a0a0a] p-8 shadow-[0_0_40px_rgba(57,255,20,0.12)] md:p-12 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-heathen-accent md:text-3xl">Heathen Rentals LLC</h3>
                <p className="mt-6 leading-relaxed text-white">
                  Through our sister company, Heathen Rentals LLC, we extend the same commitment to
                  quality into professional equipment rentals. Whether you need machinery for
                  construction, landscaping, or property maintenance, Heathen Rentals provides reliable,
                  well-maintained equipment backed by the Heathen name you already trust.
                </p>
                <a
                  href="https://heathenrentals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-heathen-accent px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.35)] hover:brightness-110"
                >
                  Visit Heathen Rentals
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-lg border border-heathen-accent/50 bg-black/60 p-6 md:p-8">
                <h4 className="text-lg font-bold text-white">Why Choose Heathen?</h4>
                <ul className="mt-6 space-y-4">
                  {SISTER_BULLETS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-200 md:text-base">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to work with us?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white">
            Whether you need a small repair or a major renovation, we&apos;re here to help. Contact us
            today to discuss your project.
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
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md border border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
