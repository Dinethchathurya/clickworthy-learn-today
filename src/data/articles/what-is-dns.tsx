import type { Article } from "../articles";

export const whatIsDns: Article = {
  slug: "what-is-dns",
  title: "What Is DNS? The Internet's Phonebook Explained Simply",
  category: "Tech Basics",
  excerpt:
    "Learn how DNS translates website names into IP addresses and why it is one of the most important systems behind the modern internet.",
  author: "ClickWorthy Editors",
  publishedDate: "2026-05-25",
  publishedLabel: "May 25, 2026",
  readingTime: "10 min read",
  metaTitle: "What Is DNS? The Internet's Phonebook Explained Simply — ClickWorthy",
  metaDescription:
    "DNS turns domain names into IP addresses so your browser can find websites. Learn how DNS works step by step, key terms, and how to stay safe.",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "what-is-dns", label: "What Is DNS?" },
    { id: "why-needed", label: "Why DNS Is Needed" },
    { id: "dns-vs-ip", label: "DNS vs IP Address" },
    { id: "how-it-works", label: "How DNS Works Step by Step" },
    { id: "when-it-fails", label: "What Happens When DNS Fails?" },
    { id: "terms", label: "Common DNS Terms Explained" },
    { id: "public-dns", label: "Public DNS Services" },
    { id: "is-secure", label: "Is DNS Secure?" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
  ],
  faq: [
    {
      q: "What is DNS in simple words?",
      a: "DNS, or Domain Name System, is the service that turns friendly website names like clickworthy.com into the numeric IP addresses that computers actually use to connect.",
    },
    {
      q: "Where does DNS happen?",
      a: "DNS lookups happen automatically and invisibly. Your device asks a DNS resolver (usually run by your internet provider or a public service like Cloudflare) every time you visit a new site.",
    },
    {
      q: "Why is my internet slow when DNS is down?",
      a: "If DNS fails, your browser can't find the IP address behind a domain, so pages either load very slowly or don't load at all. Your connection is fine — your browser just doesn't know where to send the request.",
    },
    {
      q: "Can I change my DNS provider?",
      a: "Yes. You can switch to a faster or more private public DNS like 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google) in your device or router settings. Many people see a small speed improvement.",
    },
    {
      q: "Is DNS the same as a domain registrar?",
      a: "No. A registrar is where you buy a domain. DNS is the system that translates that domain into an IP. Most registrars include DNS hosting, but you can move DNS elsewhere if you want.",
    },
    {
      q: "What is DNS cache?",
      a: "Your device and your browser remember recent DNS lookups for a short time so they don't have to ask again on every visit. This cache makes browsing faster but can occasionally show outdated information.",
    },
  ],
  relatedSlugs: ["what-is-the-internet", "what-is-a-domain-name", "what-is-a-website"],
  content: () => (
    <>
      <section id="introduction">
        <p>
          Every time you open a website, a quiet conversation happens in the background.
          Your device asks: <em>"Where is clickworthy.com?"</em> and a system called DNS
          answers with a number. Without that answer, nothing on the web would load.
        </p>
        <p>
          This guide explains DNS in plain English: what it is, how it works step by step,
          and why it matters for speed, reliability and online safety.
        </p>
      </section>

      <section id="what-is-dns">
        <h2>What Is DNS?</h2>
        <p>
          DNS stands for <strong>Domain Name System</strong>. It is the internet's address
          book. Its only job is to translate human-friendly names like{" "}
          <strong>clickworthy.com</strong> into machine-friendly IP addresses like{" "}
          <code>142.250.190.46</code>.
        </p>
        <p>
          Without DNS, you would have to remember a long number for every website you ever
          wanted to visit. With DNS, you just type a name and the system figures out the
          rest.
        </p>
      </section>

      <section id="why-needed">
        <h2>Why DNS Is Needed</h2>
        <p>
          Computers talk to each other using IP addresses, not words. But humans are
          terrible at remembering numbers, especially the long ones used in modern IPv6.
        </p>
        <p>
          DNS bridges that gap. It lets us name our servers in a way that makes sense to
          people, while the machines keep using fast, precise numbers under the hood.
        </p>
      </section>

      <section id="dns-vs-ip">
        <h2>DNS vs IP Address</h2>
        <ul>
          <li>
            <strong>IP address</strong>: the real numeric location of a server, like a
            phone number.
          </li>
          <li>
            <strong>DNS</strong>: the lookup system that gives you the right IP for a given
            name, like a contacts app.
          </li>
        </ul>
        <p>
          For more on how IP addresses fit into the bigger picture, see{" "}
          <a href="/articles/what-is-the-internet">how the internet works</a>.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How DNS Works Step by Step</h2>
        <p>Here is what happens when you visit a brand new website:</p>
        <ol>
          <li>You type a domain into your browser.</li>
          <li>
            Your device checks its <strong>local cache</strong> for a recent answer. If
            found, done.
          </li>
          <li>
            If not, it asks a <strong>DNS resolver</strong> — usually run by your internet
            provider or a public service.
          </li>
          <li>
            The resolver asks the <strong>root servers</strong>: "Who handles .com domains?"
          </li>
          <li>
            It then asks the <strong>TLD servers</strong>: "Who handles clickworthy.com?"
          </li>
          <li>
            Finally it asks the domain's <strong>authoritative server</strong> for the IP
            address.
          </li>
          <li>The resolver caches the answer and sends it back to your browser.</li>
        </ol>
        <p>
          All of that usually takes a few dozen milliseconds. After the first visit, the
          answer is cached and the next lookup is almost instant.
        </p>
      </section>

      <section id="when-it-fails">
        <h2>What Happens When DNS Fails?</h2>
        <p>
          When DNS is broken, you'll see errors like "DNS_PROBE_FINISHED_NXDOMAIN" or "This
          site can't be reached". Your internet might still work for apps that already know
          their server's IP, but new websites won't load.
        </p>
        <p>Quick fixes:</p>
        <ul>
          <li>Restart your router (this clears its DNS cache).</li>
          <li>Try a different DNS provider like 1.1.1.1 or 8.8.8.8.</li>
          <li>Flush your computer's DNS cache.</li>
        </ul>
      </section>

      <section id="terms">
        <h2>Common DNS Terms Explained</h2>
        <ul>
          <li><strong>Resolver</strong> — the server that does the lookup work for your device.</li>
          <li><strong>Record</strong> — a single piece of info, like "this domain points to this IP".</li>
          <li><strong>A record</strong> — maps a domain to an IPv4 address.</li>
          <li><strong>AAAA record</strong> — maps a domain to an IPv6 address.</li>
          <li><strong>CNAME</strong> — an alias from one name to another.</li>
          <li><strong>MX record</strong> — points to the mail servers for a domain.</li>
          <li><strong>TTL</strong> — how long a record can be cached before it must be refreshed.</li>
        </ul>
      </section>

      <section id="public-dns">
        <h2>Public DNS Services</h2>
        <p>
          By default, your DNS resolver is provided by your internet company. But you can
          switch to a public one, which is sometimes faster and more private.
        </p>
        <ul>
          <li><strong>Cloudflare</strong>: 1.1.1.1 — fast, privacy-focused.</li>
          <li><strong>Google</strong>: 8.8.8.8 — reliable and global.</li>
          <li><strong>Quad9</strong>: 9.9.9.9 — blocks known malicious domains.</li>
        </ul>
        <p>You can change DNS in your operating system settings or in your router admin page.</p>
      </section>

      <section id="is-secure">
        <h2>Is DNS Secure?</h2>
        <p>
          Classic DNS sends questions and answers in plain text, which means someone on
          the same network can see which sites you look up. Two newer standards fix this:
        </p>
        <ul>
          <li><strong>DNS over HTTPS (DoH)</strong> — wraps DNS traffic inside an encrypted web request.</li>
          <li><strong>DNS over TLS (DoT)</strong> — encrypts DNS at the network level.</li>
        </ul>
        <p>
          Modern browsers and operating systems support these out of the box. Turning them
          on adds privacy without slowing you down.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          DNS is the quiet system that turns the names you type into the addresses
          computers understand. Every link you click, every email you send and every app
          you open relies on it.
        </p>
        <p>
          Now that you understand DNS, see how it fits into the bigger picture with our
          guides on <a href="/articles/what-is-a-domain-name">domain names</a> and{" "}
          <a href="/articles/what-is-the-internet">how the internet works</a>.
        </p>
      </section>
    </>
  ),
};
