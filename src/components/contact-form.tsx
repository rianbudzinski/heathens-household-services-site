"use client";

import { useState } from "react";

/** Matches live “Service of Interest” options on the contact form. */
const SERVICE_INTEREST_OPTIONS = [
  "Remodels",
  "Roof Cleaning",
  "Power Washing",
  "Decks & Fences",
  "Custom Tile Showers",
  "Holiday Decoration",
  "Other",
] as const;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdyeygk";

const inputClass =
  "w-full rounded-md border border-zinc-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-heathen-accent focus:outline-none focus:ring-1 focus:ring-heathen-accent/50";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        errors?: string[] | Record<string, string>;
      };

      if (res.ok && data.ok) {
        setSent(true);
        form.reset();
        return;
      }

      let msg = "Something went wrong. Please try again or call us.";
      if (typeof data.error === "string") msg = data.error;
      else if (Array.isArray(data.errors)) msg = data.errors.join(" ");
      else if (data.errors && typeof data.errors === "object") {
        msg = Object.entries(data.errors)
          .map(([k, v]) => `${k}: ${v}`)
          .join(" ");
      }
      setError(msg);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-heathen-accent/40 bg-[#0a0a0a] p-10 text-center">
        <p className="text-xl font-semibold text-heathen-accent">Message Sent!</p>
        <p className="mt-2 text-gray-400">We will get back to you as soon as we can.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-[#0a0a0a] p-6 md:p-8">
      <h2 className="text-xl font-bold text-heathen-accent">Send Us a Message</h2>
      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <input type="hidden" name="_subject" value="Heathen Household Services — website contact" />
        {error ? (
          <div
            role="alert"
            className="rounded-md border border-red-500/50 bg-red-950/40 px-4 py-3 text-sm text-red-200"
          >
            {error}
          </div>
        ) : null}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
            Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
            Service of Interest (Optional)
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              -- Select a service --
            </option>
            {SERVICE_INTEREST_OPTIONS.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`min-h-32 ${inputClass}`}
            placeholder="Tell us about your project"
          />
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-shine rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(57,255,20,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
