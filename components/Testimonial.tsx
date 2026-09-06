export default function Testimonial() {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="section-x py-20 sm:py-28">
        <figure className="mx-auto max-w-2xl text-center">
          <blockquote className="font-serif text-2xl italic leading-snug text-fg sm:text-3xl">
            &ldquo;OrangeKite rebuilt our onboarding and automated the manual
            review work behind it in the same sprint. We haven&rsquo;t
            touched a spreadsheet since.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted">
            <span className="font-medium text-fg">Maya Chen</span> · Head of
            Operations, Northwind
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
