import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PageCTA from "@/components/PageCTA";
import { plans, pricingNote, pricingValues } from "@/lib/pricing";

const description =
  "Simple pricing for a complete digital presence — a professionally designed website with hosting, security, updates and support, from ₹299/month.";

export const metadata: Metadata = {
  title: "Pricing — OrangeKite",
  description,
  // Setting openGraph here replaces the layout's object wholesale, so the
  // shared OG image is repeated.
  openGraph: {
    title: "Pricing — OrangeKite",
    description,
    url: "https://orangekite.in/pricing",
    siteName: "OrangeKite",
    images: [
      {
        url: "https://orangekite.in/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "OrangeKite — websites crafted, not templated",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — OrangeKite",
    description,
    images: ["https://orangekite.in/og-image.jpg"],
  },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-x pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="text-sm font-medium uppercase tracking-tight text-orange">
              Pricing
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tighter text-fg sm:text-5xl">
              Simple pricing. Complete digital presence.
            </h1>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
              Get a professionally designed website with the technology,
              support and care your business needs — all in one place.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-5 lg:max-w-4xl lg:grid-cols-2">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted">
            {pricingNote}
          </p>
        </section>

        <section className="border-y border-border bg-bg-elevated">
          <div className="section-x py-20 sm:py-28">
            <h2 className="sr-only">Why OrangeKite</h2>
            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {pricingValues.map((value) => (
                <li key={value.title} className="border-t border-border-strong pt-6">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PageCTA
          heading="Not sure which plan is right for you?"
          text="Tell us about your business and we’ll recommend the right approach."
          cta={{ label: "Let’s Talk", href: "/#contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
