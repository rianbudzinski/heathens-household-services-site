import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heathenhouseholdservices.com"),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Heathen Household Services provides professional home services including remodels, roof cleaning, power washing, custom tile showers, landscaping and more.",
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Professional household services including remodels, roof cleaning, power washing, custom tile showers, landscaping and more.",
    type: "website",
    images: [{ url: SITE.ogImage, alt: `${SITE.name} Logo` }],
  },
  icons: {
    icon: SITE.ogImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans">
        <SiteHeader />
        <main className="min-h-[calc(100vh-12rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
