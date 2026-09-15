import { Code2, Bot, BarChart3, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Website design & development",
    description: "Fast, modern sites built for conversion and scale.",
  },
  {
    icon: Bot,
    title: "AI automation",
    description: "Custom workflows that remove manual work from operations.",
  },
  {
    icon: BarChart3,
    title: "Data analytics",
    description: "Dashboards and pipelines that turn raw data into decisions.",
  },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Industries served" },
  { value: "92%", label: "Client retention" },
  { value: "3 wks", label: "Avg. time to launch" },
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
