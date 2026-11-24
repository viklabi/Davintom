import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-center">
      <span className="rounded-full bg-brand-green-soft px-3.5 py-1 text-xs font-semibold text-brand-green">
        Ile-Ife &amp; OAU Pilot • Launching Soon
      </span>
      <h1 className="mt-4 text-3xl font-bold text-brand-green md:text-4xl">
        Fresh Beef, Packaged Cuts &amp; Nearby Vendors
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm text-brand-ink/80 md:text-base">
        We are onboarding verified abattoirs and local meat vendors around Ile-Ife. Browse and
        same-day delivery ordering will open here shortly.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5"
        >
          Back to Home
        </Link>
        <Link
          href="/partner"
          className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent-hover"
        >
          Register as a Vendor
        </Link>
      </div>
    </main>
  );
}