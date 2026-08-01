"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROJECTS = [
  {
    name: "Aurelis",
    category: "Enterprise Technology · Operations Intelligence",
    description:
      "A unified intelligence layer connecting enterprise workflows, operational systems, real-time data, and decision-making.",
    scope:
      "Enterprise platform · Workflow orchestration · Real-time intelligence · API ecosystem",
    image: "/images/projects/aurelis.jpg",
  },
  {
    name: "Nexovault",
    category: "AI Engineering · Intelligent Automation",
    description:
      "An AI-powered knowledge and automation ecosystem designed to connect company data, intelligent agents, and complex business workflows.",
    scope:
      "AI agents · Knowledge systems · RAG architecture · Workflow automation",
    image: "/images/projects/nexovault.jpg",
  },
  {
    name: "Orbyte",
    category: "Cloud Engineering · Distributed Systems",
    description:
      "A cloud-native command platform for monitoring distributed infrastructure, services, deployments, and application performance.",
    scope:
      "Cloud architecture · Observability · DevOps · Distributed infrastructure",
    image: "/images/projects/orbyte.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Solution concepts"
            title="Technology built beyond the ordinary."
            description="Explore a few conceptual solutions that represent the kind of complex digital ecosystems, intelligent platforms, and scalable infrastructure we can engineer."
          />

          <Link
            href="/portfolio/"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary sm:flex"
          >
            Explore our capabilities
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-border-subtle bg-card shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.02]"
            >
              <Link href="/portfolio/" className="block">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-surface-dark">
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Concept badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-primary" />
                    Concept
                  </div>

                  {/* Project number */}
                  <span className="absolute bottom-4 right-4 font-mono text-xs font-medium tracking-[0.2em] text-white/50">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {project.category}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-ink dark:text-white">
                      {project.name}
                    </h3>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {/* Scope */}
                  <div className="mt-5 border-t border-border-subtle pt-4 dark:border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">
                      Technology scope
                    </p>

                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {project.scope}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/portfolio/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore our capabilities
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}