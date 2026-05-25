import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ClickWorthy" },
      {
        name: "description",
        content: "The terms that apply when you use ClickWorthy.",
      },
      { property: "og:title", content: "Terms of Service — ClickWorthy" },
      { property: "og:url", content: "https://clickworthy.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://clickworthy.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 2026</p>

        <div className="prose-article mt-8">
          <p>
            These terms govern your use of clickworthy.com. By accessing or using the
            site, you agree to be bound by them. If you do not agree, please stop using
            the site.
          </p>

          <h2>1. Educational content</h2>
          <p>
            Articles on ClickWorthy are provided for general informational and
            educational purposes only. They are not professional advice. You are
            responsible for verifying anything you intend to act on.
          </p>

          <h2>2. Intellectual property</h2>
          <p>
            All content on ClickWorthy — including articles, graphics, logos and design —
            is owned by us or our licensors and is protected by copyright. You may share
            links to our articles freely. Do not republish full articles without
            permission.
          </p>

          <h2>3. Acceptable use</h2>
          <ul>
            <li>Do not attempt to disrupt or attack the site.</li>
            <li>Do not scrape content to republish at scale without permission.</li>
            <li>Do not use the site for any unlawful purpose.</li>
          </ul>

          <h2>4. Third-party links</h2>
          <p>
            We may link to third-party websites or tools. We are not responsible for the
            content, practices or accuracy of those external sites.
          </p>

          <h2>5. Disclaimer</h2>
          <p>
            ClickWorthy is provided "as is" without warranties of any kind. We do not
            guarantee that the site will always be available, error-free or up to date.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, ClickWorthy and its editors will not
            be liable for any indirect, incidental or consequential damages arising from
            your use of the site or its content.
          </p>

          <h2>7. Changes to these terms</h2>
          <p>
            We may update these terms at any time. Continued use of the site after
            changes means you accept the updated terms.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws applicable to the jurisdiction in which
            ClickWorthy operates, without regard to conflict-of-laws principles.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
