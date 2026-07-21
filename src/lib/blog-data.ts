export type BlogPost = {
  title: string;
  excerpt: string;
  category: "Engineering" | "Design" | "AI" | "Product";
  date: string;
  readTime: string;
  author: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why we default to Next.js for every new client project",
    excerpt:
      "A look at the tradeoffs that make Next.js our default starting point — and the handful of cases where we reach for something else.",
    category: "Engineering",
    date: "June 2, 2026",
    readTime: "6 min read",
    author: "Rohan Kapoor",
  },
  {
    title: "Designing onboarding flows people actually finish",
    excerpt:
      "The small decisions — copy, step count, defaults — that separate onboarding flows with 90% completion from those with 40%.",
    category: "Design",
    date: "May 21, 2026",
    readTime: "5 min read",
    author: "Sofia Lindgren",
  },
  {
    title: "Practical AI features that ship in weeks, not quarters",
    excerpt:
      "You don't need a research team to add meaningful AI features. Here&apos;s the scoped, iterative approach we use with clients.",
    category: "AI",
    date: "May 8, 2026",
    readTime: "7 min read",
    author: "Tariq Osman",
  },
  {
    title: "The real cost of skipping a discovery phase",
    excerpt:
      "Projects that skip discovery ship faster in week one and slower in every week after. Here&apos;s what discovery actually buys you.",
    category: "Product",
    date: "April 24, 2026",
    readTime: "4 min read",
    author: "Elena Marsh",
  },
  {
    title: "A pragmatic guide to choosing a database in 2026",
    excerpt:
      "PostgreSQL, Mongo, or something else? A framework for picking the right database instead of the trendiest one.",
    category: "Engineering",
    date: "April 10, 2026",
    readTime: "8 min read",
    author: "Marcus Webb",
  },
  {
    title: "What makes a design system actually get used",
    excerpt:
      "Most design systems get built once and ignored within a year. Here&apos;s what keeps engineering and design actually using one.",
    category: "Design",
    date: "March 29, 2026",
    readTime: "5 min read",
    author: "Sofia Lindgren",
  },
];

export const BLOG_CATEGORIES = ["All", "Engineering", "Design", "AI", "Product"] as const;
