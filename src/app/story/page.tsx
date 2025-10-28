import Link from "next/link";
import { Metadata } from "next";

import homeStyles from "../page.module.css";
import shellStyles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";
import { cinematicActs } from "./acts";
import styles from "./page.module.css";

const storyVideoUrl = process.env.NEXT_PUBLIC_STORY_VIDEO_URL;

export const metadata: Metadata = {
  title: "GreenCloud Story | HyperScalerOwl",
  description:
    "Dive into the cinematic pitch for HyperScalerOwl’s GreenCloud—from the core problem to the call for a community-powered cloud.",
};

export default function StoryPage() {
  return (
    <div className={shellStyles.wrapper}>
      <header className={shellStyles.header}>
        <div className={shellStyles.brand}>
          <span className={shellStyles.brandMark} aria-hidden>
            ⬢
          </span>
          <span>HyperScalerOwl</span>
        </div>
        <nav aria-label="Primary">
          <ul className={shellStyles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className={shellStyles.navCta} href="/contact">
          Talk to us
        </Link>
      </header>

      <main className={shellStyles.main}>
        <section className={shellStyles.sectionText}>
          <h1 className={shellStyles.heroTitle}>Experience the GreenCloud story</h1>
          <p className={shellStyles.heroIntro}>
            The GreenCloud cinematic pitch pairs emotional storytelling with due diligence depth. Explore each act, preview the
            visuals, and share the narrative with stakeholders who want to understand how a people-powered hyperscaler wins.
          </p>
        </section>

        <section className={styles.videoSection} aria-label="Cinematic pitch video">
          {storyVideoUrl ? (
            <div className={styles.videoWrapper}>
              <iframe
                src={storyVideoUrl}
                title="GreenCloud cinematic pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <p className={styles.videoPlaceholder}>
              Set the NEXT_PUBLIC_STORY_VIDEO_URL environment variable in your GitHub Pages workflow to embed the cinematic
              pitch alongside the act breakdown.
            </p>
          )}
        </section>

        <section>
          <h2 className={shellStyles.sectionHeading}>Act-by-act breakdown</h2>
          <p className={styles.sectionIntro}>
            Each chapter builds investor conviction—from the fragility of centralized clouds to the traction, technology, and
            community that make GreenCloud inevitable.
          </p>
          <div className={homeStyles.storyboardGrid}>
            {cinematicActs.map((act) => (
              <article key={act.title} className={homeStyles.actCard}>
                <header>
                  <span>{act.label}</span>
                  <h3>{act.title}</h3>
                  <p>{act.duration}</p>
                </header>
                <p className={homeStyles.actScene}>{act.scene}</p>
                <ul className={`${homeStyles.actMoments} ${styles.actMoments}`}>
                  {act.moments.map((moment) => (
                    <li key={moment}>{moment}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.callout}>
            <h2 className={shellStyles.sectionHeading}>Share the revolution</h2>
            <p>
              Include the video link in your GitHub Actions deployment so every visitor can experience the same cinematic pitch
              investors receive in the room.
            </p>
            <p>
              Need a bespoke walkthrough or want to tailor the storyboard for your region? We’re happy to collaborate.
            </p>
            <Link className={shellStyles.navCta} href="/contact" style={{ width: "fit-content" }}>
              Schedule a briefing
            </Link>
          </div>
        </section>
      </main>

      <footer className={shellStyles.footer}>
        <div className={shellStyles.footerInner}>
          <p>© {new Date().getFullYear()} HyperScalerOwl. Community-powered infrastructure for a resilient internet.</p>
          <ul className={shellStyles.footerNav}>
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
