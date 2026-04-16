import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-3 md:gap-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={SITE.logoUrl}
              alt=""
              width={48}
              height={48}
              className="h-11 w-auto object-contain"
            />
            <div>
              <p className="text-lg font-bold text-heathen-accent">HEATHEN</p>
              <p className="text-[11px] font-medium uppercase tracking-wide text-white">
                Household Services
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Professional equipment rental services for construction, landscaping, and property
            maintenance needs.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white hover:text-heathen-accent"
            aria-label="Facebook"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-heathen-accent">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-heathen-accent">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-heathen-accent">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-heathen-accent">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-heathen-accent">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-heathen-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-heathen-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-4 text-sm text-gray-300">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" />
              <span>
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 shrink-0 text-heathen-accent" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-heathen-accent">
                (716) 450-0085
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-heathen-accent" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-heathen-accent">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 px-6 pt-8 text-center text-sm text-gray-500">
        © {year} {SITE.name} | All Rights Reserved |{" "}
        <a
          href={SITE.pixelGuysUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-heathen-accent"
        >
          Website By PixelGuys
        </a>
      </div>
    </footer>
  );
}
