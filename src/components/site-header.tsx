"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, User, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/service-areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-[1400px] items-center px-6">
        <Link href="/" className="z-10 flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={SITE.logoUrl}
            alt="Heathen Household Services"
            width={48}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="text-xl font-extrabold tracking-tight text-heathen-accent">HEATHEN</p>
            <p className="text-[11px] font-medium uppercase tracking-wide text-white">
              HOUSEHOLD SERVICES
            </p>
          </div>
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium text-white transition-colors hover:text-heathen-accent ${
                isActive(item.href) ? "text-heathen-accent" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-heathen-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(57,255,20,0.35)] transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm font-medium text-white transition hover:border-white/60"
          >
            <User className="h-4 w-4" />
            Admin
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex rounded-md border border-gray-600 p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-2 text-base font-medium ${
                  isActive(item.href) ? "bg-heathen-accent/15 text-heathen-accent" : "text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-heathen-accent px-4 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/admin"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 py-3 font-medium text-white"
              onClick={() => setOpen(false)}
            >
              <User className="h-4 w-4" />
              Admin
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
