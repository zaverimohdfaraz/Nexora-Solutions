import type { Metadata } from "next";
import { PortfolioHero } from "@/components/sections/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore case studies from Nexora Solutions — SaaS dashboards, e-commerce storefronts, AI automation, and mobile apps we've shipped.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTA />
    </>
  );
}
