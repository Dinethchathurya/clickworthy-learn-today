import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Sparkles, BookOpen, Compass, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ClickWorthy" },
      {
        name: "description",
        content:
          "ClickWorthy is a beginner-friendly digital education site that explains technology, AI and the future of tech in plain English.",
      },
      { property: "og:title", content: "About — ClickWorthy" },
      {
        property: "og:description",
        content:
          "ClickWorthy is a beginner-friendly digital education site that explains technology in plain English.",
      },
      { property: "og:url", content: "https://clickworthy.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://clickworthy.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Our mission
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Making technology <span className="gradient-text">click</span> for everyone.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            ClickWorthy is a digital education site that explains technology, AI tools,
            productivity and future tech — in simple language, with real examples.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="prose-article">
          <p>
            The world is moving fast. New tools, new AI features and new ways of working
            arrive every week. Most articles about them assume you already understand the
            jargon. We don't.
          </p>
          <p>
            ClickWorthy is written for curious beginners — students, professionals,
            parents, and anyone who wants to feel confident using modern technology
            without spending hours decoding it.
          </p>
          <h2>What we cover</h2>
          <ul>
            <li><strong>Tech Basics</strong> — the foundations: internet, devices, security.</li>
            <li><strong>AI Tools</strong> — practical guides for working smarter with AI.</li>
            <li><strong>Productivity</strong> — workflows that actually save you time.</li>
            <li><strong>Future Tech</strong> — what's coming, explained without hype.</li>
          </ul>
          <h2>How we write</h2>
          <p>
            Every article is written and edited by humans. We aim for short paragraphs,
            plain language and useful examples. If something is unclear, we rewrite it.
            If something is uncertain, we say so.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Pillar icon={<BookOpen className="h-5 w-5" />} title="Beginner-first">
            Written for people learning, not for people showing off.
          </Pillar>
          <Pillar icon={<Compass className="h-5 w-5" />} title="Practical">
            Real-world examples and steps you can use today.
          </Pillar>
          <Pillar icon={<Heart className="h-5 w-5" />} title="Honest">
            No hype, no scare tactics, no sponsored fluff.
          </Pillar>
        </div>
      </section>
    </SiteShell>
  );
}

function Pillar({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
        {icon}
      </span>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
