import { Container } from "@/components/ui/Container";

const BRANDS =  [
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

export function LogoMarquee() {
  return (
    <section className="border-y border-border-subtle py-10 dark:border-white/10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Every project is crafted with performance, scalability, and user
          experience at its core.
        </p>
      </Container>
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
    </section>
  );
}
