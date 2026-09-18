import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type WorkItem } from "@/lib/data";

const cardBase =
  "flex flex-col overflow-hidden rounded-lg border transition-all duration-200 ease-out";

// Screenshot when the project has one, otherwise the neutral placeholder box
// the cards shipped with — so a project without artwork still reads as a card
// rather than a broken image.
function Thumbnail({ item }: { item: WorkItem }) {
  if (item.image) {
    return (
      <div
        className={`relative aspect-[2/1] border-b border-border ${
          item.comingSoon ? "border-dashed" : ""
        }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt ?? `${item.title} website`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="rounded-t-lg object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-[2/1] items-center justify-center rounded-t-lg border-b bg-bg-elevated ${
        item.comingSoon ? "border-dashed border-border" : "border-border"
      }`}
    >
      {!item.comingSoon && (
        <ArrowUpRight
          size={24}
          strokeWidth={1.5}
          className="text-muted/40 transition-colors group-hover:text-orange"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-0.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function WorkCard({ item }: { item: WorkItem }) {
  // In-progress slot: same card shape, but not a link — a dashed, dimmed panel
  // so it never reads as a dead project tile.
  if (item.comingSoon) {
    return (
      <div className={`${cardBase} border-dashed border-border opacity-60`}>
        <Thumbnail item={item} />
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <span className="text-xs font-medium uppercase tracking-tight text-muted">
            {item.tag}
          </span>
          <h3 className="text-base font-semibold tracking-tight text-fg">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">{item.result}</p>
          <Tags tags={item.tags} />
        </div>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardBase} group border-border hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-[0_12px_30px_-12px_rgba(244,89,28,0.35)]`}
    >
      <Thumbnail item={item} />
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-tight text-orange">
          {item.tag}
        </span>
        <h3 className="text-base font-semibold tracking-tight text-fg">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{item.result}</p>
        <Tags tags={item.tags} />
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-orange">
          View project
          <ArrowUpRight
            size={16}
            strokeWidth={2}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}
