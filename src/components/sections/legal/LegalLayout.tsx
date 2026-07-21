import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-ink dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>

        <div className="prose-legal mt-12 flex flex-col gap-8 text-[15px] leading-relaxed text-ink/80 dark:text-white/70">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink dark:text-white">{title}</h2>
      <div className="mt-3 flex flex-col gap-3">{children}</div>
    </div>
  );
}
