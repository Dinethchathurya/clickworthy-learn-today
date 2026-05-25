import type { TocItem } from "@/data/articles";

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border bg-secondary/40 p-5"
    >
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        On this page
      </h2>
      <ol className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="tabular-nums text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
