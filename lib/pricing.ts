export type Plan = {
  /** Small uppercase label above the positioning line. */
  name: string;
  positioning: string;
  description: string;
  badge?: string;
  /** Initial setup is always quoted individually — never a fixed price. */
  setup: string;
  monthlyPrice: string;
  /** Optional heading above the feature list, e.g. "Everything in Starter, plus:". */
  featuresHeading?: string;
  features: string[];
  cta: { label: string; href: string };
  /** Orange border, badge and filled button. */
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    positioning: "Get Online",
    description: "A simple, professional website for your business.",
    setup: "Custom Quote",
    monthlyPrice: "₹299",
    features: [
      "Professional Website",
      "Essential Pages",
      "Logo Design",
      "Domain Setup",
      "Website Hosting",
      "SSL & Security",
      "Secure Website Data",
      "Website Updates & Support",
    ],
    cta: { label: "Get Started", href: "/#contact" },
  },
  {
    name: "Premium",
    positioning: "Grow Online",
    description:
      "A complete digital presence with additional business and growth features.",
    badge: "Recommended for Businesses",
    setup: "Custom Quote",
    monthlyPrice: "₹499",
    featuresHeading: "Everything in Starter, plus:",
    features: [
      "More Pages & Content",
      "Premium Website Design",
      "Enhanced Logo & Brand Styling",
      "Premium Cloud Database",
      "Business Email",
      "SEO Setup",
      "Google Analytics",
      "Advanced Website Features",
      "Priority Updates & Support",
    ],
    cta: { label: "Choose Premium", href: "/#contact" },
    featured: true,
  },
];

export const pricingNote =
  "Initial website setup is quoted individually based on your requirements.";

export type PricingValue = {
  title: string;
  description: string;
};

export const pricingValues: PricingValue[] = [
  {
    title: "One Partner",
    description: "Website, branding, hosting and support in one place.",
  },
  {
    title: "Simple & Reliable",
    description: "No need to manage multiple technical services yourself.",
  },
  {
    title: "Ongoing Care",
    description: "Your website continues to be maintained after launch.",
  },
  {
    title: "Built for Business",
    description:
      "Designed around your business rather than a generic template.",
  },
];
