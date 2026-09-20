import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { services } from "@/lib/data";

// TODO: Replace these with OrangeKite's real social profile URLs.
const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:gap-x-10 md:gap-y-14 md:py-16 lg:py-20 xl:grid-cols-[1.4fr_1fr_1fr_1.9fr] xl:gap-x-12">
        {/* Brand — full width until the columns have room to sit beside it. */}
        <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
          <a href="/" className="flex items-center gap-0.5" aria-label="OrangeKite home">
            <Image
              src="/assets/orangekite-icon_updated.svg.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-orange">Orange</span>
              <span className="text-fg">Kite</span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Websites designed and built for teams that move fast.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg sm:h-9 sm:w-9"
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Services — titles come from the same source as the Services section. */}
        <nav aria-labelledby="footer-services">
          <h2
            id="footer-services"
            className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
          >
            Services
          </h2>
          <ul className="mt-4 flex flex-col md:mt-5 md:gap-1">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href="/#services"
                  className="flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg md:min-h-0 md:py-1"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-labelledby="footer-company">
          <h2
            id="footer-company"
            className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
          >
            Company
          </h2>
          <ul className="mt-4 flex flex-col md:mt-5 md:gap-1">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg md:min-h-0 md:py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Orange Setu — a secondary mention, set off by a hairline rule. The
            whole lockup is the link; kept small and out of the main nav. */}
        <div className="col-span-2 border-t border-border pt-8 md:col-span-1 md:border-l md:border-t-0 md:pl-8 md:pt-0 xl:pl-8">
          <a
            href="https://orangesetu.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 flex min-h-11 items-center gap-4 rounded-md px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
          >
            <Image
              src="/assets/orangesetu-icon.svg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0"
            />
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-tight text-orange">
                Orange Setu
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                A social initiative by OrangeKite
              </span>
            </span>
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="ml-3 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-fg md:ml-auto"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="section-x flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OrangeKite. All rights reserved.</p>
          <p>Technology for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
