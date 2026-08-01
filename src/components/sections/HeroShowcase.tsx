"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * IMAGE SLOTS — save your screenshots at these exact paths
 * (create /public/images/hero/ if it doesn't exist).
 *
 * 1. /public/images/hero/hero-primary.jpg
 *    ~1000x760 (roughly 4:3) — your strongest, cleanest full-page or
 *    dashboard screenshot. This is the front-most, biggest card.
 *
 * 2. /public/images/hero/hero-secondary.jpg
 *    ~860x640 — a second project screenshot (or a mobile screen also
 *    works). Sits behind and to the left of the primary card.
 *
 * 3. /public/images/hero/hero-tertiary.jpg
 *    ~420x420 (square) — a close-up UI detail, a logo mark, or a
 *    small team/workspace photo. Smallest accent card, bottom-left.
 */
const FLOATING_CARDS = [
  {
    icon: Activity,
    title: "Deploy status",
    value: "Live in 12s",
    className: "left-[-6%] top-[6%] sm:left-[-8%]",
    delay: 1.0,
  },
  {
    icon: GitBranch,
    title: "Build pipeline",
    value: "42 commits shipped",
    className: "right-[-4%] bottom-[10%] sm:right-[-6%]",
    delay: 1.2,
  },
];

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 lg:pb-32 lg:pt-24">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-10%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur dark:bg-white/5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 120+ growing companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl lg:text-6xl"
            >
              Building digital experiences that{" "}
              <span className="text-gradient">grow businesses.</span>
            </motion.h1>

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

          {/* Right: image collage */}
          <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[480px] lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-[6%] top-[8%] w-[72%] overflow-hidden rounded-2xl border border-border-subtle shadow-soft dark:border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/hero-secondary.jpg"
                alt="Project screenshot"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[6%] right-[2%] w-[68%] overflow-hidden rounded-2xl border border-border-subtle shadow-soft dark:border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/hero-primary.jpg"
                alt="Featured product screenshot"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-[-4%] left-[-2%] w-[30%] overflow-hidden rounded-xl border border-border-subtle shadow-soft dark:border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/hero-tertiary.jpg"
                alt="UI detail"
                className="aspect-square w-full object-cover"
              />
            </motion.div>

            {FLOATING_CARDS.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                className={`absolute z-10 hidden items-center gap-2.5 rounded-xl border border-border-subtle bg-white/90 px-3.5 py-2.5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-ink/90 sm:flex ${card.className}`}
              >
                <card.icon className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[11px] font-medium text-muted">
                    {card.title}
                  </p>
                  <p className="text-xs font-semibold text-ink dark:text-white">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}