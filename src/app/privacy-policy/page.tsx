import Link from "next/link";
import { Metadata } from "next";

import BrandLockup from "@/components/BrandLockup";
import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";

export const metadata: Metadata = {
  title: "Privacy Policy | HyperScalerOwl GreenCloud",
  description:
    "Understand how HyperScalerOwl collects, stores, and protects data across the GreenCloud platform for affiliates, customers, and partners.",
};

export default function PrivacyPolicyPage() {
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
        <section className={styles.sectionText}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroIntro}>
            HyperScalerOwl, Inc. (“we”, “us”, “our”) is committed to protecting the privacy of affiliates, customers, and partners who interact with
            the GreenCloud platform. This notice explains the information we collect, how it’s used, and the controls available to you.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Information we collect</h2>
          <p>We gather data in three ways:</p>
          <ul className={styles.detailList}>
            <li>
              <strong>Account information:</strong> When you register as an affiliate, customer, or partner we collect contact details, billing
              information, and role-specific metadata.
            </li>
            <li>
              <strong>Platform usage:</strong> Telemetry from workloads, affiliate hardware, and the GreenCloud marketplace is collected to deliver
              services, monitor performance, and fulfill compliance obligations.
            </li>
            <li>
              <strong>Communications:</strong> Emails, chats, and recorded support calls are stored to improve service quality and maintain security logs.
            </li>
          </ul>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>How we use information</h2>
          <ul className={styles.detailList}>
            <li>Deliver and improve GreenCloud services, including predictive routing and energy optimization.</li>
            <li>Provide customer support, affiliate onboarding, and fraud prevention.</li>
            <li>Comply with legal obligations, including tax, energy, and data protection regulations.</li>
            <li>Share aggregated, anonymized analytics with community stakeholders to improve impact reporting.</li>
          </ul>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Your rights</h2>
          <p>
            Depending on your jurisdiction, you may request access, correction, deletion, or portability of your personal data. You can also object to
            certain processing or withdraw consent. To exercise rights, contact <a href="mailto:privacy@hyperscalerowl.com">privacy@hyperscalerowl.com</a>.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Data retention and security</h2>
          <p>
            We retain data only as long as necessary to provide services and meet legal obligations. Security controls include encryption in transit and
            at rest, least-privilege access, hardware attestation for affiliate racks, and regular third-party audits.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>International transfers</h2>
          <p>
            GreenCloud operates in multiple jurisdictions. We rely on Standard Contractual Clauses, Data Processing Agreements, and region-specific
            compliance addenda to protect data when it moves across borders.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>Updates</h2>
          <p>
            We may update this policy to reflect product, legal, or regulatory changes. The “Last updated” date below will be revised and material
            changes will be communicated to registered users.
          </p>
          <p>Last updated: June 17, 2024</p>
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
