const FLOW_STEPS = [
  {
    num: "01",
    role: "Farmer / Abattoir",
    detail: "Lists verified livestock and fresh meat supply on the network.",
  },
  {
    num: "02",
    role: "Davintom Platform",
    detail: "Matches orders in real time and handles checkout & split accounting.",
  },
  {
    num: "03",
    role: "Delivery Rider",
    detail: "Coordinated dispatch ensures fresh meat arrives on time, every time.",
  },
  {
    num: "04",
    role: "Vendor / Customer",
    detail: "Receives fresh orders with live status tracking from prep to doorstep.",
  },
];

export function HowItFlowsSection() {
  return (
    <section
      id="how-it-flows"
      className="border-y border-brand-green/10 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">
            End-to-End Flow
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-green">
            How Davintom works
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl bg-brand-cream p-6 ring-1 ring-brand-green/10"
            >
              <span className="text-xs font-bold text-brand-accent">STEP {step.num}</span>
              <h3 className="mt-2 text-lg font-bold text-brand-green">{step.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}