import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-center">
      <span className="rounded-full bg-brand-green-soft px-3.5 py-1 text-xs font-semibold text-brand-green">
        90% Vendor • 10% Davintom
      </span>
      <h1 className="mt-4 text-3xl font-bold text-brand-green md:text-4xl">
        Partner With Davintom
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm text-brand-ink/80 md:text-base">
        Abattoirs and meat vendors in Ile-Ife can reach our partnerships team directly while self-serve
        onboarding is finalized.
      </p>
      <div className="mx-auto mt-6 max-w-md rounded-2xl border border-brand-green/15 bg-white p-6 text-sm">
        <p className="font-semibold text-brand-green">partnerships@davintom.com</p>
        <p className="mt-1 text-brand-ink/75">Ile-Ife, Osun State, Nigeria</p>
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="rounded-xl border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}