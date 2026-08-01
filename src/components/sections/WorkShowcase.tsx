"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Brain,
  Cloud,
  MonitorSmartphone,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const SERVICES = [
  {
    icon: Building2,
    name: "Enterprise Applications",
    desc: "ERP, CRM, and internal systems built to scale.",
    image: "/images/capabilities/enterprise-applications.jpeg",
  },
  {
    icon: Brain,
    name: "AI Engineering",
    desc: "Practical AI features and automation that ship fast.",
    image: "/images/capabilities/ai-engineering.jpeg",
  },
  {
    icon: Cloud,
    name: "Cloud Engineering",
    desc: "Resilient infrastructure and DevOps that scale with you.",
    image: "/images/capabilities/cloud-engineering.jpeg",
  },
  {
    icon: MonitorSmartphone,
    name: "Digital Engineering",
    desc: "Web and mobile products engineered for speed.",
    image: "/images/capabilities/digital-engineering.jpeg",
  },
  {
    icon: BarChart3,
    name: "Data & Analytics",
    desc: "Turn raw data into dashboards that drive decisions.",
    image: "/images/capabilities/data-analytics.jpeg",
  },
  {
    icon: Sparkles,
    name: "Emerging Technologies",
    desc: "Blockchain, AR/VR, and IoT — built for what's next.",
    image: "/images/capabilities/emerging-technologies.jpeg",
  },
];

const BRANDS = [
  "Lightning Fast",
  "Mobile First",
  "Conversion Focused",
  "SEO Optimized",
  "Secure by Design",
  "Modern UI/UX",
  "Accessibility Ready",
  "High Performance",
  "Cloud Ready",
  "API Integrations",
  "AI Ready",
  "Analytics Enabled",
];

const INTERVAL_MS = 5000;

export function WorkShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SERVICES.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [paused]);

  const current = SERVICES[index];
  const CurrentIcon = current.icon;

  return (
    <section
      className="relative overflow-hidden border-y border-border-subtle py-16 dark:border-white/10 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          {/* <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur dark:bg-white/5">
            What we do
          </p> */}

          <p className="mx-auto mt-2 max-w-xl text-xl leading-relaxed text-muted">
            Engineering solutions across enterprise applications, AI, cloud,
            digital products, data, and emerging technologies.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN SERVICE SLIDER
        ====================================================== */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-white/60 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <div className="grid min-h-[420px] lg:grid-cols-[1fr_1.05fr]">
              {/* LEFT — SERVICE CONTENT */}
              <div className="relative z-10 flex flex-col justify-center p-7 text-center sm:p-10 lg:p-14 lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center lg:items-start"
                  >
                    {/* Number */}
                    <span className="mb-5 font-mono text-xs font-semibold tracking-[0.3em] text-primary">
                      {String(index + 1).padStart(2, "0")}{" "}
                      <span className="text-muted/40">/</span>{" "}
                      {String(SERVICES.length).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                      <CurrentIcon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
                      {current.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {current.desc}
                    </p>

                    {/* Small CTA */}
                    <a
                      href="/services/"
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Explore capabilities

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={current.name}
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-black/10 lg:via-transparent lg:to-transparent" />

                {/* Image corner label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-md">
                    <span className="text-xs font-medium text-white/80">
                      Nexora Solutions
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              SLIDER CONTROLS
          ================================================== */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {SERVICES.map((service, i) => (
              <button
                key={service.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${service.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            ORIGINAL MARQUEE
        ====================================================== */}
        <div className="mt-16 border-t border-border-subtle pt-10 dark:border-white/10">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Every project is crafted with performance, scalability, and user
            experience at its core.
          </p>

          <div className="mask-fade-x relative overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-16">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="shrink-0 whitespace-nowrap text-xl font-bold tracking-tight text-muted/50 transition-colors hover:text-primary"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

