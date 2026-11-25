export function PartnershipBenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-15 mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">
          Partnership Benefits
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-green">
          Built for both abattoirs and meat vendors
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-green/15 bg-white p-7">
          <h3 className="text-xl font-bold text-brand-green">For Abattoirs</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-ink/85">
            <li>
              <strong className="text-brand-green">Increased Order Volume:</strong> Steady
              stream of digital orders beyond walk-in buyers.
            </li>
            <li>
              <strong className="text-brand-green">Operational Efficiency:</strong>{" "}
              Streamlined order intake reduces manual coordination.
            </li>
            <li>
              <strong className="text-brand-green">Predictable Demand:</strong> Better
              visibility into orders helps plan supply.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-green/15 bg-white p-7">
          <h3 className="text-xl font-bold text-brand-green">For Vendors</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-ink/85">
            <li>
              <strong className="text-brand-green">Expanded Sales Reach:</strong> Access
              new customer segments, including student communities.
            </li>
            <li>
              <strong className="text-brand-green">Faster Turnaround:</strong> Orders and
              payments processed without delay.
            </li>
            <li>
              <strong className="text-brand-green">Reliable Delivery Support:</strong>{" "}
              Dependable riders protect your reputation with buyers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}