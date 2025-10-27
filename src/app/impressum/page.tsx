import Link from "next/link";
import { Metadata } from "next";

import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";

export const metadata: Metadata = {
  title: "Impressum | HyperScalerOwl GreenCloud",
  description: "Legal disclosures and responsible contacts for HyperScalerOwl, Inc. operating the GreenCloud platform.",
};

export default function ImpressumPage() {
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
          <h1 className={styles.heroTitle}>Impressum</h1>
          <p className={styles.heroIntro}>
            Angaben gemäß § 5 TMG (Germany) and applicable EU directives for platform operators.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Company</h2>
          <p>HyperScalerOwl, Inc.</p>
          <p>548 Market Street, Suite 72071</p>
          <p>San Francisco, CA 94104, USA</p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Represented by</h2>
          <p>Maya Chen (Chief Executive Officer)</p>
          <p>Alex Rivera (Chief Technology Officer)</p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Contact</h2>
          <p>Telephone: +1 (415) 555-0114</p>
          <p>
            Email: <a href="mailto:hello@hyperscalerowl.com">hello@hyperscalerowl.com</a>
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>VAT ID</h2>
          <p>VAT identification number according to §27 a Umsatzsteuergesetz: EU/DE332445890</p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Responsible for content</h2>
          <p>Maya Chen</p>
          <p>Address as above.</p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Dispute resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
            . We are not obligated and generally not willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
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
