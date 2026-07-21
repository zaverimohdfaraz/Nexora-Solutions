"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border-subtle bg-card p-10 text-center shadow-card dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-ink dark:text-white">
            Get new articles in your inbox
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            One email a month, no spam — just what we&apos;re learning from
            building software.
          </p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-success">
              <CheckCircle2 className="h-4 w-4" />
              You&apos;re subscribed — welcome aboard!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mx-auto mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border-subtle bg-white p-1.5 pl-4 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-brand px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
