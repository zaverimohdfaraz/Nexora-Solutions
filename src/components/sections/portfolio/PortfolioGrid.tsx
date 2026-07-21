"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { CATEGORIES, PROJECTS, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section className="pt-0">
      <Container>
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                filter === cat
                  ? "border-transparent bg-gradient-brand text-white shadow-glow"
                  : "border-border-subtle text-ink/70 hover:border-primary/30 hover:text-ink dark:border-white/10 dark:text-white/70"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setActive(project)}
                className="group overflow-hidden rounded-3xl border border-border-subtle bg-card text-left shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
              >
                <div
                  className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} bg-surface-dark`}
                >
                  <div className="absolute inset-0 bg-grid-dark opacity-40" />
                  <div className="relative flex h-24 w-40 flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <div className="h-2 w-2/3 rounded-full bg-white/40" />
                    <div className="h-2 w-full rounded-full bg-white/20" />
                    <div className="h-2 w-1/2 rounded-full bg-white/20" />
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {project.client} · {project.year}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink dark:text-white">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-success">
                    {project.metric}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border-subtle bg-white p-8 shadow-card dark:border-white/10 dark:bg-surface-dark sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close case study"
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:text-ink dark:border-white/10 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {active.client} · {active.year} · {active.category}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-ink dark:text-white">
                {active.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-success">{active.metric}</p>

              <div className="mt-8 flex flex-col gap-6">
                <CaseBlock icon={Target} title="Challenge" text={active.challenge} />
                <CaseBlock icon={Lightbulb} title="Solution" text={active.solution} />
                <CaseBlock icon={TrendingUp} title="Result" text={active.result} />
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border-subtle pt-6 dark:border-white/10">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function CaseBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Target;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink dark:text-white">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}
