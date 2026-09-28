import { Check } from "lucide-react";
import { type Plan } from "@/lib/pricing";

export default function PricingCard({ plan }: { plan: Plan }) {
  const featured = plan.featured ?? false;

  return (
    <article
      aria-labelledby={`plan-${plan.name.toLowerCase()}`}
      className={`flex h-full flex-col rounded-lg border bg-bg-elevated p-6 transition-colors motion-reduce:transition-none sm:p-8 lg:p-10 ${
        featured ? "border-orange" : "border-border hover:border-border-strong"
      }`}
    >
      <div className="flex min-h-6 flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {plan.name}
        </p>
        {plan.badge && (
          <span className="rounded-full bg-orange-dim px-3 py-1 text-xs font-medium text-orange">
            {plan.badge}
          </span>
        )}
      </div>

      <h2
        id={`plan-${plan.name.toLowerCase()}`}
        className="mt-4 text-3xl font-bold tracking-tighter text-fg sm:text-4xl"
      >
        {plan.positioning}
      </h2>
      <p className="mt-3 leading-relaxed text-muted">
        {plan.description}
      </p>

      <dl className="mt-6 flex flex-col gap-5 border-y border-border py-6">
        <div className="flex flex-col gap-1.5">
          <dt className="text-sm text-muted">Initial Website Setup</dt>
          <dd className="text-lg font-semibold tracking-tight text-fg">
            {plan.setup}
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="text-sm text-muted">Monthly Care</dt>
          <dd className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tighter text-fg sm:text-5xl">
              {plan.monthlyPrice}
            </span>
            <span className="text-sm text-muted">/month</span>
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        {plan.featuresHeading && (
          <p className="mb-4 text-sm font-medium text-fg">
            {plan.featuresHeading}
          </p>
        )}
        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-fg/85">
              <Check
                size={18}
                strokeWidth={2}
                className="mt-[3px] shrink-0 text-orange"
                aria-hidden="true"
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <a
          href={plan.cta.href}
          className={
            featured
              ? "flex min-h-11 w-full items-center justify-center rounded-md border border-orange bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              : "flex min-h-11 w-full items-center justify-center rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/[0.04]"
          }
        >
          {plan.cta.label}
        </a>
      </div>
    </article>
  );
}
