import Link from "next/link";

const CATEGORIES = [
  {
    title: "Fresh Beef",
    subtitle: "Daily sourced from verified abattoirs",
    href: "/explore?category=fresh-beef",
    badge: "Same Day",
  },
  {
    title: "Packaged Cuts",
    subtitle: "Hygienically portioned & ready to cook",
    href: "/explore?category=packaged-cuts",
    badge: "Popular",
  },
  {
    title: "Nearby Vendors",
    subtitle: "Trusted local meat sellers around Ile-Ife & OAU",
    href: "/vendors",
    badge: "Verified",
  },
];

export function AppMockupPreview() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-4xl border-8 border-brand-ink bg-brand-cream p-4 sm:p-6 text-brand-ink shadow-2xl">
      <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-brand-ink/20" />
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
          One App • Fast Delivery
        </span>
        <h3 className="mt-1 text-2xl font-bold text-brand-green">Davintom</h3>
      </div>

      <div className="mt-6 space-y-3">
        {CATEGORIES.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center justify-between rounded-2xl border border-brand-green/12 bg-white p-3 sm:p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-brand-green/30"
          >
            <div className="">
              <p className="font-semibold text-base md:text-lg text-brand-green">{item.title}</p>
              <p className="mt-0.5 text-[10px] sm:text-xs text-brand-ink/70">{item.subtitle}</p>
            </div>
            <span className="rounded-full bg-brand-green-soft px-2.5 py-1 text-[11px] font-semibold text-brand-green">
              {item.badge}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/explore"
        className="mt-4 block w-full rounded-full bg-brand-accent py-2.5 sm:py-3.5 text-center text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-brand-accent-hover"
      >
        Order Now
      </Link>
    </div>
  );
}