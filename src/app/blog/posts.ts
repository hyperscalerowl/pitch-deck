import investorDueDiligence from "@/data/blog/investor-due-diligence-blueprint.json";
import sustainableCapacity from "@/data/blog/sustainable-capacity-marketplace.json";
import affiliateSuccess from "@/data/blog/affiliate-success-playbook.json";
import resilientEdge from "@/data/blog/resilient-edge-architecture.json";
import communityPowered from "@/data/blog/community-powered-greencloud.json";

export type BlogComment = {
  name: string;
  role: string;
  message: string;
  timestamp: string;
};

export type BlogSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  description: string;
  intro: string;
  tags: string[];
  sections: BlogSection[];
  quote?: {
    text: string;
    attribution?: string;
  };
  cta: {
    label: string;
    href: string;
  };
  comments: BlogComment[];
};

const postData = [
  investorDueDiligence,
  sustainableCapacity,
  affiliateSuccess,
  resilientEdge,
  communityPowered,
] satisfies BlogPost[];

export const posts: BlogPost[] = [...postData].sort((a, b) =>
  a.publishedAt > b.publishedAt ? -1 : 1,
);

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
