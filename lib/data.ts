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
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
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
};

export const workItems: WorkItem[] = [
  {
    tag: "Website design & development",
    title: "Sai Jagannath Engineering & Construction",
    result:
      "Corporate site for an industrial electrical and instrumentation contractor, with a filterable portfolio of cement, steel and pellet plant projects.",
    href: "https://sjec.in",
  },
  {
    tag: "Website design & development",
    title: "Routray Naturals",
    result:
      "Direct-to-consumer storefront for dry fruits and whole spices, with a product catalogue, cart and a separate bulk and wholesale channel.",
    href: "https://routraynaturals.in",
  },
];
