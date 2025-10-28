"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import BrandLockup from "@/components/BrandLockup";
import styles from "../pageShell.module.css";
import { footerLinks, navLinks } from "../navigationLinks";

const CONTACT_EMAIL = "hello@hyperscalerowl.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("Partnership inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `${topic} – ${name || "New GreenCloud inquiry"}`;
    const bodyLines = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      "", 
      "Message:",
      message || "(No message provided)",
    ];
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

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
          <h1 className={styles.heroTitle}>Let’s collaborate on the people’s cloud</h1>
          <p className={styles.heroIntro}>
            Tell us a bit about your goals and we’ll connect you with the right GreenCloud specialist—whether you’re exploring an affiliate rack,
            migrating workloads, or investing in community infrastructure.
          </p>
        </section>

        <section>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">
              Full name
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ada Lovelace"
              />
            </label>
            <label htmlFor="email">
              Work email
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                required
              />
            </label>
            <label htmlFor="company">
              Organization
              <input
                id="company"
                name="company"
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="GreenGrid Ventures"
              />
            </label>
            <label htmlFor="topic">
              Topic
              <select id="topic" name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
                <option value="Partnership inquiry">Partnership inquiry</option>
                <option value="Affiliate onboarding">Affiliate onboarding</option>
                <option value="Platform migration">Platform migration</option>
                <option value="Media request">Media request</option>
                <option value="Investment conversation">Investment conversation</option>
              </select>
            </label>
            <label htmlFor="message">
              How can we help?
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Share any context, timelines, or goals."
                required
              />
            </label>
            <button type="submit" className={styles.submitButton}>
              Open draft email
            </button>
          </form>
          <p className={styles.heroIntro} style={{ marginTop: "1.5rem" }}>
            Clicking “Open draft email” launches your email client with the details you’ve provided. Prefer to write directly? Reach us at
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ marginLeft: "0.4rem" }}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
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
