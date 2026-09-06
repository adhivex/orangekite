export default function CTA() {
  return (
    <section className="border-t border-border">
      <div className="section-x py-20 text-center sm:py-28">
        <h2 className="text-3xl font-semibold tracking-tighter text-fg sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Tell us what you&rsquo;re building — we&rsquo;ll reply within one
          business day.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
