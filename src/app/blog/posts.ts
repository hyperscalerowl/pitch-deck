import communityPoweredGreencloud from "@/content/blog/community-powered-greencloud.json";
import edgeIntelligenceForCities from "@/content/blog/edge-intelligence-for-cities.json";
import sovereignAiCompliance from "@/content/blog/sovereign-ai-compliance.json";
import liquidInfrastructureMarkets from "@/content/blog/liquid-infrastructure-markets.json";
import energyMarketIntegration from "@/content/blog/energy-market-integration.json";
import resilientMediaDelivery from "@/content/blog/resilient-media-delivery.json";
import sustainableGpuCooperatives from "@/content/blog/sustainable-gpu-cooperatives.json";

export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogQuote = {
  text: string;
  attribution?: string;
};

export type BlogCta = {
  label: string;
  href: string;
};

export type BlogComment = {
  name: string;
  role: string;
  message: string;
  timestamp: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  image: BlogImage;
  intro: string;
  sections: BlogSection[];
  quote?: BlogQuote;
  cta?: BlogCta;
  comments: BlogComment[];
};

const rawPosts = [
  communityPoweredGreencloud,
  edgeIntelligenceForCities,
  sovereignAiCompliance,
  liquidInfrastructureMarkets,
  energyMarketIntegration,
  resilientMediaDelivery,
  sustainableGpuCooperatives,
] as BlogPost[];

export const posts: BlogPost[] = [...rawPosts].sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
