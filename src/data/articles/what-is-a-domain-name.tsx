import type { Article } from "../articles";

export const whatIsADomainName: Article = {
  slug: "what-is-a-domain-name",
  title: "What Is a Domain Name? Beginner Guide to Website Addresses",
  category: "Tech Basics",
  excerpt:
    "A simple explanation of domain names, how they work, why they matter, and how they connect human-friendly website names to real internet addresses.",
  author: "ClickWorthy Editors",
  publishedDate: "2026-05-23",
  publishedLabel: "May 23, 2026",
  readingTime: "9 min read",
  metaTitle:
    "What Is a Domain Name? Beginner Guide to Website Addresses — ClickWorthy",
  metaDescription:
    "Learn what a domain name is, how DNS connects it to a real server, the parts of a domain, top-level domains, and how to pick a great name.",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "what-is-a-domain-name", label: "What Is a Domain Name?" },
    { id: "why-they-exist", label: "Why Domain Names Exist" },
    { id: "domain-vs-ip", label: "Domain Name vs IP Address" },
    { id: "parts", label: "Parts of a Domain Name" },
    { id: "tld", label: "What Is a Top-Level Domain?" },
    { id: "dns", label: "How DNS Connects Domains to Websites" },
    { id: "choose", label: "How to Choose a Good Domain Name" },
    { id: "mistakes", label: "Common Domain Name Mistakes" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
  ],
  faq: [
    {
      q: "What is a domain name in simple words?",
      a: "A domain name is the friendly address you type into a browser, like example.com. It is a human-readable shortcut to a server's real numeric IP address, so people don't have to remember long strings of numbers.",
    },
    {
      q: "Do I own my domain name forever?",
      a: "No. You register a domain for a period — usually one to ten years — and then renew it. If you let it expire, someone else can register it. Most providers offer auto-renew so you don't lose your name by accident.",
    },
    {
      q: "What is the difference between a domain and a URL?",
      a: "A domain is just the name (example.com). A URL is the full address of a specific page, like https://example.com/articles/what-is-a-website. The URL includes the protocol, the domain and the path to the page.",
    },
    {
      q: "Can I move my domain to another provider?",
      a: "Yes. Domains are portable. You can transfer a domain from one registrar to another, usually for a small fee that includes one year of renewal. The transfer takes a few days.",
    },
    {
      q: "Does the domain extension affect SEO?",
      a: "A little, but less than people think. Search engines treat .com, .net, .org and most modern extensions roughly equally. What matters more is a clear name, good content and trustworthy links.",
    },
    {
      q: "Can two websites share the same domain?",
      a: "No, each domain points to one website at a time. However, you can use subdomains like blog.example.com and shop.example.com to host separate sites under the same brand.",
    },
  ],
  relatedSlugs: ["what-is-dns", "what-is-a-website", "what-is-the-internet"],
  content: () => (
    <>
      <section id="introduction">
        <p>
          Every website you visit has a name — google.com, wikipedia.org, your favourite
          blog. That name is called a domain name, and it is one of the most important
          pieces of the internet.
        </p>
        <p>
          This guide explains what a domain name really is, how it gets you to a real
          server, and how to pick one that makes sense for your project.
        </p>
      </section>

      <section id="what-is-a-domain-name">
        <h2>What Is a Domain Name?</h2>
        <p>
          A domain name is the human-friendly address of a website. Instead of typing a
          long number like <code>142.250.190.46</code>, you type{" "}
          <strong>clickworthy.com</strong>. The internet then quietly translates that name
          into the real numeric address behind it.
        </p>
        <p>
          You can think of a domain as a contact name on your phone. You don't dial a 12
          digit number — you tap "Mum" and the phone handles the rest.
        </p>
      </section>

      <section id="why-they-exist">
        <h2>Why Domain Names Exist</h2>
        <p>
          Every server on the internet has an IP address, a string of numbers. Computers
          love numbers. People do not. If we had to remember an IP for every site, the web
          would have stayed a toy for engineers.
        </p>
        <p>
          Domain names exist so brands can have memorable identities, so links can be
          shared, and so a company can keep the same name even when it changes servers.
        </p>
      </section>

      <section id="domain-vs-ip">
        <h2>Domain Name vs IP Address</h2>
        <ul>
          <li>
            <strong>IP address</strong>: the real numeric location of a server, e.g.{" "}
            <code>142.250.190.46</code>.
          </li>
          <li>
            <strong>Domain name</strong>: a friendly name that points to that IP, e.g.{" "}
            <strong>google.com</strong>.
          </li>
        </ul>
        <p>
          The IP can change — the company might move servers or use different ones for
          different regions — but the domain name stays the same. That is the whole point.
        </p>
      </section>

      <section id="parts">
        <h2>Parts of a Domain Name</h2>
        <p>
          A typical domain has two main parts plus an optional subdomain. Take{" "}
          <strong>blog.clickworthy.com</strong>:
        </p>
        <ul>
          <li><strong>blog</strong> — the subdomain (optional).</li>
          <li><strong>clickworthy</strong> — the second-level domain, usually the brand name.</li>
          <li><strong>.com</strong> — the top-level domain (TLD).</li>
        </ul>
        <p>
          Subdomains let you split one brand into multiple sites — shop, blog, docs, support
          — without buying new domains.
        </p>
      </section>

      <section id="tld">
        <h2>What Is a Top-Level Domain?</h2>
        <p>
          The TLD is the last part of a domain, after the final dot. It used to signal the
          type or location of a site, but today it is much more flexible.
        </p>
        <ul>
          <li><strong>Generic TLDs</strong>: .com, .net, .org, .info.</li>
          <li><strong>Country TLDs</strong>: .uk, .de, .fr, .jp, .br.</li>
          <li><strong>Newer TLDs</strong>: .app, .dev, .io, .ai, .blog, .store.</li>
        </ul>
        <p>
          .com is still the most trusted choice for global brands. But a clean .io or .app
          can work great for a tech product, and a country TLD signals a local audience.
        </p>
      </section>

      <section id="dns">
        <h2>How DNS Connects Domains to Websites</h2>
        <p>
          When you type a domain into a browser, your computer asks a system called DNS
          (the Domain Name System) for the IP address behind it. DNS replies with a number,
          your browser opens a connection to that number, and the page loads.
        </p>
        <p>
          DNS is basically the phone book of the internet. We have a full guide here:{" "}
          <a href="/articles/what-is-dns">what is DNS and how does it work</a>.
        </p>
      </section>

      <section id="choose">
        <h2>How to Choose a Good Domain Name</h2>
        <ul>
          <li><strong>Keep it short.</strong> Easy to type, easy to remember.</li>
          <li><strong>Make it readable.</strong> Avoid weird spellings and double letters.</li>
          <li><strong>Stay brandable.</strong> A made-up word can be stronger than a generic one.</li>
          <li><strong>Pick a clean TLD.</strong> .com first if possible; otherwise a respected modern TLD.</li>
          <li><strong>Check social handles.</strong> Make sure the same name is free on the platforms you'll use.</li>
        </ul>
      </section>

      <section id="mistakes">
        <h2>Common Domain Name Mistakes</h2>
        <ul>
          <li><strong>Using hyphens.</strong> Hard to say out loud, easy to mistype.</li>
          <li><strong>Numbers in the name.</strong> Is it "four" or "4"? Avoid the confusion.</li>
          <li><strong>Trademark conflicts.</strong> Don't copy or rhyme with a famous brand.</li>
          <li><strong>Too long.</strong> If it doesn't fit on a business card, it's too long.</li>
          <li><strong>Forgetting to renew.</strong> Always enable auto-renew on important domains.</li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          A domain name is the front door to your corner of the internet. It makes you easy
          to find, easy to remember, and easy to trust. Behind the scenes it quietly maps
          to an IP address, but to your audience it is your name.
        </p>
        <p>
          Next, learn how the lookup actually happens in our guide to{" "}
          <a href="/articles/what-is-dns">DNS</a>, or step back and see how all the pieces fit
          together in <a href="/articles/what-is-a-website">what is a website</a>.
        </p>
      </section>
    </>
  ),
};
