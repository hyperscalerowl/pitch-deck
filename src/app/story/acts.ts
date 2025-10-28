export type CinematicAct = {
  label: string;
  title: string;
  duration: string;
  scene: string;
  moments: string[];
};

export const cinematicActs: CinematicAct[] = [
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
