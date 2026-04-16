import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  ExternalLink,
  Fence,
  MapPin,
  Star,
  Wrench,
} from "lucide-react";
import { MeasurementConverter } from "@/components/measurement-converter";
import {
  BUSINESS_HOURS,
  FEATURED_SERVICES,
  SERVICE_AREAS_GRID,
  SITE,
  TESTIMONIALS,
  WHY_CHOOSE_HOME,
} from "@/lib/site";

const FEATURE_ICONS = [Wrench, Droplets, Fence] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — solid black, centered logo + headline */}
      <section className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-black px-6 py-16 text-center">
        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <div className="custom-glow mb-10 w-full max-w-md md:max-w-lg">
            <Image
              src={SITE.logoUrl}
              alt="Heathen Household Services"
              width={640}
              height={400}
              className="mx-auto h-auto w-full object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-white">Professional </span>
            <span className="text-heathen-accent">Services</span>
            <span className="text-white"> For Your </span>
            <span className="text-heathen-accent">Home</span>
            <span className="text-white"> or </span>
            <span className="text-heathen-accent">Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Commercial & Residential, Licensed & Insured with workers compensation. We can do almost
            any project you need! Our team always delivers exceptional quality for all your household to
            business needs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="btn-shine inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.4)] hover:brightness-110"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md border-2 border-heathen-gold bg-black px-8 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="bounce-scroll-indicator absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll Down</span>
          <span className="text-xl leading-none" aria-hidden>
            ↓
          </span>
        </div>
      </section>

      {/* Our Services — 3 preview cards */}
      <section id="services" className="scroll-mt-24 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              We offer a comprehensive range of household and construction services to meet all your
              needs.
            </p>
          </div>
          <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {FEATURED_SERVICES.map((s, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <li key={s.title}>
                  <article className="service-card h-full rounded-lg border border-gray-800 bg-[#0a0a0a] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-heathen-accent/15 text-heathen-accent">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{s.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-shine inline-flex items-center gap-2 rounded-md bg-heathen-accent px-10 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.35)] hover:brightness-110"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <MeasurementConverter />

      {/* Why Choose Us */}
      <section className="border-t border-white/5 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-white">Why </span>
              <span className="text-heathen-accent">Choose Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              We pride ourselves on delivering exceptional service and craftsmanship
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_HOME.map((item) => (
              <li key={item.title}>
                <article className="h-full rounded-lg border border-gray-800 bg-[#0a0a0a] p-6">
                  <h3 className="text-lg font-bold text-heathen-gold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Testimonials</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our work.
            </p>
          </div>
          <ul className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.name}>
                <blockquote className="h-full rounded-lg border border-gray-800 bg-[#0a0a0a] p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-heathen-gold text-heathen-gold" />
                    ))}
                  </div>
                  <p className="text-gray-300">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold text-heathen-accent">— {t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Areas */}
      <section className="border-t border-white/5 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-white">Our </span>
            <span className="text-heathen-accent">Service Areas</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-heathen-accent" />

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5 text-heathen-accent" />
              <span className="font-medium">Proudly Serving:</span>
            </div>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
            {SERVICE_AREAS_GRID.map((a) => (
              <li key={a}>
                <span className="block rounded-lg border-2 border-heathen-gold bg-transparent px-4 py-3 text-center text-sm font-medium text-white">
                  {a}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold text-heathen-accent">&amp; ALL Surrounding Areas</p>
        </div>
      </section>

      {/* Sister company */}
      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="overflow-hidden rounded-xl border border-heathen-green/30 bg-gradient-to-br from-heathen-accent/5 to-black p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-heathen-gold">Sister Company</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Heathen Rentals LLC</h2>
            <p className="mt-4 max-w-2xl text-gray-400">
              Quality equipment rental services for construction, landscaping, and property maintenance
              needs.
            </p>
            <p className="mt-2 text-sm text-heathen-accent">Same Great Heathen Quality</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-heathen-accent hover:text-heathen-gold"
            >
              Visit Heathen Rentals <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="border-t border-white/5 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Contact us today for a free quote on your project. Let us help you transform your home!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex min-w-[240px] items-center justify-center rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.35)] hover:brightness-110"
            >
              Call: {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-w-[240px] items-center justify-center rounded-md border-2 border-heathen-gold bg-transparent px-8 py-3 font-semibold text-heathen-gold hover:bg-heathen-gold/10"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer info block */}
      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-white">Our Information</h3>
            <p className="mt-4 text-gray-400">{SITE.addressLine1}</p>
            <p className="text-gray-400">{SITE.addressLine2}</p>
            <p className="mt-4">
              <a href={`tel:${SITE.phoneTel}`} className="text-heathen-accent hover:text-heathen-gold">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-heathen-accent hover:text-heathen-gold"
              >
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Business Hours</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              {BUSINESS_HOURS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
