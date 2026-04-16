import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-white">Admin</h1>
      <p className="mt-4 text-gray-400">
        Administrator access is handled on the live site. Use the production dashboard to manage
        content.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-heathen-accent/50 px-6 py-3 text-heathen-accent hover:bg-heathen-accent/10"
      >
        Return to Website
      </Link>
    </div>
  );
}
