import type { Metadata } from "next";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing packages from Nexora Solutions — Starter, Professional, and Enterprise plans, plus a full feature comparison.",
};

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <FAQ />
      <CTA />
    </>
  );
}
