import { Link2, Twitter, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";

const SITE = "https://clickworthy.com";

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/articles/${slug}`;
  const enc = encodeURIComponent;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const btn =
    "inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background px-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-foreground">Share:</span>
      <a
        className={btn}
        href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-4 w-4" /> Twitter
      </a>
      <a
        className={btn}
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="h-4 w-4" /> Facebook
      </a>
      <a
        className={btn}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <button className={btn} onClick={onCopy} type="button">
        <Link2 className="h-4 w-4" /> {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
