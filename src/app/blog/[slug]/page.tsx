import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import siteConfig from "@/config/site.json";
import blogStrings from "@/locales/en/blog.json";

import styles from "../../pageShell.module.css";
import { footerLinks, navLinks } from "../../navigationLinks";
import { findPost, posts } from "../posts";

type PageParams = {
  slug: string;
};

interface PageProps {
  params: Promise<PageParams>;
}

type SiteConfig = {
  brand: {
    name: string;
    mark: string;
  };
  cta: {
    primary: string;
    defaultPost: string;
  };
  footer: {
    legal: string;
  };
};

type BlogStrings = {
  detail: {
    backLink: string;
    tagsLabel: string;
    commentSectionTitle: string;
    commentSectionIntro: string;
    defaultCtaLabel: string;
  };
};

const site = siteConfig as SiteConfig;
const strings = blogStrings as BlogStrings;

export function generateStaticParams(): PageParams[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | ${site.brand.name} Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  const legalText = site.footer.legal.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  const ctaLabel = post.cta?.label ?? site.cta.defaultPost ?? strings.detail.defaultCtaLabel;

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
        <article className={styles.sectionText}>
          <Link href="/blog">{strings.detail.backLink}</Link>
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
              <li>
                {strings.detail.tagsLabel}: {post.tags.map((tag) => `#${tag}`).join("  ")}
              </li>
            </ul>
          </header>

          <div className={styles.heroImageWrapper}>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
              className={styles.heroImage}
              priority
            />
          </div>

          <p>{post.intro}</p>

          {post.sections.map((section, index) => (
            <section key={`${section.heading ?? "section"}-${index}`}>
              {section.heading && (
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
              )}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.heading ?? "section"}-${index}-p-${paragraphIndex}`}>
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className={styles.detailList}>
                  {section.list.map((item, itemIndex) => (
                    <li key={`${section.heading ?? "section"}-${index}-li-${itemIndex}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {post.quote && (
            <blockquote className={styles.card}>
              &ldquo;{post.quote.text}&rdquo;
              {post.quote.attribution && (
                <cite style={{ display: "block", marginTop: "0.75rem" }}>
                  {post.quote.attribution}
                </cite>
              )}
            </blockquote>
          )}

          <Link className={styles.navCta} href={post.cta?.href ?? "/contact"} style={{ width: "fit-content" }}>
            {ctaLabel}
          </Link>
        </article>

        <section className={styles.commentSection} aria-label="Comments">
          <h2 className={styles.sectionHeading}>{strings.detail.commentSectionTitle}</h2>
          <p className={styles.heroIntro}>{strings.detail.commentSectionIntro}</p>
          <div className={styles.commentList}>
            {post.comments.map((comment) => (
              <article key={`${comment.name}-${comment.timestamp}`} className={styles.comment}>
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
