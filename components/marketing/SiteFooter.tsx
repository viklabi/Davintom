"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function SiteFooter() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-brand-green/12 bg-brand-cream text-brand-ink">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-sm font-bold text-white">
                D
              </span>
              <span className="text-lg font-extrabold tracking-tight text-brand-green">
                Davintom
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-ink/75">
              Connecting farmers, abattoirs, vendors, riders, and buyers around
              Ile-Ife &amp; OAU with faster, cleaner livestock and meat
              distribution.
            </p>
          </div>

          {/* Pages & Actions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Platform
            </p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="font-medium text-brand-ink/80 transition hover:text-brand-accent"
                >
                  Explore &amp; Order
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="font-medium text-brand-ink/80 transition hover:text-brand-accent"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Landing Page Sections */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Overview
            </p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#how-it-flows"
                  className="text-brand-ink/80 transition hover:text-brand-green"
                >
                  How It Flows
                </Link>
              </li>
              <li>
                <Link
                  href="/#benefits"
                  className="text-brand-ink/80 transition hover:text-brand-green"
                >
                  Partnership Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/#commission"
                  className="text-brand-ink/80 transition hover:text-brand-green"
                >
                  Commission Structure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-brand-green/10 pt-6 text-xs text-brand-ink/65 sm:flex-row sm:items-center">
          <p>© {year} Davintom. Serving Ile-Ife &amp; OAU.</p>
          <div className="flex items-center gap-4">
            <Link href="/explore" className="hover:text-brand-green">
              Explore
            </Link>
            <Link href="/partner" className="hover:text-brand-green">
              Partner
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}