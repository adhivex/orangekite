import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section-x pb-20 sm:pb-28">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 rounded-lg border border-border bg-bg-elevated p-8 transition-colors hover:border-border-strong"
          >
            <span className="text-4xl font-bold tracking-tighter text-orange sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-base font-semibold tracking-tight text-fg">
              {stat.label}
            </span>
            <span className="text-sm leading-relaxed text-muted">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
