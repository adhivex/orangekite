import { ArrowUpRight } from "lucide-react";
import { workItems } from "@/lib/data";

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {workItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-lg border border-border transition-colors hover:border-border-strong"
          >
            <div className="flex aspect-[16/9] items-center justify-center border-b border-border bg-bg-elevated">
              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                className="text-muted/40 transition-colors group-hover:text-orange"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-6">
              <span className="text-xs font-medium uppercase tracking-tight text-orange">
                {item.tag}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.result}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
