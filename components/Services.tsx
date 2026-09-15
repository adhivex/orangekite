import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section-x py-20 sm:py-28">
      <div className="mb-12 max-w-xl">
        <h2 className="text-3xl font-bold tracking-tighter text-fg sm:text-4xl">
          What we do
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Three focused disciplines, one team — so your website, your
          workflows, and your data all move in the same direction.
        </p>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border border border-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="flex flex-col gap-4 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-dim text-orange">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
