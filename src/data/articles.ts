import type { ReactNode } from "react";
import { whatIsTheInternet } from "./articles/what-is-the-internet";
import { whatIsAWebsite } from "./articles/what-is-a-website";
import { whatIsADomainName } from "./articles/what-is-a-domain-name";
import { whatIsWebHosting } from "./articles/what-is-web-hosting";
import { whatIsDns } from "./articles/what-is-dns";
import { whatIsAnIpAddress } from "./articles/what-is-an-ip-address";
import { whatIsABrowser } from "./articles/what-is-a-browser";
import { whatIsCloudComputing } from "./articles/what-is-cloud-computing";

export type Category = "Tech Basics" | "AI Tools" | "Productivity" | "Future Tech";

export interface FAQItem {
  q: string;
  a: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface FeaturedImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
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
  keywords?: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
  featuredImage?: FeaturedImage;
  toc: TocItem[];
  faq: FAQItem[];
  relatedSlugs?: string[];
  content: () => ReactNode;
}

export const articles: Article[] = [
  whatIsTheInternet,
  whatIsAWebsite,
  whatIsADomainName,
  whatIsWebHosting,
  whatIsDns,
  whatIsAnIpAddress,
  whatIsABrowser,
];

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
