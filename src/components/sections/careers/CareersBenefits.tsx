"use client";

import { motion } from "framer-motion";
import { Globe2, HeartPulse, Laptop, CalendarClock, GraduationCap, Coffee } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BENEFITS = [
  { icon: Globe2, title: "Fully remote", desc: "Work from anywhere — we've always been distributed." },
  { icon: HeartPulse, title: "Health coverage", desc: "Comprehensive medical, dental, and vision plans." },
  { icon: CalendarClock, title: "Flexible hours", desc: "Async-friendly culture built around outcomes, not hours online." },
  { icon: Laptop, title: "Home office budget", desc: "A stipend to set up a workspace that works for you." },
  { icon: GraduationCap, title: "Learning budget", desc: "Annual budget for courses, conferences, and books." },
  { icon: Coffee, title: "Unlimited PTO", desc: "Take the time you need to do your best work." },
];

export function CareersBenefits() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading eyebrow="Why join us" title="Benefits that respect your time" />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border-subtle bg-white p-7 shadow-card dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink dark:text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
