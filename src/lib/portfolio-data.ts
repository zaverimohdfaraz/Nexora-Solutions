export type Project = {
  slug: string;
  name: string;
  category: "Web" | "SaaS" | "AI" | "E-commerce" | "Mobile";
  client: string;
  year: string;
  metric: string;
  gradient: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "fluxwave-dashboard",
    name: "Fluxwave",
    category: "SaaS",
    client: "Fluxwave Inc.",
    year: "2025",
    metric: "+64% activation",
    gradient: "from-primary/30 via-primary/10 to-transparent",
    challenge:
      "Fluxwave&apos;s onboarding flow lost most new users before they reached their first meaningful action inside the product.",
    solution:
      "We redesigned onboarding around a single guided setup path, rebuilt the dashboard in Next.js, and added real-time data visualizations.",
    result:
      "Activation rate increased 64% in the first quarter post-launch, with support tickets dropping 30%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    slug: "cedarline-storefront",
    name: "Cedarline",
    category: "E-commerce",
    client: "Cedarline Goods",
    year: "2025",
    metric: "2.1x conversion",
    gradient: "from-accent/30 via-accent/10 to-transparent",
    challenge:
      "A slow, template-based storefront was costing Cedarline conversions on mobile, where 70% of their traffic originated.",
    solution:
      "We rebuilt the storefront with a performance-first architecture, streamlined checkout to two steps, and optimized every image asset.",
    result:
      "Mobile conversion rate more than doubled, and page load time dropped from 4.2s to 0.9s.",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "Shopify API"],
  },
  {
    slug: "vertexa-automation",
    name: "Vertexa",
    category: "AI",
    client: "Vertexa Labs",
    year: "2024",
    metric: "40hrs saved / week",
    gradient: "from-secondary/30 via-secondary/10 to-transparent",
    challenge:
      "Vertexa&apos;s operations team spent dozens of hours weekly manually triaging and routing customer requests.",
    solution:
      "We built an AI-powered triage system using an LLM pipeline that classifies, prioritizes, and routes requests automatically.",
    result:
      "The team reclaimed roughly 40 hours per week, with routing accuracy above 95%.",
    tech: ["Python", "OpenAI API", "FastAPI", "PostgreSQL"],
  },
  {
    slug: "northpeak-portal",
    name: "Northpeak",
    category: "Web",
    client: "Northpeak Realty",
    year: "2024",
    metric: "+48% lead quality",
    gradient: "from-primary/25 via-accent/10 to-transparent",
    challenge:
      "Northpeak&apos;s property listings site generated traffic but poor-quality leads with no way to filter serious buyers.",
    solution:
      "We designed a new listings experience with smart filtering, saved searches, and a qualification flow before agents were contacted.",
    result:
      "Lead quality improved 48% and average agent response time dropped by half.",
    tech: ["Next.js", "MongoDB", "Mapbox", "Node.js"],
  },
  {
    slug: "driftlab-app",
    name: "Driftlab",
    category: "Mobile",
    client: "Driftlab Studio",
    year: "2024",
    metric: "4.8★ App Store rating",
    gradient: "from-accent/25 via-secondary/10 to-transparent",
    challenge:
      "Driftlab needed a cross-platform companion app for their hardware product, launched on a tight six-week timeline.",
    solution:
      "We used React Native to ship a single codebase for iOS and Android, with offline-first sync and push notifications.",
    result:
      "Launched on time with a 4.8-star average rating across both app stores in the first month.",
    tech: ["React Native", "TypeScript", "Firebase", "GraphQL"],
  },
  {
    slug: "ionsphere-platform",
    name: "Ionsphere",
    category: "SaaS",
    client: "Ionsphere",
    year: "2023",
    metric: "3x faster onboarding",
    gradient: "from-primary/30 via-accent/15 to-transparent",
    challenge:
      "Ionsphere&apos;s B2B platform required manual setup calls for every new enterprise customer, slowing sales cycles.",
    solution:
      "We built a self-serve onboarding wizard with role-based provisioning and automated data migration tooling.",
    result:
      "New customer onboarding time dropped from an average of 3 weeks to under 1 week.",
    tech: ["Next.js", "AWS", "PostgreSQL", "Docker"],
  },
];

export const CATEGORIES = ["All", "Web", "SaaS", "AI", "E-commerce", "Mobile"] as const;
