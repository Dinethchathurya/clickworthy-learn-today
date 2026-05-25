import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Mail, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, CATEGORIES } from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClickWorthy — Learn Tomorrow's Digital World Today" },
      {
        name: "description",
        content:
          "Beginner-friendly guides to tech, AI tools, productivity and the future. Clear explanations, real examples, zero jargon.",
      },
      { property: "og:title", content: "ClickWorthy — Learn Tomorrow's Digital World Today" },
      {
        property: "og:description",
        content:
          "Beginner-friendly guides to tech, AI tools, productivity and the future of technology.",
      },
      { property: "og:url", content: "https://clickworthy.com/" },
    ],
    links: [{ rel: "canonical", href: "https://clickworthy.com/" }],
  }),
  component: Home,
});

function Home() {
  const featured = articles[0];
  const latest = articles.slice(0, 6);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-soft)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(60rem 30rem at 50% -10%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Tech explained for humans
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Learn tomorrow's <span className="gradient-text">digital world</span> today.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            ClickWorthy is your beginner-friendly guide to technology, AI tools,
            productivity and what's coming next — written in plain English.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/articles"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <BookOpen className="h-4 w-4" /> Read articles
            </Link>
            <Link
              to="/about"
              className="inline-flex h-11 items-center rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-secondary"
            >
              About ClickWorthy
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Featured
              </p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">Start here</h2>
            </div>
          </div>
          <ArticleCard article={featured} featured />
        </section>
      )}

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Explore by category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              to="/articles"
              search={{ category: c.name }}
              className="card-article group flex flex-col p-6"
            >
              <span className="text-3xl">{c.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold group-hover:text-primary">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Browse <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Latest articles</h2>
          <Link
            to="/articles"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-brand)] p-10 text-primary-foreground md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                <Mail className="h-3.5 w-3.5" /> Newsletter
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Get one clear tech guide each week.
              </h2>
              <p className="mt-3 max-w-md text-primary-foreground/85">
                Join curious readers learning AI, productivity and the future of tech — no
                spam, unsubscribe any time.
              </p>
            </div>
            <form
              className="flex w-full flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 w-full rounded-full border-0 bg-white/95 px-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
