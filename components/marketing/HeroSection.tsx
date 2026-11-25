import Link from "next/link";
import { AppMockupPreview } from "./AppMockupPreview";

export function HeroSection() {
  return (
    <section className="bg-brand-green text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2 md:px-4 py-1.5 text-[8px] md:text-xs font-semibold uppercase tracking-wider text-amber-200">
            Livestock &amp; Meat Distribution, Reimagined
          </span>

          <h1 className="mt-3 text-4xl md:text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Connecting livestock &amp; meat producers directly with the market.
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/85 md:text-lg">
            Davintom removes the friction, delay, and uncertainty of traditional distribution, linking
            farmers, abattoirs, vendors, riders, and everyday buyers in one reliable platform.
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/explore"
              className="rounded-xl bg-brand-accent px-5 md:px-7 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-white shadow-sm transition hover:bg-brand-accent-hover"
            >
              Order Fresh Meat
            </Link>
            <Link
              href="/partner"
              className="rounded-xl border border-white/25 bg-white/10 px-5 md:px-7 py-2.5 md:py-3.5 text-xs md:text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Abattoir &amp; Vendor Partnership
            </Link>
          </div> */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
  <Link
    href="/explore"
    className="rounded-xl bg-brand-accent px-6 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-brand-accent-hover"
  >
    Order Fresh Meat
  </Link>
  <Link
    href="/partner"
    className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/15"
  >
    Abattoir &amp; Vendor Partnership
  </Link>
</div>

          {/* <div className="mt-10 grid grid-row-3 sm:grid-cols-3 gap-4 border-t border-white/15 pt-6 text-base md:text-sm">
            <div className="flex items-center gap-4 justify-start flex-wrap">
              <p className="font-bold text-white">One App</p>
              <p className="mt-0.5 text-sm md:text-xs text-white/75">Order, track &amp; pay in one place</p>
              <hr className="sm:hidden bg-white/10 w-full"/>
            </div>
            <div className="flex items-center gap-4 justify-start flex-wrap">
              <p className="font-bold text-white">Fast Matching</p>
              <p className="mt-0.5 text-sm md:text-xs text-white/75">Vendors reach buyers in real time</p>
              <hr className="sm:hidden bg-white/10 w-full"/>
            </div>
            <div className="flex items-center gap-4 justify-start flex-wrap">
              <p className="font-bold text-white">Verified Network</p>
              <p className="mt-0.5 text-sm md:text-xs text-white/75">Trusted abattoirs &amp; quality checks</p>
              <hr className="sm:hidden bg-white/15 w-full"/>
            </div>
          </div> */}

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/15 pt-5 text-sm sm:grid-cols-3 sm:gap-4">
  <div className="rounded-xl bg-white/5 px-3.5 py-2.5 sm:bg-transparent sm:p-0">
    <p className="font-bold text-white">One App</p>
    <p className="mt-0.5 text-xs text-white/75">Order, track &amp; pay in one place</p>
  </div>
  <div className="rounded-xl bg-white/5 px-3.5 py-2.5 sm:bg-transparent sm:p-0">
    <p className="font-bold text-white">Fast Matching</p>
    <p className="mt-0.5 text-xs text-white/75">Vendors reach buyers in real time</p>
  </div>
  <div className="rounded-xl bg-white/5 px-3.5 py-2.5 sm:bg-transparent sm:p-0">
    <p className="font-bold text-white">Verified Network</p>
    <p className="mt-0.5 text-xs text-white/75">Trusted abattoirs &amp; quality checks</p>
  </div>
</div>
        </div>

        <div className="lg:col-span-5">
          <AppMockupPreview />
        </div>
      </div>
    </section>
  );
}