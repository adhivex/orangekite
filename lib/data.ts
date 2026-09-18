import { PenTool, Code2, Gauge, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: PenTool,
    title: "Design & UX",
    description:
      "Brand-led layouts and page flows that make the next click obvious.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Fast, modern sites built for conversion and scale.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Speed, structure and metadata tuned so the right people find you.",
  },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export const stats: Stat[] = [
  {
    value: "4+",
    label: "Projects shipped",
    detail: "Client sites designed, built and launched end to end.",
  },
  {
    value: "3+",
    label: "Industries served",
    detail: "From industrial contracting to direct-to-consumer retail.",
  },
  {
    value: "1 day",
    label: "Typical reply time",
    detail: "Every enquiry answered within one business day.",
  },
];

export type WorkItem = {
  tag: string;
  title: string;
  result: string;
  href: string;
  /** Short context pills shown under the description. */
  tags: string[];
  /** Screenshot in /public/assets/work. Omit and the card shows the placeholder box. */
  image?: string;
  imageAlt?: string;
  /** Renders the dashed, non-clickable "coming soon" variant instead of a project. */
  comingSoon?: boolean;
};

export const workItems: WorkItem[] = [
  {
    tag: "Website design & development",
    title: "Sai Jagannath Engineering & Construction",
    result:
      "Corporate site for an industrial contractor, with a filterable portfolio of plant projects.",
    href: "https://sjec.in",
    tags: ["Corporate site", "Portfolio filtering"],
    image: "/assets/work/sjec.jpg",
    imageAlt: "SJEC website homepage",
  },
  {
    tag: "Website design & development",
    title: "Routray Naturals",
    result:
      "Storefront for dry fruits and whole spices, with a catalogue, cart and bulk channel.",
    href: "https://routraynaturals.in",
    tags: ["E-commerce", "D2C"],
    image: "/assets/work/routray-naturals.jpg",
    imageAlt: "Routray Naturals website homepage",
  },
  {
    tag: "In progress",
    title: "RCS Logistics",
    result:
      "Logistics site in build — road freight, project cargo and custom supply-chain services.",
    href: "",
    tags: ["Corporate site", "Launching soon"],
    image: "/assets/work/rcs-logistics.jpg",
    imageAlt: "RCS Logistics website, in progress",
    comingSoon: true,
  },
];
