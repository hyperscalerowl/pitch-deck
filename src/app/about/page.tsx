import Link from "next/link";
import { Metadata } from "next";

import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";

export const metadata: Metadata = {
  title: "About HyperScalerOwl | GreenCloud",
  description:
    "Meet the team turning underutilized spaces into a community-powered hyperscaler delivering resilient, sustainable infrastructure.",
};

export default function AboutPage() {
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
        <section className={styles.sectionText}>
          <h1 className={styles.heroTitle}>We’re building the people-powered hyperscaler</h1>
          <p className={styles.heroIntro}>
            HyperScalerOwl’s GreenCloud is a coalition of engineers, energy strategists, and community builders transforming empty rooms into
            resilient infrastructure. We believe cloud growth should enrich the neighborhoods that power it.
          </p>
        </section>

        <section className={styles.cardGrid} aria-label="Team pillars">
          <article className={styles.card}>
            <h3>Operator DNA</h3>
            <p>
              Our founding team includes leaders from AWS, Google Cloud, and Stripe. We’ve launched edge regions, scaled developer platforms, and
              shipped compliance frameworks for Fortune 100 customers.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Community commitment</h3>
            <p>
              Affiliate success coaches support hosts in 89 countries. From energy audits to marketing kits, we equip entrepreneurs to grow a
              profitable, climate-positive business with GreenCloud.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Sustainability leadership</h3>
            <p>
              Our energy marketplace rewards affiliates for tapping renewables and recapturing heat. Carbon accounting is verified by third-party
              auditors and shared with customers in real time.
            </p>
          </article>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Investors and advisors</h2>
          <p>
            We’re backed by Greentech Ventures, Future Infrastructure Guild, and a council of energy and policy experts guiding our expansion into
            new markets. Strategic operators from the grid, telecom, and fintech worlds advise our GTM.
          </p>
          <p>
            Interested in contributing? Drop us a note—our door is open to builders, partners, and investors who believe the cloud can be more
            equitable.
          </p>
          <Link className={styles.navCta} href="/contact" style={{ width: "fit-content" }}>
            Connect with the founders
          </Link>
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
