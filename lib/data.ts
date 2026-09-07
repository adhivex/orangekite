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
};

// TODO: Replace these placeholder case studies with real client projects once available.
export const workItems: WorkItem[] = [
  {
    tag: "Website design & development",
    title: "Fintech onboarding rebuild",
    result: "Cut signup drop-off by 31% with a redesigned, faster flow.",
  },
  {
    tag: "AI automation",
    title: "Support ticket triage system",
    result: "Automated 60% of first-response routing, saving 20+ hrs/week.",
  },
  {
    tag: "Data analytics",
    title: "Retail demand dashboard",
    result: "Unified 5 data sources into one live pipeline for weekly planning.",
  },
];
