// Closing call to action for secondary pages. Same styles as the closing block
// on /work, as a standalone section.
export default function PageCTA({
  heading,
  text,
  cta,
}: {
  heading: string;
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="section-x py-20 sm:py-28">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter text-fg sm:text-3xl">
          {heading}
        </h2>
        <p className="max-w-md leading-relaxed text-muted">{text}</p>
        <a
          href={cta.href}
          className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
