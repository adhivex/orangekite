import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { workItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — OrangeKite",
  description:
    "Websites OrangeKite has designed and built, from corporate sites to direct-to-consumer storefronts.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-x py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-tight text-orange">
              Our work
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter text-fg sm:text-5xl">
              Every site we&rsquo;ve shipped.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              A small, growing list — each one designed, built and launched end
              to end.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <WorkCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-fg sm:text-3xl">
              Want your site in this list?
            </h2>
            <p className="max-w-md leading-relaxed text-muted">
              Tell us what you&rsquo;re building and we&rsquo;ll come back
              within one business day.
            </p>
            <a
              href="/#contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
