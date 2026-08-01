"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  Brain,
  Cloud,
  MonitorSmartphone,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedLogoMark } from "@/components/AnimatedLogoMark";

const SLIDES = [
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

const INTERVAL_MS = 4000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const current = SLIDES[index];
  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden pb-24 pt-16 lg:pb-32 lg:pt-24">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

        <div className="absolute left-1/2 top-[-10%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
      </div>

      <Container>
        {/* Main Hero Grid */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* =========================
              LEFT: HERO CONTENT
          ========================== */}
          <div className="flex flex-col items-start gap-7 text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur dark:bg-white/5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 120+ growing companies
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl lg:text-6xl"
            >
              Building digital experiences that{" "}
              <span className="text-gradient">grow businesses.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-muted"
            >
              Nexora Solutions partners with ambitious teams to design, build,
              and scale premium web, SaaS, and AI products — engineered for
              speed, built to last.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/quote/" size="lg">
                Get Started
              </Button>

              <Button href="/portfolio/" size="lg" variant="ghost">
                View Portfolio
              </Button>
            </motion.div>
          </div>

          {/* =========================
              RIGHT: CAPABILITY SLIDER
              (replaces the 3-image collage — same 6 categories as
              the WorkShowcase section, sized down to fit the hero)
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto h-[420px] w-full max-w-md lg:h-[480px] lg:max-w-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border-subtle shadow-card dark:border-white/10">
              <AnimatePresence mode="wait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Number + icon, top-left */}
              <div className="absolute right-5 top-5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-glow">
                  <CurrentIcon className="h-4 w-4" />
                </div>
                {/* <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-white/30"> / </span>
                  {String(SLIDES.length).padStart(2, "0")}
                </span> */}
              </div>

              {/* Title + description, bottom */}
              {/* <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
                >
                  <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                    {current.name}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/70 sm:text-sm">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence> */}
            </div>

            {/* Dot navigation */}
            <div className="mt-4 flex justify-center gap-1.5">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${slide.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================
            PRODUCT VISUAL
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="relative rounded-3xl border border-border-subtle bg-white/60 p-2 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            {/* Browser Header */}
            <div className="flex items-center gap-1.5 px-4 py-3">
              {/*
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              */}
            </div>

            {/* Product Visual */}
            <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-white to-accent/10 dark:from-primary/10 dark:via-surface-dark dark:to-accent/10 sm:h-[420px]">
              {/* Grid */}
              <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,black,transparent)]" />

              {/* Static Rings */}
              <span className="absolute h-[220px] w-[220px] rounded-full border border-primary/15" />

              <span className="absolute h-[320px] w-[320px] rounded-full border border-primary/10" />

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="relative flex flex-col items-center gap-4"
              >
                <AnimatedLogoMark size={128} />

                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl font-bold tracking-[0.1em] text-ink dark:text-white">
                    NEXORA
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                    Connect. Code. Create.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}