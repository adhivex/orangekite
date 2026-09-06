"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // TODO: Wire this up to a real submission handler before launch —
    // e.g. POST to a Formspree endpoint, or a Next.js API route / serverless
    // function that forwards to email or a CRM. For now this just logs the
    // payload so the form is fully functional in the UI during development.
    console.log("Contact form submission:", payload);

    e.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="section-x py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tighter text-fg sm:text-4xl">
              Let&rsquo;s talk
            </h2>
            <p className="mt-4 text-muted">
              Whether it&rsquo;s a new site, an automation idea, or a data
              problem you can&rsquo;t see through — tell us about it.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:hello@orangekite.in"
                className="flex items-center gap-3 text-sm text-fg transition-colors hover:text-orange"
              >
                <Mail size={18} strokeWidth={1.75} className="text-orange" />
                hello@orangekite.in
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={18} strokeWidth={1.75} className="text-orange" />
                Remote-first, working with teams worldwide
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-border-strong bg-transparent px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-orange"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-border-strong bg-transparent px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-orange"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-md border border-border-strong bg-transparent px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-orange"
                placeholder="Tell us a bit about your project..."
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Send message
              </button>
              {status === "sent" && (
                <span role="status" className="text-sm text-muted">
                  Thanks — we&rsquo;ll be in touch soon.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
