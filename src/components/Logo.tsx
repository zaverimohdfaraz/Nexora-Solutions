import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
  showTagline = false,
}: {
  className?: string;
  markOnly?: boolean;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Nexora Solutions — Home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-black dark:text-[#2563EB]"
      >
        {/* N Logo */}
        <path
          d="M11.5 11.5V28.5M28.5 11.5V28.5M11.5 11.5L28.5 28.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="11.5" cy="11.5" r="2.4" fill="currentColor" />
        <circle cx="28.5" cy="11.5" r="2.4" fill="currentColor" />
        <circle cx="11.5" cy="28.5" r="2.4" fill="currentColor" />

        <circle
          cx="28.5"
          cy="28.5"
          r="2.4"
          fill="currentColor"
          className="origin-center transition-transform duration-300 group-hover:scale-125"
        />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-[0.08em] text-ink dark:text-white">
            NEXORA
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
            {showTagline ? "Connect. Code. Create." : "Solutions"}
          </span>
        </span>
      )}
    </Link>
  );
}