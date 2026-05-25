import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";
import { Clock } from "lucide-react";

interface Props {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: Props) {
  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className={`card-article group flex flex-col p-6 ${featured ? "md:p-8" : ""}`}
    >
      <div className="mb-3 flex items-center gap-2 text-xs">
        <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
          {article.category}
        </span>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <Clock className="h-3 w-3" /> {article.readingTime}
        </span>
      </div>
      <h3
        className={`font-semibold text-foreground transition-colors group-hover:text-primary ${
          featured ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{article.author}</span>
        <span>{article.publishedLabel}</span>
      </div>
    </Link>
  );
}
