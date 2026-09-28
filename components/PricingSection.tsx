"use client";
// components/PricingSection.tsx — OrangeKite pricing, reference-style layout (dark theme)

import { useState, type ReactNode } from "react";

type Billing = "monthly" | "yearly";

// Yearly discount shown on the toggle. Change or set to 0 to hide it.
const YEARLY_DISCOUNT = 0.1;

type Plan = {
  name: string;
  icon: ReactNode;
  monthly: number;
  chips: string[];
  intro?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const Spark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F4591C]" aria-hidden>
    <path fill="currentColor" d="M12 2l1.8 6.7L20.5 10l-6.7 1.8L12 18.5l-1.8-6.7L3.5 10l6.7-1.3z" />
  </svg>
);

const Rocket = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F4591C]" aria-hidden>
    <path fill="currentColor" d="M14 3c3.5 0 7 0 7 0s0 3.5 0 7c0 2-1.5 4-4 6l-1 4-3-2-4-4-2-3 4-1c2-2.5 4-4 6-4z" />
    <path fill="currentColor" d="M5 15c-1.5 1-2 4-2 6 2 0 5-.5 6-2z" />
  </svg>
);

const plans: Plan[] = [
  {
    name: "Get Online",
    icon: <Spark />,
    monthly: 799,
    chips: ["Hosting included", "SSL secured"],
    features: [
      "Professional website",
      "Essential pages",
      "Logo design",
      "Domain setup",
      "Website hosting",
      "SSL & security",
      "Secure website data",
      "Website updates & support",
    ],
    cta: "Get started",
  },
  {
    name: "Grow Online",
    icon: <Rocket />,
    monthly: 999,
    chips: ["Cloud database", "Business email"],
    intro: "Everything in Get Online, plus:",
    features: [
      "More pages & content",
      "Premium website design",
      "Enhanced logo & brand styling",
      "Premium cloud database",
      "Business email",
      "SEO setup",
      "Google Analytics",
      "Advanced website features",
      "Priority updates & support",
    ],
    cta: "Grow my business",
    highlighted: true,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-zinc-400" aria-hidden>
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        {/* Billing toggle */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 text-sm">
            {(["monthly", "yearly"] as Billing[]).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                aria-pressed={billing === b}
                className={`flex items-center gap-2 rounded-md px-3 py-1.5 capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F4591C] ${
                  billing === b ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {b}
                {b === "yearly" && YEARLY_DISCOUNT > 0 && (
                  <span className="text-xs text-[#F4591C]">Save {YEARLY_DISCOUNT * 100}%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((p) => {
            const price =
              billing === "monthly" ? p.monthly : p.monthly * 12 * (1 - YEARLY_DISCOUNT);
            return (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  p.highlighted
                    ? "border-[#F4591C] bg-[#F4591C]/[0.06]"
                    : "border-white/10 bg-[#1C1E24]"
                }`}
              >
                <h2 className="flex items-center gap-2 text-3xl font-semibold text-white">
                  {p.name} {p.icon}
                </h2>
                <p className="mt-1 text-sm text-zinc-300">
                  {formatINR(price)} / {billing === "monthly" ? "month" : "year"}
                </p>
                <p className="text-xs text-zinc-500">+ one-time website setup, custom quoted</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className={`rounded-full px-3 py-1 text-xs ${
                        p.highlighted ? "bg-[#F4591C]/15 text-[#ff8a5c]" : "bg-white/[0.07] text-zinc-300"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1">
                  {p.intro && <p className="mb-3 text-sm text-zinc-300">{p.intro}</p>}
                  <ul className="space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-zinc-300">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/#contact"
                  className={`mt-8 rounded-lg py-2.5 text-center text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4591C] ${
                    p.highlighted
                      ? "bg-[#F4591C] text-white hover:bg-[#e04d12]"
                      : "bg-white text-[#1C1E24] hover:bg-zinc-200"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
