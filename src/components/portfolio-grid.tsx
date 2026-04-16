"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Filter } from "lucide-react";
import type { PortfolioFilter } from "@/lib/site";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/lib/site";

export function PortfolioGrid() {
  const [cat, setCat] = useState<PortfolioFilter>("All");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const filtered = useMemo(() => {
    if (cat === "All") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((p) => p.filter === cat);
  }, [cat]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">Project Gallery</h2>
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
          className="inline-flex items-center justify-center gap-2 self-start rounded-md border border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5 sm:self-auto"
        >
          <Filter className="h-4 w-4" />
          Filter Projects
        </button>
      </div>

      {filtersOpen ? (
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setCat(f)}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                cat === f
                  ? "border-heathen-accent bg-heathen-accent/15 text-white"
                  : "border-white/20 text-gray-300 hover:border-heathen-accent/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-white/10 bg-[#0a0a0a] p-10 text-center text-gray-400">
          No portfolio items found matching your criteria.
        </p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-heathen-accent/30 bg-[#0a0a0a] shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {item.photoCount != null ? (
                    <span className="absolute right-3 top-3 rounded-md bg-black/65 px-2 py-1 text-xs text-white backdrop-blur-sm">
                      {item.photoCount} photos
                    </span>
                  ) : null}
                  <span className="absolute bottom-3 left-3 max-w-[85%] rounded bg-heathen-accent px-2.5 py-1 text-xs font-semibold text-black">
                    {item.categoryBadge}
                  </span>
                  <div
                    className="pointer-events-none absolute inset-y-0 left-2 flex items-center"
                    aria-hidden
                  >
                    <ChevronLeft className="h-8 w-8 rounded-full bg-black/40 p-1 text-white/80" />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-2 flex items-center"
                    aria-hidden
                  >
                    <ChevronRight className="h-8 w-8 rounded-full bg-black/40 p-1 text-white/80" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{item.description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md border border-heathen-accent bg-transparent py-2.5 text-center text-sm font-medium text-white transition hover:bg-heathen-accent/10"
                    >
                      View Photos
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md border border-heathen-accent bg-transparent py-2.5 text-center text-sm font-medium text-white transition hover:bg-heathen-accent/10"
                    >
                      Details
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
