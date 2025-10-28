import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import styles from "../../pageShell.module.css";
import { footerLinks, navLinks } from "../../navigationLinks";
import { findPost, posts } from "../posts";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = findPost(params.slug);

  if (!post) {
    return {
      title: "Post not found | HyperScalerOwl Blog",
      description: "The requested GreenCloud story could not be located.",
    };
  }

  return {
    title: `${post.title} | HyperScalerOwl Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = findPost(params.slug);

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
              <li>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </li>
              <li>{post.readingTime}</li>
              <li>Tags: {post.tags.map((tag) => `#${tag}`).join("  ")}</li>
            </ul>
          </header>

          <p>{post.intro}</p>

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className={styles.detailList}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {post.quote ? (
            <blockquote className={styles.card}>
              &ldquo;{post.quote.text}&rdquo;
              {post.quote.attribution ? (
                <footer style={{ marginTop: "0.75rem", fontWeight: 600 }}>
                  {post.quote.attribution}
                </footer>
              ) : null}
            </blockquote>
          ) : null}

          <Link className={styles.navCta} href={post.cta.href} style={{ width: "fit-content" }}>
            {post.cta.label}
          </Link>
        </article>

        <section className={styles.commentSection} aria-label="Comments">
          <h2 className={styles.sectionHeading}>Community reflections</h2>
          <p className={styles.heroIntro}>
            Real stories from hosts, customers, partners, and investors reacting to the GreenCloud vision in their cities.
          </p>
          <div className={styles.commentList}>
            {post.comments.map((comment) => (
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
          <p>
            © {new Date().getFullYear()} HyperScalerOwl. Community-powered infrastructure for a resilient internet.
          </p>
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

