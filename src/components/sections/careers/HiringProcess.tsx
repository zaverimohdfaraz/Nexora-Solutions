"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { step: "01", title: "Apply", desc: "Send your resume and a short note about what interests you." },
  { step: "02", title: "Intro call", desc: "A 30-minute conversation about your experience and goals." },
  { step: "03", title: "Skills exercise", desc: "A short, paid, real-world exercise relevant to the role." },
  { step: "04", title: "Team interview", desc: "Meet the people you'd work with day-to-day." },
  { step: "05", title: "Offer", desc: "We move fast — most candidates hear back within a week." },
];

export function HiringProcess() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading eyebrow="Hiring process" title="What to expect" />
        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent lg:block" />
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white shadow-glow">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-ink dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
