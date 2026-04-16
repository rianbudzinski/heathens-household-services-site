import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { BUSINESS_HOURS, SITE, SITE_BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Heathen Household Services for a free quote—remodels, cleaning, landscaping, and more.",
  alternates: { canonical: `${SITE_BASE_URL}/contact` },
  openGraph: { url: `${SITE_BASE_URL}/contact` },
};

export default function ContactPage() {
  const addressLine = `${SITE.addressLine1}, ${SITE.addressLine2}`;

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <header className="mb-12 text-center md:mb-16">
          <h1 className="text-4xl font-bold text-heathen-accent md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white">
            Have questions or ready to get started? Reach out to us for a free consultation and estimate.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Our Information */}
          <aside>
            <h2 className="text-xl font-bold text-heathen-accent">Our Information</h2>
            <ul className="mt-8 space-y-8 text-sm md:text-base">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="mt-1 text-gray-300">{addressLine}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="mt-1 inline-block text-heathen-accent hover:brightness-110"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 inline-block break-all text-heathen-accent hover:brightness-110"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Business Hours</p>
                  <ul className="mt-1 space-y-1 text-gray-300">
                    {BUSINESS_HOURS.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </aside>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
