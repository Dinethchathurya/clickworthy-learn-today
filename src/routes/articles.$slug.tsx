import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { getArticle, getRelated } from "@/data/articles";
import { TableOfContents } from "@/components/article/TableOfContents";
import { FAQ } from "@/components/article/FAQ";
import { ShareButtons } from "@/components/article/ShareButtons";
import { ArticleCard } from "@/components/ArticleCard";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const a = loaderData.article;
    const url = `https://clickworthy.com/articles/${params.slug}`;
    return {
      meta: [
        { title: a.metaTitle },
        { name: "description", content: a.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.metaTitle },
        { property: "og:description", content: a.metaDescription },
        { property: "og:url", content: url },
        { name: "article:published_time", content: a.publishedDate },
        { name: "article:author", content: a.author },
        { name: "article:section", content: a.category },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.metaDescription,
            datePublished: a.publishedDate,
            author: { "@type": "Organization", name: a.author },
            publisher: {
              "@type": "Organization",
              name: "ClickWorthy",
              url: "https://clickworthy.com",
            },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">
          We couldn't find that article. It may have been moved or unpublished.
        </p>
        <Link
          to="/articles"
          className="mt-6 inline-flex h-10 items-center rounded-full bg-[image:var(--gradient-brand)] px-5 text-sm font-medium text-primary-foreground"
        >
          Browse all articles
        </Link>
      </div>
    </SiteShell>
  ),
  component: ArticleView,
});

function ArticleView() {
  const { article } = Route.useLoaderData();
  const related = getRelated(article.slug, 3);
  const Content = article.content;

  return (
    <SiteShell>
      <article className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All articles
        </Link>

        <header className="mt-6 max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {article.publishedLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {article.readingTime}
            </span>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            <div className="prose-article">
              <Content />
            </div>

            <div className="mt-10">
              <FAQ items={article.faq} />
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <ShareButtons slug={article.slug} title={article.title} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents items={article.toc} />
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 text-2xl font-bold">Keep reading</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
