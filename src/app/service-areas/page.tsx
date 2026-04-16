import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS, SITE, SITE_BASE_URL, serviceAreaSlug } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Heathen Household Services serves Buffalo, Jamestown, Frewsburg, Fredonia, Falconer, Lakewood, Mayville, Kennedy, and surrounding Western New York communities.",
  alternates: { canonical: `${SITE_BASE_URL}/service-areas` },
  openGraph: {
    title: `Service Areas | ${SITE.name}`,
    description:
      "Find professional home and commercial services in your Western New York community—remodeling, exteriors, concrete, landscaping, and more.",
    url: `${SITE_BASE_URL}/service-areas`,
    type: "website",
  },
};

export default function ServiceAreasIndexPage() {
  return (
    <div className="textured-bg min-h-screen bg-black">
      <div className="mx-auto max-w-[1000px] px-6 py-16 md:py-20">
        <header className="mb-12 text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <MapPin className="h-12 w-12 text-heathen-accent" aria-hidden />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="text-white">Service </span>
            <span className="text-heathen-accent">Areas</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            We serve homeowners and businesses across Chautauqua County and Western New York, including all surrounding
            areas. Choose your location for local information and how to reach us.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {SERVICE_AREAS.map((area) => {
            const slug = serviceAreaSlug(area);
            return (
              <li key={area}>
                <Link
                  href={`/service-areas/${slug}`}
                  className="flex h-full items-center justify-between rounded-lg border border-white/10 bg-[#0a0a0a] px-5 py-4 font-medium text-white transition hover:border-heathen-accent/50 hover:bg-[#111]"
                >
                  <span>{area}</span>
                  <span className="text-sm text-heathen-accent">View</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-heathen-accent">&amp; ALL surrounding areas — call 716-450-0085</p>
      </div>
    </div>
  );
}
