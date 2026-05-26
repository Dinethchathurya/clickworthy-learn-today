import type { Article } from "../articles";

export const whatIsWebHosting: Article = {
  slug: "what-is-web-hosting",
  title: "What Is Web Hosting? A Beginner-Friendly Explanation",
  category: "Tech Basics",
  excerpt:
    "Understand what web hosting is, why every website needs it, and the difference between shared hosting, VPS hosting, cloud hosting, and dedicated servers.",
  author: "ClickWorthy Editors",
  publishedDate: "2026-05-24",
  publishedLabel: "May 24, 2026",
  readingTime: "10 min read",
  metaTitle: "What Is Web Hosting? A Beginner-Friendly Explanation — ClickWorthy",
  metaDescription:
    "Web hosting explained simply. Learn how hosting works, plus the difference between shared, VPS, cloud and dedicated hosting and which is best for beginners.",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "what-is-hosting", label: "What Is Web Hosting?" },
    { id: "why-needed", label: "Why Websites Need Hosting" },
    { id: "hosting-vs-domain", label: "Hosting vs Domain Name" },
    { id: "behind-the-scenes", label: "How Hosting Works Behind the Scenes" },
    { id: "shared", label: "Shared Hosting Explained" },
    { id: "vps", label: "VPS Hosting Explained" },
    { id: "cloud", label: "Cloud Hosting Explained" },
    { id: "dedicated", label: "Dedicated Hosting Explained" },
    { id: "best-for-beginners", label: "Which Hosting Type Is Best for Beginners?" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
  ],
  faq: [
    {
      q: "What is web hosting in simple words?",
      a: "Web hosting is a service that stores your website's files on a server connected to the internet 24/7, so anyone in the world can open your site in a browser.",
    },
    {
      q: "Do I need hosting if I have a domain?",
      a: "Yes. A domain is just the address. Hosting is the actual building where your site's files live. Without hosting, your domain has nowhere to send visitors.",
    },
    {
      q: "How much does web hosting cost?",
      a: "Shared hosting starts around 2–5 dollars per month. VPS plans usually run 10–30 dollars. Cloud hosting is pay-as-you-go and can be cheap or huge depending on traffic. Dedicated servers start near 80–100 dollars per month.",
    },
    {
      q: "Can I host a website on my own computer?",
      a: "Technically yes, but it is a bad idea for a real site. Your computer would need to stay on 24/7, have a stable connection and a static IP, and you'd handle every security update yourself. A hosting company does all of that better and cheaper.",
    },
    {
      q: "What is the difference between hosting and a CDN?",
      a: "Hosting stores your site in one place. A CDN (Content Delivery Network) makes copies of your static files in many places around the world, so visitors get them faster from a server near them. They work together.",
    },
    {
      q: "Can I change hosting providers later?",
      a: "Yes. Websites can be moved between hosts at any time. Most modern providers offer free migration help. Your domain stays the same — you just point it to the new server.",
    },
  ],
  relatedSlugs: ["what-is-a-website", "what-is-a-domain-name", "what-is-the-internet"],
  content: () => (
    <>
      <section id="introduction">
        <p>
          Behind every website you visit, there is a computer somewhere, switched on day
          and night, ready to send pages to anyone who asks. That service — keeping a site
          available to the world — is called web hosting.
        </p>
        <p>
          This guide explains what hosting is, why you need it, and the four main types
          you'll see when shopping around. By the end you'll know exactly which one fits
          your project.
        </p>
      </section>

      <section id="what-is-hosting">
        <h2>What Is Web Hosting?</h2>
        <p>
          Web hosting is a service that stores your website's files on a special computer,
          called a server, and keeps it connected to the internet around the clock. When
          someone visits your site, the server sends them the pages.
        </p>
        <p>
          You can think of hosting as renting a shop in a busy street. The hosting company
          owns the building, handles the electricity and security, and you fill the shop
          with your products — your pages, images and content.
        </p>
      </section>

      <section id="why-needed">
        <h2>Why Websites Need Hosting</h2>
        <p>
          A website is made of files — HTML, CSS, JavaScript, images. Those files have to
          live somewhere that is always online so any visitor can reach them at any time.
          That somewhere is a hosting server.
        </p>
        <p>
          Without hosting, your <a href="/articles/what-is-a-domain-name">domain name</a>{" "}
          points nowhere. With hosting, your domain points to a server full of your content,
          and your site is alive.
        </p>
      </section>

      <section id="hosting-vs-domain">
        <h2>Hosting vs Domain Name</h2>
        <ul>
          <li>
            <strong>Domain name</strong>: the address visitors type — e.g.{" "}
            <strong>clickworthy.com</strong>.
          </li>
          <li>
            <strong>Hosting</strong>: the actual storage and computer power that serves the
            site.
          </li>
        </ul>
        <p>
          They are separate services. You can buy them from the same company for convenience
          or from different companies for flexibility. Either way, both are required.
        </p>
      </section>

      <section id="behind-the-scenes">
        <h2>How Hosting Works Behind the Scenes</h2>
        <ol>
          <li>You upload your site's files to your host's server.</li>
          <li>You point your domain at that server.</li>
          <li>A visitor types your domain into a browser.</li>
          <li>DNS finds the server's IP address.</li>
          <li>The server sends your files back to the browser, which renders the page.</li>
        </ol>
        <p>
          Curious about the full path the data travels? Read our overview of{" "}
          <a href="/articles/what-is-the-internet">how the internet works</a>.
        </p>
      </section>

      <section id="shared">
        <h2>Shared Hosting Explained</h2>
        <p>
          Shared hosting means many websites live on the same server and share its
          resources — CPU, memory, disk. It is the cheapest type because the cost is split
          across hundreds or thousands of sites.
        </p>
        <ul>
          <li><strong>Best for:</strong> small blogs, portfolios, brochure sites.</li>
          <li><strong>Pros:</strong> very cheap, simple, no technical setup.</li>
          <li><strong>Cons:</strong> slower under traffic, a noisy "neighbour" site can affect you.</li>
        </ul>
      </section>

      <section id="vps">
        <h2>VPS Hosting Explained</h2>
        <p>
          VPS stands for Virtual Private Server. One big physical server is split into
          several virtual ones, each with its own guaranteed resources. You get more power
          than shared hosting without paying for a whole machine.
        </p>
        <ul>
          <li><strong>Best for:</strong> growing blogs, small online shops, web apps with steady traffic.</li>
          <li><strong>Pros:</strong> consistent performance, more control, root access on most plans.</li>
          <li><strong>Cons:</strong> more setup, you usually manage updates yourself.</li>
        </ul>
      </section>

      <section id="cloud">
        <h2>Cloud Hosting Explained</h2>
        <p>
          Cloud hosting spreads your site across many connected servers. If one machine
          fails or traffic spikes, the cloud shifts the load automatically. You pay for
          what you use.
        </p>
        <ul>
          <li><strong>Best for:</strong> sites with unpredictable traffic, startups, modern web apps.</li>
          <li><strong>Pros:</strong> scales instantly, very reliable, pay-as-you-go.</li>
          <li><strong>Cons:</strong> bills can grow with traffic, more technical to configure.</li>
        </ul>
      </section>

      <section id="dedicated">
        <h2>Dedicated Hosting Explained</h2>
        <p>
          With dedicated hosting, you rent an entire physical server just for yourself. No
          neighbours, all resources, full control.
        </p>
        <ul>
          <li><strong>Best for:</strong> high-traffic businesses, large stores, demanding apps.</li>
          <li><strong>Pros:</strong> maximum performance, full control, strong security.</li>
          <li><strong>Cons:</strong> expensive, requires technical knowledge or a managed plan.</li>
        </ul>
      </section>

      <section id="best-for-beginners">
        <h2>Which Hosting Type Is Best for Beginners?</h2>
        <p>
          For most beginners, <strong>shared hosting</strong> is the right starting point.
          It is cheap, comes with one-click installers for tools like WordPress, and the
          support team handles the hard parts.
        </p>
        <p>
          Once your site grows past a few thousand visitors a month or starts feeling slow,
          a small <strong>VPS</strong> or a beginner-friendly <strong>cloud plan</strong>{" "}
          is the natural next step.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Web hosting is the engine room of every website. It stores your files, serves
          your visitors and keeps you online. The right plan depends on your traffic and
          your comfort with technical setup, but the basics are surprisingly affordable.
        </p>
        <p>
          To complete the picture, read about{" "}
          <a href="/articles/what-is-a-domain-name">domain names</a> and{" "}
          <a href="/articles/what-is-a-website">how a website fits together</a>.
        </p>
      </section>
    </>
  ),
};
