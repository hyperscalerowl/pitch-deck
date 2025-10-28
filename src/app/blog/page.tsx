import Link from "next/link";
import { Metadata } from "next";

import BrandLockup from "@/components/BrandLockup";
import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "GreenCloud Blog | HyperScalerOwl",
  description:
    "Stories and insights from the HyperScalerOwl team on distributed hyperscale, community-powered infrastructure, and sustainable compute.",
};

export default function BlogIndexPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <BrandLockup className={styles.brand} variant="light" tagline="GreenCloud" priority />
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
        <section>
          <h1 className={styles.heroTitle}>Field notes from the GreenCloud revolution</h1>
          <p className={styles.heroIntro}>
            Explore how community hosts, builders, and partners are reinventing cloud infrastructure with resilient, sustainable
            capacity that belongs to everyone.
          </p>
        </section>

        <section className={styles.cardGrid} aria-label="Blog posts">
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <header>
                <p className={styles.sectionHeading}>{post.title}</p>
                <ul className={styles.metaList}>
                  <li>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</li>
                  <li>{post.readingTime}</li>
                </ul>
              </header>
              <p>{post.excerpt}</p>
              <footer>
                <ul className={styles.metaList}>
                  {post.tags.map((tag) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              </footer>
              <Link href={`/blog/${post.slug}`} className={styles.navCta} style={{ display: "inline-block", marginTop: "1rem" }}>
                Read the story
              </Link>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <BrandLockup className={styles.footerBrand} variant="light" compact tagline="GreenCloud" />
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
