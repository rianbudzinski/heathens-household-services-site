import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, Phone } from "lucide-react";
import { OUR_PROCESS_STEPS, SERVICES_PAGE_ITEMS } from "@/lib/services-list";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "We provide a wide range of professional services to meet all your household needs with quality and efficiency.",
};

export default function ServicesPage() {
  return (
    <div className="textured-bg min-h-screen bg-black">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-12 md:pt-16">
        {/* Hero */}
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-white">Our </span>
            <span className="text-heathen-accent">Services</span>
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-heathen-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white md:text-xl">
            We provide a wide range of professional services to meet all your household needs with
            quality and efficiency.
          </p>
        </header>

        {/* Service cards */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES_PAGE_ITEMS.map((item) => (
            <li key={item.title}>
              <article
                className={`service-card flex h-full flex-col rounded-lg border bg-[#0a0a0a] p-5 transition duration-200 ${
                  item.highlight
                    ? "border-heathen-accent shadow-[0_0_24px_rgba(57,255,20,0.35)] ring-1 ring-heathen-accent/40"
                    : "border-zinc-800 hover:border-heathen-accent/50 hover:bg-[#111] hover:shadow-[0_0_20px_rgba(57,255,20,0.12)]"
                }`}
              >
                <div className="mb-4 text-heathen-accent">
                  <Hammer className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>

        {/* Our Process */}
        <section className="mt-24 border-t border-white/10 pt-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-white">Our </span>
              <span className="text-heathen-accent">Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              We approach every project with precision and care to deliver excellent results.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OUR_PROCESS_STEPS.map((s) => (
              <li key={s.step}>
                <article className="h-full rounded-lg border border-zinc-800 bg-[#0a0a0a] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-heathen-accent text-sm font-bold text-black">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-heathen-accent">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">{s.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-24 max-w-4xl rounded-lg border border-zinc-800 bg-[#0a0a0a] px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to get started with a service?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white">
            Contact us today to schedule a consultation or get a free quote for any of our services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(57,255,20,0.35)] hover:brightness-110"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md border-2 border-heathen-accent bg-black px-8 py-3 font-semibold text-heathen-accent hover:bg-heathen-accent/10"
            >
              <Phone className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
