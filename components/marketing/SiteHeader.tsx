"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "How It Flows", href: "/#how-it-flows" },
  { label: "For Partners", href: "/#benefits" },
  { label: "Commission", href: "/#commission" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/10 bg-brand-cream/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-6xl px-6 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-base font-bold text-white">
              D
            </span>
            <span className="text-xl font-bold tracking-tight text-brand-green">
              Davintom
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 text-sm font-medium text-brand-ink/80 md:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-brand-green"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/partner"
              className="rounded-xl border border-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Partner With Us
            </Link>
            <Link
              href="/explore"
              className="rounded-xl bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent-hover"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/20 text-brand-green transition hover:bg-brand-green/5 md:hidden"
          >
            {menuOpen ? (
              <span className="text-lg font-bold leading-none">✕</span>
            ) : (
              <span className="text-lg font-bold leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            id="mobile-nav-drawer"
            className="mt-4 space-y-3 border-t border-brand-green/10 pt-4 md:hidden"
          >
            <div className="flex flex-col space-y-2 text-sm font-medium text-brand-ink/85">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-2 py-2 transition hover:bg-brand-green/5 hover:text-brand-green"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 h-fit">
              <Link
                href="/partner"
                onClick={closeMenu}
                className="rounded-xl border border-brand-green/20 px-2 py-2 md:px-4 md:py-2.5 text-center text-xs md:text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
              >
                Partner With Us
              </Link>
              <Link
                href="/explore"
                onClick={closeMenu}
                className="rounded-xl bg-brand-accent px-2 py-2 md:px-4 md:py-2.5 text-center text-xs md:text-sm font-semibold text-white transition hover:bg-brand-accent-hover"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}