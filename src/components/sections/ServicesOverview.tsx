"use client";

import { motion } from "framer-motion";
import {
  Code2, Palette, Cloud, Brain, Smartphone, Boxes,
} from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web platforms, internal tools, and complex systems — architected to fit how your business actually works.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps from a single React Native codebase.",
    color: "from-brand-violet to-brand-magenta",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces that feel effortless — researched, tested, and refined.",
    color: "from-amber-500 to-brand-magenta",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "Practical AI features and workflow automation that move the metrics that matter.",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Resilient APIs, infrastructure, and CI/CD pipelines that scale with your growth.",
    color: "from-cyan-400 to-primary",
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    desc: "From MVP to multi-tenant platform, engineered for iteration speed.",
    color: "from-brand-magenta to-amber-500",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Software development, end to end"
          description="Every engagement pairs senior engineers with product-minded designers — across web, mobile, AI, and cloud — so nothing gets lost in translation."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-card p-8 shadow-card transition-colors duration-300 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
              />
              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-glow`}
              >
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-6 text-lg font-semibold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
