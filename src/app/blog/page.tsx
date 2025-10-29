import Link from "next/link";
import { Metadata } from "next";

import siteConfig from "@/config/site.json";
import blogStrings from "@/locales/en/blog.json";

import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";
import { posts } from "./posts";

type SiteConfig = {
  brand: {
    name: string;
    mark: string;
  };
  cta: {
    primary: string;
  };
  footer: {
    legal: string;
  };
};

type BlogStrings = {
  metadata: {
    title: string;
    description: string;
  };
  index: {
    heroTitle: string;
    heroIntro: string;
    readStoryCta: string;
  };
  detail: {
    commentSectionIntro: string;
  };
};

const site = siteConfig as SiteConfig;
const strings = blogStrings as BlogStrings;

export const metadata: Metadata = {
  title: strings.metadata.title,
  description: strings.metadata.description,
};

export default function BlogIndexPage() {
  const legalText = site.footer.legal.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden>
            {site.brand.mark}
          </span>
          <span>{site.brand.name}</span>
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
          {site.cta.primary}
        </Link>
      </header>

      <main className={styles.main}>
        <section>
          <h1 className={styles.heroTitle}>{strings.index.heroTitle}</h1>
          <p className={styles.heroIntro}>{strings.index.heroIntro}</p>
        </section>

        <section className={styles.cardGrid} aria-label="Blog posts">
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <img
                src={post.image.src}
                alt={post.image.alt}
                className={styles.cardImage}
              />
              <header>
                <p className={styles.sectionHeading}>{post.title}</p>
                <ul className={styles.metaList}>
                  <li>
                    {new Date(post.publishedAt).toLocaleDateString(
                      undefined,
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </li>
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
              <Link
                href={`/blog/${post.slug}`}
                className={styles.navCta}
                style={{ display: "inline-block", marginTop: "1rem" }}
              >
                {strings.index.readStoryCta}
              </Link>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>{legalText}</p>
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
