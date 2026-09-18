import { workItems } from "@/lib/data";
import WorkCard from "@/components/WorkCard";

export default function Work() {
  return (
    <section id="work" className="section-x py-20 sm:py-28">
      <div className="mb-12 max-w-xl">
        <h2 className="text-3xl font-bold tracking-tighter text-fg sm:text-4xl">
          Recent work
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          A sample of the kind of problems we like to solve.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/work"
          className="inline-flex items-center rounded-md border border-orange/50 px-5 py-2.5 text-sm font-medium text-orange transition-colors hover:border-orange hover:bg-orange-dim"
        >
          View all work
        </a>
      </div>
    </section>
  );
}
