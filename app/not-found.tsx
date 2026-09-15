import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <header className="section-x relative flex h-16 w-full items-center sm:h-20">
        <a href="/" className="flex items-center gap-0.5" aria-label="OrangeKite home">
          <Image
            src="/assets/orangekite-icon_updated.svg.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-orange">Orange</span>
            <span className="text-fg">Kite</span>
          </span>
        </a>
      </header>

      <div className="section-x relative flex flex-1 flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-tight text-orange">
          404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter text-fg sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Back to home
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/[0.04]"
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
