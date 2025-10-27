"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { footerLinks } from "./navigationLinks";

type PersonaKey = "affiliates" | "customers" | "team";

type PersonaContent = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
};

const personas: Record<PersonaKey, PersonaContent> = {
  affiliates: {
    title: "Affiliates",
    subtitle: "People-powered infrastructure",
    description:
      "Entrepreneurs, shop owners, and creators convert unused rooms into profitable micro data centers with plug-and-play racks, guaranteed demand, and full transparency.",
    highlights: [
      "Average monthly earnings of $1.8K with only 6 hours of onboarding",
      "Energy optimization insights reduce utility overhead by 22%",
      "Global community of 2,847 hosts across 89 countries",
    ],
    metrics: [
      { label: "Avg. ROI", value: "312%" },
      { label: "Setup time", value: "< 1 day" },
      { label: "Retention", value: "94%" },
    ],
  },
  customers: {
    title: "Cloud Users",
    subtitle: "High-trust compute for builders",
    description:
      "Founders and CTOs launch resilient workloads—from e-commerce storefronts to regulated fintech apps—on top of GreenCloud’s distributed managed services stack.",
    highlights: [
      "Up to 67% lower total cost of ownership than hyperscalers",
      "15+ redundant locations per workload with automatic failover",
      "Compliance guardrails for SOC 2, GDPR, and HIPAA-ready workloads",
    ],
    metrics: [
      { label: "Uptime", value: "99.97%" },
      { label: "Response", value: "40ms avg" },
      { label: "Savings", value: "-58%" },
    ],
  },
  team: {
    title: "Team & Partners",
    subtitle: "Operators with hyperscale DNA",
    description:
      "Led by Maya (ex-AWS) and Alex (ex-Google Cloud), the 47-person team spans distributed systems, energy markets, and community success—amplified by sustainability-focused investors and advisors.",
    highlights: [
      "Core engineering from Amazon, Google, Stripe, and DigitalOcean",
      "Affiliate success collective supporting 150 new hosts monthly",
      "Backed by Greentech Ventures and Future Infrastructure Guild",
    ],
    metrics: [
      { label: "Team size", value: "47" },
      { label: "Cities launched", value: "89" },
      { label: "R&D reinvestment", value: "20%" },
    ],
  },
};

const businessModel = [
  {
    title: "Managed Services",
    description:
      "Container orchestration, databases, storage, observability, and compliance automation delivered as a fully managed platform with 35% blended margins.",
  },
  {
    title: "Affiliate Revenue Share",
    description:
      "Hosts earn 60% of workload spend while HyperScalerOwl manages routing, energy insights, and proactive maintenance scheduling.",
  },
  {
    title: "Premium Reliability",
    description:
      "Dedicated SLAs, hybrid-cloud failover, and private mesh networking for enterprises unlocking higher ARPU without expanding footprint costs.",
  },
];

const goToMarket = [
  {
    title: "Community Flywheel",
    body: "Affiliate referrals, local sustainability partnerships, and transparent dashboards make infrastructure participation aspirational in every city we launch.",
  },
  {
    title: "Builder-first Onboarding",
    body: "Migration blueprints, price-comparison tools, and code samples accelerate adoption for startups leaving hyperscalers without downtime.",
  },
  {
    title: "Enterprise Beachheads",
    body: "Vertical pods for fintech, media, and AI workloads pair compliance with edge performance to win lighthouse accounts.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Prototype to Proof",
    description:
      "50 affiliates across 12 cities, 200 beta customers, and a tested replication protocol delivering seamless failover across neighborhoods.",
  },
  {
    year: "2023",
    title: "Community Scale",
    description:
      "Expanded to 1,100 affiliates, launched the predictive energy marketplace, and hit $1.2M MRR with positive unit economics.",
  },
  {
    year: "2024",
    title: "Global Network",
    description:
      "2,847 affiliates powering 12,000 businesses, 67% lower carbon output, and $4.2M MRR reinvested into product velocity and compliance.",
  },
  {
    year: "2025",
    title: "Edge Intelligence",
    description:
      "Deploying AI/ML GPU clusters, realtime gaming edge, and scientific compute workloads while preparing for Series B scale.",
  },
];

const cinematicActs = [
  {
    label: "Opening",
    title: "The Problem",
    duration: "0:00 – 2:00",
    scene:
      "Midnight data centers growl beneath a narrator’s warning: the centralized cloud is fragile, extractive, and devouring energy.",
    moments: [
      "Statistics on outages and energy usage pulse on-screen",
      "Entrepreneurs and business owners react to downtime news clips",
      "A single question lingers: is there another way?",
    ],
  },
  {
    label: "Act 1",
    title: "Enter HyperScalerOwl",
    duration: "2:00 – 4:30",
    scene:
      "Sunrise hits the studio as Maya sketches GreenCloud on a whiteboard and walks audiences through neighborhoods filled with potential affiliates.",
    moments: [
      "Maya introduces the distributed hyperscaler concept",
      "Community footage shows unused rooms ready for micro data centers",
      "The first tagline appears: ‘The GreenCloud – The Distributed Hyperscaler’",
    ],
  },
  {
    label: "Act 2",
    title: "The Three Pillars",
    duration: "4:30 – 12:00",
    scene:
      "James, Sarah, and Marcus step into the spotlight to prove GreenCloud works for affiliates, SMBs, and enterprises alike.",
    moments: [
      "Affiliate dashboards reveal transparent earnings",
      "Cloud users celebrate dramatic cost savings and uptime",
      "Global map lights up as new locations join the network",
    ],
  },
  {
    label: "Act 3",
    title: "Technology Deep Dive",
    duration: "12:00 – 15:00",
    scene:
      "Alex, the CTO, narrates a data flow animation showcasing replication, failover, and encrypted shards that make the distributed mesh resilient.",
    moments: [
      "Step-by-step rendering of asset replication and routing",
      "Compliance overlays for fintech workloads",
      "Security cutaways emphasize distributed key management",
    ],
  },
  {
    label: "Act 4 & 5",
    title: "Future Vision & Call to Action",
    duration: "15:00 – 20:00",
    scene:
      "Maya surveys a rooftop skyline, projecting 200,000 affiliates and new AI, edge, and research offerings before the mic-drop invitation to join the movement.",
    moments: [
      "Animated globe shows exponential node growth",
      "Product roadmap unveils GPUs, gaming, and scientific compute",
      "Final montage of affiliates, users, and team extending the call to action",
    ],
  },
];

const executionPillars = [
  {
    label: "Sustainability",
    metric: "67%",
    text: "Lower carbon footprint than hyperscalers through ambient cooling and micro-grid incentives.",
  },
  {
    label: "Resilience",
    metric: "15x",
    text: "Redundant nodes per workload with autonomous routing and distributed key management.",
  },
  {
    label: "Community",
    metric: "$18M",
    text: "Paid to affiliates to date, financing education, small-business expansion, and financial independence.",
  },
];

const viabilityChecks = [
  "Positive contribution margin per workload from month one",
  "Automated compliance posture for regulated industries",
  "Capital efficient growth—no billion-dollar data centers required",
  "Network effects defensibility through host and customer lock-in",
];

export default function Home() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("affiliates");
  const persona = personas[activePersona];

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>
      <header className={styles.hero} id="hero">
        <div className={styles.navBar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden>⬢</span>
            <span>
              HyperScalerOwl
              <small>GreenCloud</small>
            </span>
          </div>
          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a href="#who">Who</a>
              </li>
              <li>
                <a href="#what">What</a>
              </li>
              <li>
                <a href="#how">How</a>
              </li>
              <li>
                <a href="#narrative">Narrative</a>
              </li>
              <li>
                <a href="#story">Story</a>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link className={styles.navCta} href="/contact">
            Join the Revolution
          </Link>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <p className={styles.tagline}>The people-powered hyperscaler</p>
            <h1>
              Cloud infrastructure reimagined as a <span>global cooperative</span>
            </h1>
            <p>
              HyperScalerOwl’s GreenCloud turns underused square footage into a
              climate-positive compute fabric. Affiliates earn, builders ship,
              and the internet regains its resilience.
            </p>
            <div className={styles.heroActions}>
              <a href="#who" className={styles.primaryCta}>
                Explore the Network
              </a>
              <Link href="/contact" className={styles.secondaryCta}>
                Become an Affiliate
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.metricGrid}>
              {[
                { label: "Active affiliates", value: "2,847" },
                { label: "Monthly revenue", value: "$4.2M" },
                { label: "Countries online", value: "89" },
                { label: "Carbon reduction", value: "-67%" },
              ].map((metric) => (
                <article key={metric.label} className={styles.metricCard}>
                  <span>{metric.value}</span>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
            <div className={styles.heroNote}>
              <strong>“We’re building the people’s cloud.”</strong>
              <p>
                Maya, Founder & CEO, on stage at the GreenCloud Revolution
                premiere.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.content} id="main">
        <section id="who" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Who we serve</span>
            <h2>Three communities, one flywheel</h2>
            <p>
              Investors, partners, and future teammates can explore how each
              stakeholder prospers inside the distributed hyperscaler model.
            </p>
          </div>
          <div className={styles.personaToggle} role="tablist" aria-label="Stakeholder profiles">
            {(Object.keys(personas) as PersonaKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                type="button"
                onClick={() => setActivePersona(key)}
                className={
                  key === activePersona ? styles.personaButtonActive : styles.personaButton
                }
                aria-selected={key === activePersona}
              >
                <span>{personas[key].title}</span>
                <small>{personas[key].subtitle}</small>
              </button>
            ))}
          </div>
          <article className={styles.personaCard} role="tabpanel">
            <header>
              <h3>{persona.title}</h3>
              <p>{persona.description}</p>
            </header>
            <ul className={styles.personaHighlights}>
              {persona.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.personaMetrics}>
              {persona.metrics.map((item) => (
                <div key={item.label}>
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="what" className={styles.section}>
          <div className={styles.gridSection}>
            <div className={styles.sectionHeading}>
              <span>The mission</span>
              <h2>What makes GreenCloud inevitable</h2>
              <p>
                Traditional hyperscalers are centralized, capital-intensive, and
                brittle. We unlock distributed capacity with economic equity and
                radical transparency.
              </p>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.callout}>
                <h3>Problem</h3>
                <p>
                  Energy-hungry mega data centers create single points of
                  failure, skyrocketing costs, and leave local communities
                  uncompensated.
                </p>
              </div>
              <div className={styles.callout}>
                <h3>Solution</h3>
                <p>
                  A globally distributed mesh of micro data centers orchestrated
                  by HyperScalerOwl software, delivering enterprise-grade
                  services with 67% less carbon.
                </p>
              </div>
              <div className={styles.callout}>
                <h3>Mission</h3>
                <p>
                  Democratize cloud infrastructure so profits, power, and compute
                  are shared among the people who create them.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.gridSection}>
            <div className={styles.sectionHeading}>
              <span>Business model</span>
              <h2>Clear pathways to durable revenue</h2>
              <p>
                Diversified streams ensure predictable cash flow while rewarding
                every affiliate in the network.
              </p>
            </div>
            <div className={styles.sectionBody}>
              {businessModel.map((model) => (
                <article key={model.title} className={styles.businessCard}>
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.gridSection}>
            <div className={styles.sectionHeading}>
              <span>Go-to-market</span>
              <h2>How we scale responsibly</h2>
              <p>
                From grassroots ambassadors to enterprise lighthouse accounts, we
                orchestrate a flywheel that compounds supply and demand.
              </p>
            </div>
            <div className={styles.sectionBody}>
              {goToMarket.map((item) => (
                <article key={item.title} className={styles.gtmCard}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Execution</span>
            <h2>The operating system for distributed hyperscale</h2>
            <p>
              Funding accelerates R&D, affiliate experience, and compliance so
              the network compounds faster than centralized incumbents can react.
            </p>
          </div>
          <div className={styles.executionGrid}>
            {executionPillars.map((pillar) => (
              <article key={pillar.label} className={styles.executionCard}>
                <span>{pillar.metric}</span>
                <h3>{pillar.label}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.viabilityPanel}>
            <h3>Viability Checklist</h3>
            <ul>
              {viabilityChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="narrative" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Marketing narrative</span>
            <h2>Storyboard the GreenCloud Revolution</h2>
            <p>
              Our 20-minute cinematic pitch doubles as a due diligence tour—each act aligns to investor questions about the
              problem, the solution, and how we execute at scale.
            </p>
          </div>
          <div className={styles.storyboardGrid}>
            {cinematicActs.map((act) => (
              <article key={act.title} className={styles.actCard}>
                <header>
                  <span>{act.label}</span>
                  <h3>{act.title}</h3>
                  <p>{act.duration}</p>
                </header>
                <p className={styles.actScene}>{act.scene}</p>
                <ul className={styles.actMoments}>
                  {act.moments.map((moment) => (
                    <li key={moment}>{moment}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Vision & momentum</span>
            <h2>The GreenCloud Revolution in motion</h2>
            <p>
              Inspired by the cinematic story, this timeline tracks real product
              execution, customer value, and community impact.
            </p>
          </div>
          <div className={styles.timeline}>
            {milestones.map((milestone) => (
              <article key={milestone.year} className={styles.timelineItem}>
                <header>
                  <span>{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                </header>
                <p>{milestone.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerContent}>
          <h2>Join the people powering the future cloud</h2>
            <p>
              Whether you’re evaluating an investment, a partnership, or your next
              role, let’s build the distributed hyperscaler that communities
              deserve.
            </p>
          <div className={styles.footerActions}>
            <a href="mailto:hello@hyperscalerowl.com" className={styles.primaryCta}>
              hello@hyperscalerowl.com
            </a>
            <a
              href="https://greencloud.hyperscalerowl.com/story"
              className={styles.secondaryCta}
              target="_blank"
              rel="noreferrer"
            >
              Download the full deck
            </a>
          </div>
        </div>
        <div className={styles.footerMeta}>
          <p>© {new Date().getFullYear()} HyperScalerOwl. Built for investors, partners, and future teammates.</p>
          <p className={styles.footerNote}>
            Carbon conscious, community owned, globally resilient.
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
