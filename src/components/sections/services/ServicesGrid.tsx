"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Brain,
  Cloud,
  MonitorSmartphone,
  BarChart3,
  Sparkles,
  Code2,
  Palette,
  ShoppingCart,
  Boxes,
  Database,
  LayoutTemplate,
  Search,
  Wrench,
  Check,
} from "lucide-react";
import { Section, Container } from "@/components/ui/Container";

const COLORS = [
  "from-primary to-primary-light",
  "from-brand-violet to-brand-magenta",
  "from-cyan-400 to-primary",
  "from-amber-500 to-brand-magenta",
  "from-emerald-400 to-cyan-400",
  "from-brand-magenta to-amber-500",
];

const SERVICES = [
  // =====================================================
  // 01 — ENTERPRISE APPLICATIONS
  // =====================================================
  {
    id: "enterprise-applications",
    icon: Building2,
    title: "Enterprise Applications",
    desc: "Providing robust, reliable, and high-performing enterprise applications to streamline business operations, connect teams, and improve organizational efficiency.",
    features: [
      "ERP & CRM platforms",
      "Internal business applications",
      "Workflow & process automation",
      "Role-based enterprise systems",
      "Legacy system modernization",
    ],
  },

  // =====================================================
  // 02 — AI ENGINEERING
  // =====================================================
  {
    id: "ai-engineering",
    icon: Brain,
    title: "AI Engineering",
    desc: "Transforming ideas into intelligent solutions with cutting-edge AI engineering, automation, intelligent workflows, and modern machine learning capabilities.",
    features: [
      "AI-powered applications",
      "LLM & generative AI integration",
      "AI agents & automation",
      "Intelligent document processing",
      "Recommendation & prediction systems",
    ],
  },

  // =====================================================
  // 03 — CLOUD ENGINEERING
  // =====================================================
  {
    id: "cloud-engineering",
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "Secure, scalable, and seamless cloud solutions tailored for business growth, reliability, performance, and continuous delivery.",
    features: [
      "Cloud architecture & migration",
      "AWS, Azure & GCP solutions",
      "CI/CD pipeline engineering",
      "Docker & containerization",
      "Infrastructure automation",
    ],
  },

  // =====================================================
  // 04 — DIGITAL ENGINEERING
  // =====================================================
  {
    id: "digital-engineering",
    icon: MonitorSmartphone,
    title: "Digital Engineering",
    desc: "Building scalable, secure, and high-performance digital products designed around real business requirements and evolving customer expectations.",
    features: [
      "Web & full-stack development",
      "Mobile application development",
      "SaaS product engineering",
      "API & microservice development",
      "Digital product engineering",
    ],
  },

  // =====================================================
  // 05 — DATA & ANALYTICS
  // =====================================================
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Unlocking intelligent, efficient, and actionable data solutions to help businesses understand performance, identify opportunities, and make better decisions.",
    features: [
      "Business intelligence dashboards",
      "Data visualization",
      "Analytics platforms",
      "Data pipelines & integrations",
      "Reporting & performance analytics",
    ],
  },

  // =====================================================
  // 06 — EMERGING TECHNOLOGIES
  // =====================================================
  {
    id: "emerging-technologies",
    icon: Sparkles,
    title: "Emerging Technologies",
    desc: "Leveraging cutting-edge, adaptive, and future-ready technologies to help businesses experiment, innovate, and stay ahead of changing markets.",
    features: [
      "Blockchain solutions",
      "IoT applications",
      "AR / VR experiences",
      "Computer vision",
      "Experimental technology solutions",
    ],
  },

  // =====================================================
  // 07 — WEB DEVELOPMENT
  // =====================================================
  {
    id: "web-development",
    icon: Code2,
    title: "Web & Full-Stack Development",
    desc: "Custom websites and web applications engineered for speed, scalability, security, and long-term growth.",
    features: [
      "Frontend, backend & full-stack builds",
      "React, Next.js & Node.js",
      "Business & corporate websites",
      "MERN stack development",
    ],
  },

  // =====================================================
  // 08 — MOBILE
  // =====================================================
  {
    id: "mobile-development",
    icon: MonitorSmartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android applications built from a modern architecture while maintaining a native-quality experience.",
    features: [
      "React Native development",
      "iOS & Android applications",
      "Offline-first applications",
      "Push notifications",
      "App Store & Play Store deployment",
    ],
  },

  // =====================================================
  // 09 — UI UX
  // =====================================================
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Thoughtful digital experiences combining strong visual systems, intuitive interactions, and user-focused product design.",
    features: [
      "User research & wireframing",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design systems",
      "Usability-focused experiences",
    ],
  },

  // =====================================================
  // 10 — SAAS
  // =====================================================
  {
    id: "saas",
    icon: Boxes,
    title: "SaaS Development",
    desc: "From MVP to multi-tenant platform, we engineer SaaS products with scalable architecture, secure authentication, billing, and analytics.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing systems",
      "Role-based access control",
      "Admin dashboards",
      "Usage analytics",
    ],
  },

  // =====================================================
  // 11 — ECOMMERCE
  // =====================================================
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "High-performance commerce experiences designed around conversion, seamless checkout, product management, and scalable operations.",
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory & order management",
      "Shopping cart & checkout",
      "Performance optimization",
    ],
  },

  // =====================================================
  // 12 — API & DATABASE
  // =====================================================
  {
    id: "backend-api",
    icon: Database,
    title: "API & Database Engineering",
    desc: "Well-structured APIs and reliable data architectures that keep applications secure, maintainable, and ready to scale.",
    features: [
      "REST & GraphQL APIs",
      "SQL & NoSQL databases",
      "Database architecture",
      "Third-party integrations",
      "API documentation",
    ],
  },

  // =====================================================
  // 13 — CMS
  // =====================================================
  {
    id: "cms",
    icon: LayoutTemplate,
    title: "CMS & Digital Platforms",
    desc: "Flexible content platforms and landing page systems that allow teams to manage and evolve their digital presence efficiently.",
    features: [
      "Headless CMS integration",
      "Custom content systems",
      "Landing page systems",
      "Reusable content components",
      "Marketing platform integration",
    ],
  },

  // =====================================================
  // 14 — SEO
  // =====================================================
  {
    id: "seo",
    icon: Search,
    title: "SEO & Optimization",
    desc: "Technical SEO and performance strategies designed to improve visibility, discoverability, and the overall quality of your digital experience.",
    features: [
      "Technical SEO audits",
      "Structured data & schema",
      "Core Web Vitals",
      "On-page optimization",
      "Search-ready architecture",
    ],
  },

  // =====================================================
  // 15 — MAINTENANCE
  // =====================================================
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Continuous technical support, monitoring, improvements, and security updates that keep your digital products reliable long after launch.",
    features: [
      "Ongoing feature development",
      "Bug fixes & monitoring",
      "Security updates",
      "Performance improvements",
      "Long-term technical support",
    ],
  },
];

export function ServicesGrid() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-border-subtle bg-card p-7 shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
              >
                {/* Decorative glow */}

                <div
                  className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${
                    COLORS[i % COLORS.length]
                  } opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.18]`}
                />

                {/* Icon */}

                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                    COLORS[i % COLORS.length]
                  } text-white shadow-glow transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}

                <h3 className="relative mt-6 text-lg font-semibold text-ink dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>

                {/* Features */}

                <ul className="relative mt-5 flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink/80 dark:text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${
                    COLORS[i % COLORS.length]
                  } transition-all duration-500 group-hover:w-full`}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}