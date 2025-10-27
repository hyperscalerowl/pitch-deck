import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import styles from "../../pageShell.module.css";
import { footerLinks, navLinks } from "../../navigationLinks";
import { findPost } from "../posts";

const slug = "community-powered-greencloud";
const post = findPost(slug);

if (!post) {
  notFound();
}

export const metadata: Metadata = {
  title: `${post!.title} | HyperScalerOwl Blog`,
  description:
    "Dive into the strategy behind HyperScalerOwl's community-powered GreenCloud and how it is reshaping the economics of hyperscale infrastructure.",
};

const comments = [
  {
    name: "Lena Ortiz",
    role: "Affiliate host, Madrid",
    message:
      "The heat-recapture pilot you mentioned has been life-changing for our café. Our winter heating bill dropped 30% while we earn from compute workloads.",
    timestamp: "June 13, 2024",
  },
  {
    name: "Brian Chao",
    role: "CTO, HorizonLedger",
    message:
      "Switching our regulatory workloads to GreenCloud cut disaster-recovery costs in half. The compliance automation has been rock solid so far.",
    timestamp: "June 14, 2024",
  },
  {
    name: "Amrita Singh",
    role: "Energy analyst, FutureGrid Partners",
    message:
      "Appreciate the data on distributed microgrids. Investors are hungry for verifiable carbon impact like the telemetry GreenCloud exposes.",
    timestamp: "June 16, 2024",
  },
];

export default function BlogPostPage() {
  if (!post) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden>
            ⬢
          </span>
          <span>HyperScalerOwl</span>
        </div>
        <nav aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className={styles.navCta} href="/contact">
          Talk to us
        </Link>
      </header>

      <main className={styles.main}>
        <article className={styles.sectionText}>
          <Link href="/blog">← Back to all posts</Link>
          <header>
            <h1 className={styles.heroTitle}>{post.title}</h1>
            <ul className={styles.metaList}>
              <li>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}</li>
              <li>{post.readingTime}</li>
              <li>
                Tags: {post.tags.map((tag) => `#${tag}`).join("  ")}
              </li>
            </ul>
          </header>

          <p>
            HyperScalerOwl’s GreenCloud grew out of a simple observation: every city is packed with under-utilized space and energy that can
            be converted into resilient compute capacity. Centralized hyperscalers cannot keep up with the regulatory, sustainability, and
            latency demands of modern builders. Communities, however, can.
          </p>

          <h2 className={styles.sectionHeading}>Affiliates are the new availability zones</h2>
          <p>
            Instead of pouring billions into a single location, we deploy compact racks with our affiliate hosts. These spaces, from cafés to
            libraries, provide ambient cooling and access to local renewables. Each affiliate becomes an availability zone, stitched together by our
            orchestration mesh with 15x redundancy built in.
          </p>
          <ul className={styles.detailList}>
            <li>Hosts earn a median of $1.8K a month with six hours of onboarding.</li>
            <li>Local maintenance crews respond in minutes rather than hours.</li>
            <li>Energy telemetry routes workloads to the cleanest power source in real time.</li>
          </ul>

          <h2 className={styles.sectionHeading}>The economic flywheel favors communities</h2>
          <p>
            When capital flows to affiliates, the value stays local. We co-invest in efficiency upgrades, share energy savings, and enable hosts to
            expand with low-interest microloans. The result is a community flywheel that spins faster with every workload migrated to GreenCloud.
          </p>
          <p>
            Enterprises benefit, too. By tapping into a network of thousands of micro data centers, they secure premium reliability without the
            hyperscaler premium. Compliance templates for fintech, health, and media workloads are built into the platform, trimming audit cycles
            by 40% on average.
          </p>

          <h2 className={styles.sectionHeading}>Climate alignment is a default setting</h2>
          <p>
            GreenCloud surfaces verifiable carbon metrics for every workload. Our energy marketplace incentivizes affiliates to integrate heat
            recapture, rooftop solar, and battery storage. During recent grid stress events, workloads shifted seamlessly to nodes powered by
            renewables, avoiding 67% of emissions compared to legacy data centers.
          </p>

          <blockquote className={styles.card}>
            &ldquo;Distributed doesn’t just mean resilient; it means accountable. When your infrastructure lives in your community, you see the
            impact every day.&rdquo;
          </blockquote>

          <h2 className={styles.sectionHeading}>What’s next</h2>
          <p>
            We’re onboarding GPU clusters for AI training in university labs, expanding our fintech compliance pods across Europe, and piloting a
            grid services partnership in Brazil. If you’re ready to join the movement—whether as an affiliate, a customer, or an investor—our team
            is ready to collaborate.
          </p>

          <Link className={styles.navCta} href="/contact" style={{ width: "fit-content" }}>
            Partner with the team
          </Link>
        </article>

        <section className={styles.commentSection} aria-label="Comments">
          <h2 className={styles.sectionHeading}>Community reflections</h2>
          <p className={styles.heroIntro}>
            Real stories from hosts, customers, and partners reacting to the GreenCloud vision in their cities.
          </p>
          <div className={styles.commentList}>
            {comments.map((comment) => (
              <article key={comment.name} className={styles.comment}>
                <header>
                  <span className={styles.commentAuthor}>{comment.name}</span>
                  <span>{comment.timestamp}</span>
                </header>
                <p>{comment.role}</p>
                <p>{comment.message}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} HyperScalerOwl. Community-powered infrastructure for a resilient internet.</p>
          <ul className={styles.footerNav}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
