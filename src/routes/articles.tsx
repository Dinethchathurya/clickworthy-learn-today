import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, CATEGORIES, type Category } from "@/data/articles";

const searchSchema = z.object({
  category: z
    .enum(["Tech Basics", "AI Tools", "Productivity", "Future Tech"])
    .optional()
    .catch(undefined),
});

export const Route = createFileRoute("/articles")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "All Articles — ClickWorthy" },
      {
        name: "description",
        content:
          "Browse beginner-friendly articles on tech basics, AI tools, productivity and future tech from ClickWorthy.",
      },
      { property: "og:title", content: "All Articles — ClickWorthy" },
      {
        property: "og:description",
        content:
          "Browse beginner-friendly articles on tech, AI tools, productivity and future tech.",
      },
      { property: "og:url", content: "https://clickworthy.com/articles" },
    ],
    links: [{ rel: "canonical", href: "https://clickworthy.com/articles" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { category } = Route.useSearch();
  const list = category ? articles.filter((a) => a.category === category) : articles;

  return (
    <SiteShell>
      <section className="border-b border-border bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Library
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            {category ?? "All articles"}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {category
              ? `Everything we've published in ${category}.`
              : "Clear, beginner-friendly writing on tech, AI, productivity and what's next."}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <FilterPill to={undefined} active={!category}>
              All
            </FilterPill>
            {CATEGORIES.map((c) => (
              <FilterPill key={c.name} to={c.name} active={category === c.name}>
                {c.name}
              </FilterPill>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {list.length === 0 ? (
          <p className="text-muted-foreground">No articles in this category yet.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}

function FilterPill({
  to,
  active,
  children,
}: {
  to: Category | undefined;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to="/articles"
      search={to ? { category: to } : {}}
      className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors ${
        active
          ? "bg-foreground text-background"
          : "border border-border bg-background text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
