//import Link from "next/link";

// export default function ExplorePage() {
//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20 text-center">
//       <span className="rounded-full bg-brand-green-soft px-3.5 py-1 text-xs font-semibold text-brand-green">
//         Ile-Ife &amp; OAU Pilot • Launching Soon
//       </span>
//       <h1 className="mt-4 text-3xl font-bold text-brand-green md:text-4xl">
//         Fresh Beef, Packaged Cuts &amp; Nearby Vendors
//       </h1>
//       <p className="mx-auto mt-3 max-w-xl text-sm text-brand-ink/80 md:text-base">
//         We are onboarding verified abattoirs and local meat vendors around Ile-Ife. Browse and
//         same-day delivery ordering will open here shortly.
//       </p>
//       <div className="mt-8 flex justify-center gap-4">
//         <Link
//           href="/"
//           className="rounded-xl border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5"
//         >
//           Back to Home
//         </Link>
//         <Link
//           href="/partner"
//           className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent-hover"
//         >
//           Register as a Vendor
//         </Link>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "All" | "Fresh Beef" | "Packaged Cuts" | "Nearby Vendors";

interface Offering {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
  area: string;
  description: string;
  whatsappMessage: string;
}

const OFFERINGS: Offering[] = [
  {
    id: "fresh-beef-daily",
    title: "Daily Fresh Beef",
    category: "Fresh Beef",
    tag: "Same-Day",
    area: "Ile-Ife & OAU",
    description:
      "Sourced from verified local abattoirs with fresh morning cuts for households and kitchens.",
    whatsappMessage:
      "Hello Davintom, I'd like to check today's availability for Daily Fresh Beef around Ile-Ife / OAU.",
  },
  {
    id: "boneless-steaks-cuts",
    title: "Portioned Stew & Roast Cuts",
    category: "Packaged Cuts",
    tag: "Popular",
    area: "OAU Axis & Town",
    description:
      "Cleanly trimmed and portioned cuts ready for home cooking, meal prep, or small events.",
    whatsappMessage:
      "Hello Davintom, I'm interested in Portioned Stew & Roast Cuts around Ile-Ife / OAU.",
  },
  {
    id: "packaged-family-pack",
    title: "Hygienic Family Cut Pack",
    category: "Packaged Cuts",
    tag: "Ready to Cook",
    area: "Ile-Ife",
    description:
      "Assorted quality cuts packed cleanly for easy storage and fast dispatch to your doorstep.",
    whatsappMessage:
      "Hello Davintom, I'd like info on the Hygienic Family Cut Pack in Ile-Ife.",
  },
  {
    id: "verified-local-vendors",
    title: "Verified Local Meat Vendors",
    category: "Nearby Vendors",
    tag: "Verified",
    area: "Ile-Ife & OAU",
    description:
      "Matched with trusted local sellers and coordinated riders so you don't have to guess on quality or timing.",
    whatsappMessage:
      "Hello Davintom, can you connect me with a verified nearby meat vendor around OAU / Ile-Ife?",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Fresh Beef",
  "Packaged Cuts",
  "Nearby Vendors",
];

// Replace with your real WhatsApp number in international format (no + or spaces)
const WHATSAPP_NUMBER = "2348137414398";

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filtered =
    selectedCategory === "All"
      ? OFFERINGS
      : OFFERINGS.filter((item) => item.category === selectedCategory);

  const generalWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Davintom, I want to order fresh meat around Ile-Ife / OAU."
  )}`;

  return (
    <main className="min-h-screen bg-brand-cream text-brand-ink">
      {/* Header Banner */}
      <section className="bg-brand-green px-6 py-14 text-white md:py-18">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-5 inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-soft">
            Explore Davintom • Ile-Ife &amp; OAU
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Fresh meat &amp; verified local sellers—without the runaround.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Browse what’s available for MVP ordering around Ile-Ife &amp; OAU and
            message us directly on WhatsApp to confirm today’s cuts and delivery.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-accent-hover"
            >
              Order via WhatsApp
            </a>
            <Link
              href="/partner"
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Pills + Offerings Grid */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-brand-green text-white shadow-xs"
                    : "bg-white text-brand-green ring-1 ring-brand-green/15 hover:bg-brand-green-soft/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((item) => {
            const itemWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              item.whatsappMessage
            )}`;

            return (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-xs ring-1 ring-brand-green/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-brand-green">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-brand-green/10 pt-4">
                  <span className="text-xs font-medium text-brand-ink/65">
                    Area: {item.area}
                  </span>
                  <a
                    href={itemWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-brand-green px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-green-hover"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}