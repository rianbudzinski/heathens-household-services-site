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

const inputClass =
  "w-full rounded-md border border-zinc-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-heathen-accent focus:outline-none focus:ring-1 focus:ring-heathen-accent/50";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
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
            className="btn-shine rounded-md bg-heathen-accent px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(57,255,20,0.25)] transition hover:brightness-110"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
