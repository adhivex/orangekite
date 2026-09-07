import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "@/lib/data";

// TODO: Replace these with OrangeKite's real social profile URLs.
const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-x flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-0.5" aria-label="OrangeKite home">
            <Image
              src="/assets/orangekite-icon_updated.svg.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-base font-semibold tracking-tight">
              <span className="text-orange">Orange</span>
              <span className="text-fg">Kite</span>
            </span>
          </a>
          <p className="max-w-xs text-sm text-muted">
            Websites, AI automation, and data analytics for teams that move
            fast.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="section-x text-xs text-muted">
          © {new Date().getFullYear()} OrangeKite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
