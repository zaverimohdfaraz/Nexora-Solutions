"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STACK = [
  // Frontend
  "React",
  "Next.js",
  "TypeScript",

  // Backend
  "Node.js",
  "Python",
  "FastAPI",
  "Java",
  "Spring Boot",
  ".NET",

  // Data
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Apache Kafka",
  "Elasticsearch",

  // AI
  "Generative AI",
  "LLM Engineering",
  "PyTorch",

  // Cloud & Infrastructure
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Terraform",

  // Architecture & Delivery
  "Microservices",
  "CI/CD",
  "REST APIs",
];

const DOT_COLORS = [
  "bg-primary",
  "bg-brand-violet",
  "bg-brand-magenta",
  "bg-amber-500",
  "bg-emerald-400",
  "bg-cyan-400",
];

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our technology stack"
          title="Built on technology that scales."
          description="From modern digital products to enterprise platforms, AI systems, cloud infrastructure, and data-intensive applications — we choose the right technologies for the problem, not the trend."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {STACK.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 0.4,
                delay: (i % 8) * 0.05,
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-border-subtle bg-card px-5 py-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.02]"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span
                className={`relative z-10 h-2 w-2 shrink-0 rounded-full ${
                  DOT_COLORS[i % DOT_COLORS.length]
                } shadow-sm`}
              />

              <span className="relative z-10 text-sm font-semibold text-ink dark:text-white">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}