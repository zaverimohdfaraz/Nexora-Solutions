"use client";

import { motion } from "framer-motion";
import {
  Building2, Brain, Cloud, MonitorSmartphone, BarChart3, Sparkles,
} from "lucide-react";
import { Section, Container } from "@/components/ui/Container";

const CATEGORIES = [
  {
    icon: Building2,
    name: "Enterprise Applications",
    desc: "ERP, CRM, and internal systems built to scale.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Brain,
    name: "AI Engineering",
    desc: "Practical AI features and automation that ship fast.",
    color: "from-brand-violet to-brand-magenta",
  },
  {
    icon: Cloud,
    name: "Cloud Engineering",
    desc: "Resilient infrastructure and DevOps that scale with you.",
    color: "from-cyan-400 to-primary",
  },
  {
    icon: MonitorSmartphone,
    name: "Digital Engineering",
    desc: "Web and mobile products engineered for speed.",
    color: "from-amber-500 to-brand-magenta",
  },
  {
    icon: BarChart3,
    name: "Data & Analytics",
    desc: "Turn raw data into dashboards that drive decisions.",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    icon: Sparkles,
    name: "Emerging Technologies",
    desc: "Blockchain, AR/VR, and IoT — built for what's next.",
    color: "from-brand-magenta to-amber-500",
  },
];

export function ServiceCategories() {
  return (
    <Section className="pb-8 pt-20 lg:pt-28">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-card p-6 shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-glow`}
              >
                <cat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold text-ink dark:text-white">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}