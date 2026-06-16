import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/layout/SiteShell";

const SITE_URL = "https://clickworthy.com";
// Google Analytics placeholder — replace G-XXXXXXX with your real measurement ID
const GA_ID = "G-XXXXXXX";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-32 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-10 items-center rounded-full bg-[image:var(--gradient-brand)] px-5 text-sm font-medium text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </SiteShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <SiteShell>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          This page didn't load. Try again or head back home.
        </p>
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center rounded-full bg-[image:var(--gradient-brand)] px-5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex h-10 items-center rounded-full border border-border bg-background px-5 text-sm font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ClickWorthy — Learn Tomorrow's Digital World Today" },
      {
        name: "description",
        content:
          "Beginner-friendly guides to technology, AI tools, productivity and the future of tech — all explained in plain English.",
      },
      { name: "author", content: "ClickWorthy" },
      { name: "google-adsense-account", content: "ca-pub-2143762553601591" },
      { name: "theme-color", content: "#6d28d9" },
      { property: "og:site_name", content: "ClickWorthy" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "ClickWorthy — Learn Tomorrow's Digital World Today" },
      {
        property: "og:description",
        content:
          "Beginner-friendly guides to technology, AI tools, productivity and the future of tech.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ClickWorthy",
          url: SITE_URL,
          description:
            "Beginner-friendly guides to technology, AI tools, productivity and future tech.",
        }),
      },
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2143762553601591",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Analytics placeholder — uncomment and set GA_ID to enable */}
        {/*
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
        */}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
