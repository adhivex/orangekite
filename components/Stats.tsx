import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="section-x grid grid-cols-2 divide-x divide-y divide-border border-l border-border py-0 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 border-r border-border px-4 py-10 text-center sm:py-14"
          >
            <span className="text-3xl font-bold tracking-tighter text-fg sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs text-muted sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
