export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "community-powered-greencloud",
    title: "Why Community-Powered Cloud Will Outpace the Hyperscalers",
    publishedAt: "2024-06-12",
    readingTime: "7 min read",
    excerpt:
      "From energy resilience to regulatory readiness, distributed infrastructure anchored in local communities is redefining what hyperscale can mean.",
    tags: ["distributed cloud", "sustainability", "affiliates"],
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
