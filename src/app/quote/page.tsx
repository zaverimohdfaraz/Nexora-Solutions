import type { Metadata } from "next";
import { QuoteHero } from "@/components/sections/quote/QuoteHero";
import { QuoteForm } from "@/components/sections/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a project quote from Nexora Solutions — tell us your budget, timeline, and requirements.",
};

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <QuoteForm />
    </>
  );
}
