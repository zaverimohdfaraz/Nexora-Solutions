"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export function BlogGrid() {
  const [category, setCategory] = useState<(typeof BLOG_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Section className="pt-0">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === cat
                    ? "border-transparent bg-gradient-brand text-white shadow-glow"
                    : "border-border-subtle text-ink/70 hover:border-primary/30 hover:text-ink dark:border-white/10 dark:text-white/70"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-border-subtle bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03]"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => (
              <motion.article
                key={post.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
              >
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary/15 via-card to-accent/10 dark:from-primary/10 dark:via-white/[0.02] dark:to-accent/5">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary shadow-soft dark:bg-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-base font-semibold leading-snug text-ink dark:text-white">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 border-t border-border-subtle pt-4 text-xs text-muted dark:border-white/10">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted">
            No articles match your search — try a different term or category.
          </p>
        )}
      </Container>
    </Section>
  );
}
