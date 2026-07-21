"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const COLORS = ["#2563EB", "#06B6D4", "#10B981", "#1E40AF"];

export default function ThankYouPage() {
  // A small, fixed set of confetti pieces — cheap CSS animations, no canvas.
  const pieces = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        delay: Math.random() * 0.4,
        duration: 2.2 + Math.random() * 1.2,
        color: COLORS[i % COLORS.length],
        rotate: Math.round(Math.random() * 180),
      })),
    []
  );

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: -40, opacity: 0, rotate: 0 }}
            animate={{ y: "100vh", opacity: [0, 1, 1, 0], rotate: p.rotate }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
            className="absolute top-0 h-2.5 w-2.5 rounded-sm"
            style={{ left: `${p.left}%`, backgroundColor: p.color }}
          />
        ))}
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
        >
          <CheckCircle2 className="h-20 w-20 text-success" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-3xl font-bold text-ink dark:text-white sm:text-4xl"
        >
          Thank you — your request is in!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-3 max-w-md text-muted"
        >
          We've received your details and will get back to you within one
          business day with next steps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
