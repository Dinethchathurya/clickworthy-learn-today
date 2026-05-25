import type { ReactNode } from "react";
import { whatIsTheInternet } from "./articles/what-is-the-internet";

export type Category = "Tech Basics" | "AI Tools" | "Productivity" | "Future Tech";

export interface FAQItem {
  q: string;
  a: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface Article {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  author: string;
  publishedDate: string; // ISO
  publishedLabel: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  toc: TocItem[];
  faq: FAQItem[];
  relatedSlugs?: string[];
  content: () => ReactNode;
}

export const articles: Article[] = [whatIsTheInternet];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  const explicit = (current.relatedSlugs ?? [])
    .map(getArticle)
    .filter((a): a is Article => Boolean(a));
  const rest = articles.filter(
    (a) => a.slug !== slug && !explicit.find((e) => e.slug === a.slug),
  );
  return [...explicit, ...rest].slice(0, limit);
}

export function getByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export const CATEGORIES: { name: Category; description: string; emoji: string }[] = [
  { name: "Tech Basics", description: "Core concepts explained simply.", emoji: "💡" },
  { name: "AI Tools", description: "Use modern AI to work smarter.", emoji: "🤖" },
  { name: "Productivity", description: "Workflows that save real hours.", emoji: "⚡" },
  { name: "Future Tech", description: "What's coming next, decoded.", emoji: "🚀" },
];
