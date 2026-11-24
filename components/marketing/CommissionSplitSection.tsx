import Link from "next/link";

export function CommissionSplitSection() {
  return (
    <section id="commission" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-8 rounded-3xl bg-brand-green p-8 text-white md:p-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-200">
            Commission Structure
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            A fair, transparent split
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            Davintom operates on a simple 10% commission per completed order to cover platform
            maintenance, customer support, marketing, and delivery coordination—deducted
            automatically at checkout with prompt vendor payouts and no hidden fees.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/partner"
              className="rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-accent-hover"
            >
              Become a Partner
            </Link>
            <Link
              href="/explore"
              className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-200">
            Worked Example
          </p>
          <div className="mt-4 space-y-3 text-sm tabular-nums">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-white/80">On a ₦20,000 order</span>
              <span className="text-lg font-bold">₦20,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">Vendor receives (90%)</span>
              <span className="text-lg font-bold text-emerald-200">₦18,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">Davintom commission (10%)</span>
              <span className="text-lg font-bold text-amber-200">₦2,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}