import type { Article } from "../articles";

export const whatIsAWebsite: Article = {
  slug: "what-is-a-website",
  title: "What Is a Website? A Simple Beginner Guide",
  category: "Tech Basics",
  excerpt:
    "Learn what a website is, how web pages work, and how domains, hosting, browsers, and servers come together to show websites online.",
  author: "ClickWorthy Editors",
  publishedDate: "2026-05-22",
  publishedLabel: "May 22, 2026",
  readingTime: "9 min read",
  metaTitle: "What Is a Website? A Simple Beginner Guide — ClickWorthy",
  metaDescription:
    "What is a website? A plain-English guide for beginners covering web pages, domains, hosting, browsers, servers, and how it all fits together.",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "what-is-a-website", label: "What Is a Website?" },
    { id: "website-vs-page", label: "Website vs Web Page" },
    { id: "how-websites-work", label: "How Websites Work" },
    { id: "domain-name", label: "What Is a Domain Name?" },
    { id: "web-hosting", label: "What Is Web Hosting?" },
    { id: "browser", label: "What Is a Browser?" },
    { id: "static-dynamic", label: "Static vs Dynamic Websites" },
    { id: "examples", label: "Examples of Different Types of Websites" },
    { id: "why-matters", label: "Why Websites Matter Today" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
  ],
  faq: [
    {
      q: "What is a website in simple words?",
      a: "A website is a collection of related web pages stored on a server and accessed through a web address. When you type the address into a browser, the browser downloads those pages and shows them on your screen.",
    },
    {
      q: "What is the difference between a website and a web page?",
      a: "A web page is a single document — like one article or one product listing. A website is the full collection of pages that share the same domain name, such as the homepage, about page, contact page and articles all living under one site.",
    },
    {
      q: "Do I need to know coding to have a website?",
      a: "No. Tools like Wix, Squarespace, WordPress and Shopify let anyone build a real website without writing code. Coding gives you more control, but it is not required to publish a professional-looking site today.",
    },
    {
      q: "What is the difference between a website and an app?",
      a: "A website runs inside a browser and works on any device with internet access. An app is installed on a phone or computer. Many companies offer both, and a modern website can feel almost identical to an app.",
    },
    {
      q: "How much does a basic website cost?",
      a: "A simple personal site can cost around 10–20 dollars per year for a domain plus a few dollars a month for hosting. Larger business sites cost more because of design, content and custom features, but the basics are very affordable.",
    },
    {
      q: "Can a website work without the internet?",
      a: "Visitors need the internet to load a website from its server. However, modern web apps can cache pages so they keep working offline once loaded, which is how many news and email sites still respond when your connection drops.",
    },
  ],
  relatedSlugs: ["what-is-the-internet", "what-is-a-domain-name", "what-is-web-hosting", "what-is-dns"],
  content: () => (
    <>
      <section id="introduction">
        <p>
          You visit websites every day — to read the news, watch videos, shop, or check the
          weather. But what actually <em>is</em> a website? Where does it live, and how
          does it appear on your screen the moment you type an address?
        </p>
        <p>
          This guide explains everything in plain English. By the end you will understand
          what a website really is, how domains and hosting work, and why some sites feel
          fast and modern while others feel slow and old.
        </p>
      </section>

      <section id="what-is-a-website">
        <h2>What Is a Website?</h2>
        <p>
          A website is a collection of related pages that share the same web address. Those
          pages are files (text, images, code) stored on a special computer called a server.
          When you visit the site, your browser asks the server for those files and turns
          them into the page you see.
        </p>
        <p>
          Think of a website like a small shop. The shop has an address (the domain), a
          building (the hosting), products inside (the pages and content), and a door
          (your browser) you use to walk in.
        </p>
      </section>

      <section id="website-vs-page">
        <h2>Website vs Web Page</h2>
        <p>
          People often mix these two words up, but they are different.
        </p>
        <ul>
          <li>
            <strong>A web page</strong> is a single document — one article, one product, one
            contact form.
          </li>
          <li>
            <strong>A website</strong> is the whole collection of pages that live under one
            domain name.
          </li>
        </ul>
        <p>
          For example, a blog homepage, its about page and every article on it are all web
          pages. Together, under the same domain, they form one website.
        </p>
      </section>

      <section id="how-websites-work">
        <h2>How Websites Work</h2>
        <p>Here is what happens when you open a website:</p>
        <ol>
          <li>You type a web address (or click a link).</li>
          <li>Your browser looks up the address using DNS to find the right server.</li>
          <li>It sends a request to that server asking for the page.</li>
          <li>The server replies with the files — HTML, CSS, images, scripts.</li>
          <li>Your browser puts everything together and shows the page on your screen.</li>
        </ol>
        <p>
          For a deeper look at how that journey works across the global network, see our
          guide to <a href="/articles/what-is-the-internet">how the internet works</a>.
        </p>
      </section>

      <section id="domain-name">
        <h2>What Is a Domain Name?</h2>
        <p>
          A domain name is the friendly address you type into a browser, like{" "}
          <strong>clickworthy.com</strong>. It is what people remember and share.
        </p>
        <p>
          Behind the scenes, the domain points to an IP address — the actual numeric
          location of the server. Domain names exist because numbers are hard to remember,
          while words and brands are easy.
        </p>
        <p>
          You can dive deeper in our beginner guide to{" "}
          <a href="/articles/what-is-a-domain-name">what a domain name is and how it works</a>.
        </p>
      </section>

      <section id="web-hosting">
        <h2>What Is Web Hosting?</h2>
        <p>
          Web hosting is the service that stores your website's files on a server and keeps
          them online 24 hours a day. Without hosting, there is nothing for your domain to
          point to.
        </p>
        <p>
          If the domain is your shop's address, hosting is the actual building. Hosting
          companies rent you space on their servers and make sure the lights stay on.
        </p>
        <p>
          Read more in our guide to{" "}
          <a href="/articles/what-is-web-hosting">web hosting for beginners</a>.
        </p>
      </section>

      <section id="browser">
        <h2>What Is a Browser?</h2>
        <p>
          A browser is the app you use to open websites — Chrome, Safari, Firefox, Edge or
          Brave. It does three big jobs:
        </p>
        <ol>
          <li>Asks the server for a page.</li>
          <li>Reads the page's code (HTML, CSS and JavaScript).</li>
          <li>Draws the page on your screen and reacts to clicks and scrolls.</li>
        </ol>
        <p>
          Two people can visit the same site at the same time and see the same page, because
          each browser rebuilds it from the same recipe.
        </p>
      </section>

      <section id="static-dynamic">
        <h2>Static vs Dynamic Websites</h2>
        <p>Most websites fall into one of two camps.</p>
        <ul>
          <li>
            <strong>Static websites</strong> show the same content to every visitor. They
            are fast, cheap and great for portfolios, brochures and simple blogs.
          </li>
          <li>
            <strong>Dynamic websites</strong> change based on the visitor or the moment —
            social feeds, online shops, dashboards. They use databases and code that runs
            on the server.
          </li>
        </ul>
        <p>
          Many modern sites mix the two: a static, super-fast frontend with a dynamic
          backend for accounts, comments and checkout.
        </p>
      </section>

      <section id="examples">
        <h2>Examples of Different Types of Websites</h2>
        <ul>
          <li><strong>Personal blog</strong> — articles and opinions, often static.</li>
          <li><strong>News site</strong> — many writers, frequent updates, dynamic.</li>
          <li><strong>E-commerce store</strong> — product listings, cart, checkout.</li>
          <li><strong>Portfolio</strong> — showcase of work for a designer or developer.</li>
          <li><strong>Web app</strong> — software you use in your browser, like Gmail or Notion.</li>
          <li><strong>Business website</strong> — services, pricing and contact info.</li>
        </ul>
        <p>
          Every one of them follows the same basic rule: files on a server, delivered to a
          browser through a domain.
        </p>
      </section>

      <section id="why-matters">
        <h2>Why Websites Matter Today</h2>
        <p>
          A website is often the first impression of a person, brand or business. It works
          24 hours a day, anywhere in the world, and you control it. Unlike a social media
          profile, your website is not at the mercy of an algorithm or a platform change.
        </p>
        <p>
          For creators, a website builds an audience you actually own. For businesses, it
          builds trust before anyone speaks to a salesperson. For learners, it is a place to
          share what you know and grow with feedback.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          A website is just a collection of pages, sitting on a server, reached through a
          domain, and shown by a browser. Once you understand those four pieces — pages,
          server, domain, browser — the rest of the web makes a lot more sense.
        </p>
        <p>
          From here, keep going: learn more about{" "}
          <a href="/articles/what-is-a-domain-name">domain names</a>,{" "}
          <a href="/articles/what-is-web-hosting">web hosting</a>, and{" "}
          <a href="/articles/what-is-dns">DNS</a>. Each one is a small piece of the puzzle
          that powers everything you do online.
        </p>
      </section>
    </>
  ),
};
