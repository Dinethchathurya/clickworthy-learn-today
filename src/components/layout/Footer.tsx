import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/articles";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg">
                Click<span className="gradient-text">Worthy</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Learn tomorrow's digital world today. Beginner-friendly guides to technology,
              AI tools, productivity and future tech.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Site</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/articles" className="hover:text-foreground">All articles</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {CATEGORIES.map((c) => (
                <li key={c.name}>
                  <Link
                    to="/articles"
                    search={{ category: c.name }}
                    className="hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ClickWorthy. All rights reserved.</p>
          <p>Built for curious learners.</p>
        </div>
      </div>
    </footer>
  );
}
