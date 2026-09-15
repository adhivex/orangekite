export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="section-x relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tighter text-fg sm:text-5xl md:text-[3.5rem] lg:text-6xl">
            Outthink. Outbuild. Outgrow.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Software, AI, and data solutions designed to create real business
            momentum.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/[0.04]"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
