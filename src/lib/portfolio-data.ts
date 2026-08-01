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
    slug: "aurelis-enterprise-platform",
    name: "Aurelis",
    category: "SaaS",
    client: "Aurelis Technologies",
    year: "2025",
    metric: "Enterprise intelligence platform",
    gradient: "from-primary/30 via-cyan-400/10 to-transparent",
    challenge:
      "Aurelis required a centralized platform capable of connecting fragmented operational systems, internal workflows, and real-time business data across multiple departments.",
    solution:
      "We designed a modular enterprise platform with role-based workspaces, workflow orchestration, real-time event processing, API integrations, and centralized operational intelligence.",
    result:
      "The platform created a unified operational layer capable of connecting multiple business functions through a single scalable architecture.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },

  {
    slug: "nexovault-ai-platform",
    name: "Nexovault",
    category: "AI",
    client: "Nexovault Labs",
    year: "2025",
    metric: "AI-powered knowledge ecosystem",
    gradient: "from-brand-violet/35 via-brand-magenta/10 to-transparent",
    challenge:
      "Nexovault needed a way to transform large volumes of fragmented company knowledge into an intelligent system employees could search, analyze, and interact with.",
    solution:
      "We engineered a RAG-based AI knowledge platform with document ingestion, semantic search, contextual retrieval, AI agents, permissions, and automated workflows.",
    result:
      "The resulting architecture transformed static organizational knowledge into an interactive intelligence layer capable of supporting multiple business workflows.",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Vector Database",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    slug: "orbyte-cloud-command",
    name: "Orbyte",
    category: "SaaS",
    client: "Orbyte Systems",
    year: "2025",
    metric: "Cloud operations command center",
    gradient: "from-cyan-400/30 via-primary/10 to-transparent",
    challenge:
      "Orbyte needed a unified way to monitor distributed services, deployments, infrastructure health, and application performance across multiple cloud environments.",
    solution:
      "We built a cloud-native command center with observability dashboards, deployment tracking, service health monitoring, infrastructure events, and automated alerts.",
    result:
      "The platform provided engineering teams with a centralized operational view across distributed infrastructure and application services.",
    tech: [
      "Next.js",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "PostgreSQL",
    ],
  },

  {
    slug: "fluxwave-dashboard",
    name: "Fluxwave",
    category: "SaaS",
    client: "Fluxwave Inc.",
    year: "2025",
    metric: "Real-time financial intelligence",
    gradient: "from-primary/30 via-primary/10 to-transparent",
    challenge:
      "Fluxwave needed a sophisticated financial operations interface capable of presenting complex transactional data without overwhelming users.",
    solution:
      "We redesigned the platform around modular dashboards, real-time visualizations, intelligent filtering, customizable workspaces, and role-based access.",
    result:
      "The new architecture created a scalable foundation for financial monitoring, reporting, and operational decision-making.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "AWS",
    ],
  },

  {
    slug: "vertexa-automation",
    name: "Vertexa",
    category: "AI",
    client: "Vertexa Labs",
    year: "2025",
    metric: "Intelligent workflow automation",
    gradient: "from-brand-violet/30 via-brand-magenta/10 to-transparent",
    challenge:
      "Vertexa's operations involved complex request processing that required employees to manually classify, prioritize, and route incoming information.",
    solution:
      "We engineered an AI workflow system that combines classification models, LLM reasoning, business rules, confidence scoring, and automated routing.",
    result:
      "The system transformed a manual operational workflow into an intelligent pipeline capable of handling large volumes of structured and unstructured requests.",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },

  {
    slug: "cedarline-commerce",
    name: "Cedarline",
    category: "E-commerce",
    client: "Cedarline Goods",
    year: "2025",
    metric: "Composable commerce architecture",
    gradient: "from-amber-500/35 via-brand-magenta/10 to-transparent",
    challenge:
      "Cedarline's growing product catalog and international expansion required a commerce architecture that could evolve beyond a traditional storefront.",
    solution:
      "We developed a composable commerce experience with dynamic product experiences, personalized discovery, optimized checkout, inventory integrations, and flexible content management.",
    result:
      "The new platform created a flexible commerce foundation capable of supporting multiple markets, catalogs, and future integrations.",
    tech: [
      "Next.js",
      "TypeScript",
      "Shopify API",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },

  {
    slug: "northpeak-intelligence",
    name: "Northpeak",
    category: "Web",
    client: "Northpeak Realty",
    year: "2025",
    metric: "Intelligent property platform",
    gradient: "from-primary/25 via-accent/10 to-transparent",
    challenge:
      "Northpeak needed more than a traditional property website. They wanted an intelligent platform capable of connecting listings, buyer preferences, agents, and market data.",
    solution:
      "We designed an intelligent property discovery experience with advanced search, geographic data, saved searches, recommendation logic, and agent workflows.",
    result:
      "The platform evolved from a simple listings website into a connected digital property ecosystem.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Mapbox",
      "TypeScript",
      "Redis",
    ],
  },

  {
    slug: "driftlab-mobile",
    name: "Driftlab",
    category: "Mobile",
    client: "Driftlab Studio",
    year: "2024",
    metric: "Cross-platform connected experience",
    gradient: "from-accent/25 via-secondary/10 to-transparent",
    challenge:
      "Driftlab needed a mobile companion capable of communicating with connected hardware while maintaining a consistent experience across iOS and Android.",
    solution:
      "We built a React Native application with device connectivity, offline-first synchronization, real-time status updates, notifications, and account management.",
    result:
      "The application established a scalable mobile foundation for a connected hardware ecosystem.",
    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
      "GraphQL",
      "Node.js",
    ],
  },

  {
    slug: "ionsphere-enterprise",
    name: "Ionsphere",
    category: "SaaS",
    client: "Ionsphere",
    year: "2024",
    metric: "Enterprise onboarding platform",
    gradient: "from-primary/30 via-accent/15 to-transparent",
    challenge:
      "Ionsphere's enterprise customers required extensive configuration, permissions, integrations, and data migration before becoming operational.",
    solution:
      "We engineered a self-service onboarding system with organization provisioning, role-based permissions, automated migration workflows, and integration setup.",
    result:
      "The architecture significantly reduced the operational complexity involved in bringing new enterprise organizations onto the platform.",
    tech: [
      "Next.js",
      "AWS",
      "PostgreSQL",
      "Docker",
      "Node.js",
      "Redis",
    ],
  },

  {
    slug: "quantara-data-platform",
    name: "Quantara",
    category: "SaaS",
    client: "Quantara Analytics",
    year: "2025",
    metric: "Enterprise data intelligence",
    gradient: "from-cyan-400/30 via-primary/10 to-transparent",
    challenge:
      "Quantara needed to bring data from multiple operational systems into one environment where teams could analyze trends and build decision-making workflows.",
    solution:
      "We designed a centralized data platform with ingestion pipelines, transformation workflows, interactive analytics, scheduled reporting, and role-based access.",
    result:
      "The platform established a single analytical layer for exploring operational and business intelligence data.",
    tech: [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Apache Kafka",
      "AWS",
    ],
  },

  {
    slug: "sentra-ai-security",
    name: "Sentra",
    category: "AI",
    client: "Sentra Systems",
    year: "2025",
    metric: "AI-assisted security intelligence",
    gradient: "from-red-500/25 via-brand-violet/10 to-transparent",
    challenge:
      "Sentra needed to process large volumes of security events and surface meaningful patterns without requiring analysts to manually inspect every signal.",
    solution:
      "We developed an AI-assisted security intelligence layer combining event processing, anomaly detection, contextual analysis, alert prioritization, and analyst workflows.",
    result:
      "The platform provided security teams with a more intelligent environment for investigating events and identifying potential risks.",
    tech: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },

  {
    slug: "meridian-supply-chain",
    name: "Meridian",
    category: "SaaS",
    client: "Meridian Logistics",
    year: "2024",
    metric: "Digital supply chain control",
    gradient: "from-emerald-400/25 via-primary/10 to-transparent",
    challenge:
      "Meridian operated across multiple suppliers, warehouses, transportation providers, and internal systems with limited visibility between them.",
    solution:
      "We built a centralized supply chain platform connecting inventory, shipment events, supplier information, warehouse operations, and exception workflows.",
    result:
      "The platform created a unified digital control layer across the organization's supply chain operations.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
  },

  {
    slug: "novara-health-platform",
    name: "Novara",
    category: "Web",
    client: "Novara Digital",
    year: "2024",
    metric: "Connected service ecosystem",
    gradient: "from-teal-400/25 via-primary/10 to-transparent",
    challenge:
      "Novara required a secure digital platform connecting users, service providers, scheduling workflows, communications, and internal operations.",
    solution:
      "We designed a modular platform with account management, scheduling, notifications, secure data flows, administrative tools, and third-party integrations.",
    result:
      "The platform provided a scalable foundation for connecting customer-facing experiences with internal operational systems.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "AWS",
    ],
  },

  {
    slug: "velora-commerce-engine",
    name: "Velora",
    category: "E-commerce",
    client: "Velora Collective",
    year: "2024",
    metric: "Headless commerce engine",
    gradient: "from-pink-500/25 via-brand-violet/10 to-transparent",
    challenge:
      "Velora wanted complete control over its digital shopping experience without being constrained by a traditional commerce frontend.",
    solution:
      "We implemented a headless commerce architecture with custom product experiences, flexible content blocks, personalized discovery, and integrated payments.",
    result:
      "The architecture gave Velora a highly customizable commerce experience capable of evolving independently from its commerce backend.",
    tech: [
      "Next.js",
      "Shopify",
      "GraphQL",
      "Stripe",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    slug: "aether-vision-ai",
    name: "Aether Vision",
    category: "AI",
    client: "Aether Technologies",
    year: "2024",
    metric: "Computer vision platform",
    gradient: "from-indigo-500/30 via-cyan-400/10 to-transparent",
    challenge:
      "Aether needed a platform capable of processing visual information and transforming it into structured insights for downstream business workflows.",
    solution:
      "We engineered a computer vision pipeline combining image processing, machine learning models, asynchronous processing, and a web-based analysis environment.",
    result:
      "The resulting system created an extensible foundation for applying computer vision to multiple operational use cases.",
    tech: [
      "Python",
      "FastAPI",
      "Computer Vision",
      "OpenCV",
      "PostgreSQL",
      "AWS",
    ],
  },

  {
    slug: "pulsegrid-observability",
    name: "Pulsegrid",
    category: "SaaS",
    client: "Pulsegrid Engineering",
    year: "2024",
    metric: "Full-stack observability",
    gradient: "from-orange-400/25 via-primary/10 to-transparent",
    challenge:
      "Pulsegrid's engineering teams relied on disconnected monitoring tools, making it difficult to understand relationships between infrastructure, applications, and user-facing issues.",
    solution:
      "We created an observability platform combining service health, application telemetry, infrastructure events, deployment history, and incident workflows.",
    result:
      "Engineering teams gained a unified environment for investigating application and infrastructure behavior.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },

  {
    slug: "arcadia-mobile-network",
    name: "Arcadia",
    category: "Mobile",
    client: "Arcadia Network",
    year: "2023",
    metric: "Real-time mobile ecosystem",
    gradient: "from-violet-500/30 via-primary/10 to-transparent",
    challenge:
      "Arcadia needed a mobile-first platform supporting real-time interactions, personalized feeds, notifications, and location-aware experiences.",
    solution:
      "We developed a cross-platform application with real-time communication, personalized content, push notifications, location services, and scalable backend APIs.",
    result:
      "The platform established a flexible mobile architecture designed around real-time interactions and high-frequency user activity.",
    tech: [
      "React Native",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Firebase",
    ],
  },

  {
    slug: "stratos-digital-twin",
    name: "Stratos",
    category: "SaaS",
    client: "Stratos Engineering",
    year: "2023",
    metric: "Interactive digital twin",
    gradient: "from-sky-400/30 via-primary/10 to-transparent",
    challenge:
      "Stratos required a digital environment for visualizing complex physical assets, operational states, and real-time telemetry.",
    solution:
      "We developed an interactive digital twin platform combining 3D visualization, real-time telemetry, asset management, and operational analytics.",
    result:
      "The platform created a digital representation layer capable of connecting physical infrastructure with live operational data.",
    tech: [
      "Next.js",
      "Three.js",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "AWS",
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Web",
  "SaaS",
  "AI",
  "E-commerce",
  "Mobile",
] as const;