"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    price: "$1,499",
    unit: "one-time",
    desc: "For a focused launch — a single landing page or small marketing site.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "2 weeks delivery", "30-day support"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$4,900",
    unit: "starting at",
    desc: "For a full product build — custom web app or e-commerce store.",
    features: [
      "Up to 15 pages / views",
      "Custom UI/UX design",
      "Full-stack development",
      "CMS integration",
      "Advanced SEO & analytics",
      "90-day support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "tailored quote",
    desc: "For complex platforms — SaaS products, multi-team collaboration.",
    features: [
      "Unlimited scope",
      "Dedicated project team",
      "AI & automation integration",
      "Cloud architecture & DevOps",
      "SLA-backed maintenance",
      "Priority support",
    ],
    highlighted: false,
  },
];

const COMPARISON_ROWS = [
  { label: "Custom UI/UX design", starter: true, pro: true, enterprise: true },
  { label: "Full-stack development", starter: false, pro: true, enterprise: true },
  { label: "CMS integration", starter: false, pro: true, enterprise: true },
  { label: "AI & automation features", starter: false, pro: false, enterprise: true },
  { label: "Dedicated project manager", starter: false, pro: true, enterprise: true },
  { label: "SLA-backed support", starter: false, pro: false, enterprise: true },
];

export function PricingPlans() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 lg:pb-20 lg:pt-28">
        <div className="absolute inset-0 -z-10">
          <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute left-1/2 top-[-20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <Container className="max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] text-ink dark:text-white sm:text-6xl"
          >
            Transparent pricing, <span className="text-gradient">no surprises.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted"
          >
            Every project gets a detailed, itemized quote before we start.
            These packages are a starting point for scoping conversations.
          </motion.p>
        </Container>
      </section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8 shadow-card",
                  plan.highlighted
                    ? "border-primary/40 bg-surface-dark text-white"
                    : "border-border-subtle bg-card dark:border-white/10 dark:bg-white/[0.02]"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-glow">
                    Most popular
                  </span>
                )}
                <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-ink dark:text-white")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-2 text-sm", plan.highlighted ? "text-white/60" : "text-muted")}>
                  {plan.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={cn("text-4xl font-bold", plan.highlighted ? "text-white" : "text-ink dark:text-white")}>
                    {plan.price}
                  </span>
                  <span className={cn("text-xs", plan.highlighted ? "text-white/50" : "text-muted")}>
                    {plan.unit}
                  </span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2 text-sm",
                        plan.highlighted ? "text-white/80" : "text-ink/80 dark:text-white/70"
                      )}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/quote/"
                    size="md"
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    {plan.name === "Enterprise" ? "Request a Quote" : "Get Started"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card dark:bg-white/[0.015]">
        <Container>
          <SectionHeading eyebrow="Compare plans" title="What&apos;s included" />
          <div className="mt-14 overflow-x-auto rounded-2xl border border-border-subtle dark:border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-white dark:border-white/10 dark:bg-white/[0.02]">
                  <th className="px-6 py-4 font-semibold text-ink dark:text-white">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink dark:text-white">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink dark:text-white">Professional</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-border-subtle last:border-0 dark:border-white/10",
                      i % 2 === 0 ? "bg-transparent" : "bg-white/50 dark:bg-white/[0.015]"
                    )}
                  >
                    <td className="px-6 py-4 text-ink/80 dark:text-white/70">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      <Mark ok={row.starter} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Mark ok={row.pro} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Mark ok={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <Check className="mx-auto h-4 w-4 text-success" />
  ) : (
    <X className="mx-auto h-4 w-4 text-muted/40" />
  );
}
