import type { Metadata } from "next";
import { CareersHero } from "@/components/sections/careers/CareersHero";
import { CareersBenefits } from "@/components/sections/careers/CareersBenefits";
import { OpenPositions } from "@/components/sections/careers/OpenPositions";
import { HiringProcess } from "@/components/sections/careers/HiringProcess";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Nexora Solutions — explore open roles, benefits, culture, and our hiring process.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <OpenPositions />
      <HiringProcess />
    </>
  );
}
