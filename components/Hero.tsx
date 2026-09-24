export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/*
        The plate ships as a blue night scene; the contact section's artwork is
        a warm amber night. Sepia carries the blue over to amber and the extra
        saturation keeps it rich rather than muddy, so both sections read as
        the same evening.
      */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/assets/hero-valley.webp')] bg-cover bg-center [filter:brightness(0.82)_sepia(0.92)_saturate(1.75)_hue-rotate(-14deg)_contrast(1.06)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-hero-scrim" aria-hidden="true" />

      <div className="section-x relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tighter text-fg sm:text-5xl md:text-[3.5rem] lg:text-6xl">
            Crafted,{" "}
            <span className="whitespace-nowrap text-orange">not templated.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-fg/75 sm:text-lg">
            Custom websites and web apps for businesses worldwide, designed and built from scratch.
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
