import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ClickWorthy" },
      {
        name: "description",
        content:
          "How ClickWorthy collects, uses and protects your information when you visit the site.",
      },
      { property: "og:title", content: "Privacy Policy — ClickWorthy" },
      { property: "og:url", content: "https://clickworthy.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://clickworthy.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 2026</p>

        <div className="prose-article mt-8">
          <p>
            ClickWorthy ("we", "us", "our") respects your privacy. This policy explains
            what information we collect when you use clickworthy.com, why we collect it,
            and how it is handled.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            We collect very little information directly. When you browse the site, our
            hosting provider may automatically receive standard log data such as your IP
            address, browser type, referring page and timestamps. If you subscribe to our
            newsletter, we collect the email address you provide.
          </p>

          <h2>2. Cookies and analytics</h2>
          <p>
            We may use cookies and privacy-respecting analytics (such as Google Analytics)
            to understand which articles are popular and how the site is performing. You
            can disable cookies in your browser at any time.
          </p>

          <h2>3. Advertising</h2>
          <p>
            ClickWorthy may display ads from third-party networks such as Google AdSense.
            These providers may use cookies to serve ads based on your visits to this and
            other websites. You can opt out of personalised advertising via Google's Ads
            Settings.
          </p>

          <h2>4. How we use information</h2>
          <ul>
            <li>To operate and improve the site</li>
            <li>To measure traffic and content performance</li>
            <li>To send newsletter emails you have opted into</li>
            <li>To prevent abuse and keep the site secure</li>
          </ul>

          <h2>5. Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited data with
            service providers (analytics, email delivery, hosting) strictly for the
            purposes above.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on where you live, you may have rights to access, correct or delete
            personal data we hold about you. You can unsubscribe from emails at any time
            using the link in any newsletter.
          </p>

          <h2>7. Children</h2>
          <p>
            ClickWorthy is not directed at children under 13 and we do not knowingly
            collect personal data from them.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update this policy from time to time. Material changes will be noted at
            the top of this page.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
