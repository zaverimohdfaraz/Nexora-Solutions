"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEPARTMENTS, OPEN_ROLES } from "@/lib/careers-data";
import { cn } from "@/lib/utils";

export function OpenPositions() {
  const [dept, setDept] = useState<(typeof DEPARTMENTS)[number]>("All");

  const filtered = useMemo(
    () => (dept === "All" ? OPEN_ROLES : OPEN_ROLES.filter((r) => r.department === dept)),
    [dept]
  );

  return (
    <Section id="open-roles" className="scroll-mt-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Open roles" title="Find your next role" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DEPARTMENTS.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                dept === d
                  ? "border-transparent bg-gradient-brand text-white shadow-glow"
                  : "border-border-subtle text-ink/70 hover:border-primary/30 hover:text-ink dark:border-white/10 dark:text-white/70"
              )}
            >
              {d}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((role, i) => (
              <motion.a
                key={role.title}
                layout
                href={`mailto:careers@nexorasolutions.com?subject=Application: ${encodeURIComponent(role.title)}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col gap-3 rounded-2xl border border-border-subtle bg-card p-6 shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-ink dark:text-white">
                    {role.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                      {role.type}
                    </span>
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                  Apply
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
