"use client";

import { useState } from "react";
import Link from "next/link";

type PartnerRole = "abattoir" | "vendor" | "rider";

const ROLE_DETAILS: Record<
  PartnerRole,
  {
    label: string;
    headline: string;
    summary: string;
    perks: string[];
    whatsappText: string;
  }
> = {
  abattoir: {
    label: "Abattoirs",
    headline: "Steady daily volume from verified local demand",
    summary:
      "Connect directly with organized meat vendors and buyers around Ile-Ife & OAU without relying solely on walk-in unpredictability.",
    perks: [
      "Predictable order flow and cleaner batch coordination",
      "Clear hygiene and quality-check standards that build buyer trust",
      "Transparent settlement and payout tracking",
    ],
    whatsappText:
      "Hello Davintom, I'd like to partner as an Abattoir around Ile-Ife / OAU.",
  },
  vendor: {
    label: "Meat Vendors",
    headline: "Reach more buyers without adding storefront overhead",
    summary:
      "List fresh beef and hygienically portioned cuts on Davintom so nearby customers and households can discover and order from you.",
    perks: [
      "Real-time buyer matching in your local area",
      "Flexible fulfillment for fresh beef and packaged cuts",
      "Simple commission clarity with zero hidden setup fees",
    ],
    whatsappText:
      "Hello Davintom, I'd like to partner as a Meat Vendor around Ile-Ife / OAU.",
  },
  rider: {
    label: "Dispatch Riders",
    headline: "Consistent local deliveries with clear route details",
    summary:
      "Pick up verified orders from partner vendors and deliver promptly across Ile-Ife & OAU.",
    perks: [
      "Focused local drop-offs around Ile-Ife & OAU",
      "Clear pickup and delivery instructions per order",
      "Reliable payout structure as order volume grows",
    ],
    whatsappText:
      "Hello Davintom, I'd like to partner as a Dispatch Rider around Ile-Ife / OAU.",
  },
};

export default function PartnerPage() {
  const [role, setRole] = useState<PartnerRole>("vendor");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Ile-Ife / OAU");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const active = ROLE_DETAILS[role];
  const whatsappNumber = "2348137414398";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    active.whatsappText,
  )}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-brand-cream text-brand-ink">
      {/* Top Hero */}
      <section className="bg-brand-green px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-5 inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-soft">
            Partner With Davintom
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Grow your livestock, meat, or delivery operations with Davintom.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We’re onboarding abattoirs, meat vendors, and dispatch riders across
            Ile-Ife &amp; OAU to build faster, cleaner, and more reliable local
            distribution.
          </p>
        </div>
      </section>

      {/* Interactive Role Switcher + Interest Form */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Role Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {(Object.keys(ROLE_DETAILS) as PartnerRole[]).map((key) => {
            const isActive = role === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setRole(key);
                  setSubmitted(false);
                }}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? "bg-brand-green text-white shadow-xs"
                    : "bg-white text-brand-green ring-1 ring-brand-green/15 hover:bg-brand-green-soft/60"
                }`}
              >
                {ROLE_DETAILS[key].label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Role Benefits */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-brand-green/10 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                For {active.label}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-green">
                {active.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/80 sm:text-base">
                {active.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-brand-ink/90">
                {active.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 border-t border-brand-green/10 pt-5 sm:flex-row sm:items-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-accent-hover"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  href="/#commission"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-brand-green transition hover:bg-brand-green-soft/60"
                >
                  View Commission Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Lightweight MVP Interest Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-brand-green/10 sm:p-7">
              <h2 className="text-xl font-bold text-brand-green">
                Register Partner Interest
              </h2>
              <p className="mt-1.5 text-sm text-brand-ink/75">
                Leave your details below and we’ll reach out as partner slots
                open in Ile-Ife &amp; OAU.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-brand-green-soft p-5 text-brand-green">
                  <p className="text-base font-bold">
                    Interest noted for {active.label}
                  </p>
                  <p className="mt-1.5 text-sm text-brand-green/85">
                    Thanks{name ? `, ${name}` : ""}! Since this MVP form runs
                    without a live database yet, you can also tap{" "}
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline"
                    >
                      Chat on WhatsApp
                    </a>{" "}
                    to message us directly right away.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setNotes("");
                    }}
                    className="mt-4 rounded-lg bg-brand-green px-4 py-2 text-xs font-bold text-white"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                      Full Name or Business Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tunde Meat Supply"
                      className="mt-1.5 w-full rounded-xl border border-brand-green/20 bg-brand-cream/50 px-3.5 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="080X XXX XXXX"
                        className="mt-1.5 w-full rounded-xl border border-brand-green/20 bg-brand-cream/50 px-3.5 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                        Area / Location
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Ile-Ife / OAU"
                        className="mt-1.5 w-full rounded-xl border border-brand-green/20 bg-brand-cream/50 px-3.5 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                      Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your daily capacity, cuts offered, or bike availability..."
                      className="mt-1.5 w-full rounded-xl border border-brand-green/20 bg-brand-cream/50 px-3.5 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-green py-3 text-sm font-bold text-white transition hover:bg-brand-green-hover"
                  >
                    Submit Partner Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
