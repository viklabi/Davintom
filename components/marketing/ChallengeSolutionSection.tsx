const CHALLENGES = [
  {
    problem: "Limited Market Reach",
    solution:
      "Reach buyers far beyond immediate abattoir foot traffic, unlocking entire nearby neighborhoods.",
  },
  {
    problem: "Supply Chain Gaps",
    solution:
      "Replace manual phone-based ordering and spoilage risk with predictable digital order intake.",
  },
  {
    problem: "Hard-to-Reach Audiences",
    solution:
      "Give busy groups like OAU students a fast, dependable way to order fresh meat on demand.",
  },
];

export function ChallengeSolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">
          Why Davintom
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-green">
          Fixing the bottlenecks in local meat distribution
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {CHALLENGES.map((card) => (
          <div
            key={card.problem}
            className="rounded-2xl border border-brand-green/12 bg-white p-6 shadow-xs"
          >
            <span className="inline-block rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
              Challenge: {card.problem}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/85">{card.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}