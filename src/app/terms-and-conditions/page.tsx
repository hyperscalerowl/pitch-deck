import Link from "next/link";
import { Metadata } from "next";

import BrandLockup from "@/components/BrandLockup";
import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";

export const metadata: Metadata = {
  title: "Terms & Conditions | HyperScalerOwl GreenCloud",
  description:
    "Review the terms governing HyperScalerOwl’s GreenCloud services, affiliate participation, and community marketplace policies.",
};

export default function TermsPage() {
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
          <h1 className={styles.heroTitle}>Terms & Conditions</h1>
          <p className={styles.heroIntro}>
            These Terms & Conditions (“Terms”) outline the rules for using HyperScalerOwl’s GreenCloud platform. By accessing GreenCloud services you
            agree to the obligations below.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>1. Accounts and eligibility</h2>
          <p>
            You must provide accurate registration data and maintain the security of your credentials. Affiliates are responsible for ensuring their
            hosting environment meets safety and regulatory requirements in their jurisdiction.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>2. Service commitments</h2>
          <ul className={styles.detailList}>
            <li>GreenCloud targets 99.97% uptime with automatic routing away from degraded nodes.</li>
            <li>Maintenance windows are announced at least 48 hours in advance except in emergency situations.</li>
            <li>Support SLAs vary by subscription tier and are detailed in your order form.</li>
          </ul>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>3. Acceptable use</h2>
          <p>
            You may not use GreenCloud to violate laws, distribute malware, or interfere with the platform. Affiliates must safeguard physical access to
            racks and follow our hardware hardening checklist.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>4. Fees and billing</h2>
          <p>
            Fees are invoiced monthly unless otherwise stated. Late payments may incur a 1.5% monthly finance charge. Affiliates receive revenue share
            payouts according to the cadence in their participation agreement.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>5. Intellectual property</h2>
          <p>
            HyperScalerOwl retains ownership of all platform IP. Customers retain rights to their workloads and content. Feedback may be used to improve
            the service without further compensation.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>6. Termination</h2>
          <p>
            Either party may terminate for convenience with 30 days’ notice. We may suspend access immediately if Terms are breached or security risks
            are detected.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>7. Liability</h2>
          <p>
            Our liability is limited to the amount paid in the preceding 12 months. GreenCloud is provided “as is” except for explicit commitments in your
            service order or partner agreement.
          </p>
        </section>

        <section className={styles.sectionText}>
          <h2 className={styles.sectionHeading}>8. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, USA. Disputes will be resolved in the courts located in San Francisco County,
            California.
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
