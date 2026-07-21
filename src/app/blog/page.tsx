import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { Newsletter } from "@/components/sections/blog/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering, design, and product articles from the Nexora Solutions team.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
