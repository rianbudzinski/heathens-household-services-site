import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE, SITE_BASE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription =
  "Licensed and insured home & commercial contractor in Western New York—remodeling, roofing & siding, power washing, decks & fences, concrete, landscaping, land clearing, and more. Call 716-450-0085.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Heathen Household Services",
    "Western New York contractor",
    "Chautauqua County",
    "Jamestown NY home services",
    "Frewsburg remodeling",
    "Buffalo area contractor",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    url: SITE_BASE_URL,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, alt: `${SITE.name} — logo and branding` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: defaultDescription,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_BASE_URL}/rss.xml`,
    },
  },
  icons: {
    icon: SITE.logoUrl,
    shortcut: SITE.logoUrl,
    apple: SITE.logoUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="min-h-[calc(100vh-12rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
