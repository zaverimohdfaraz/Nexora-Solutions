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
      {/* Light Mode Logo */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 dark:hidden"
      >
        <path
          d="M11.5 11.5V28.5M28.5 11.5V28.5M11.5 11.5L28.5 28.5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="11.5" cy="11.5" r="2.4" fill="#000000" />
        <circle cx="28.5" cy="11.5" r="2.4" fill="#000000" />
        <circle cx="11.5" cy="28.5" r="2.4" fill="#000000" />
        <circle
          cx="28.5"
          cy="28.5"
          r="2.4"
          fill="#000000"
          className="origin-center transition-transform duration-300 group-hover:scale-125"
        />
      </svg>

      {/* Dark Mode Logo */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden shrink-0 dark:block"
      >
        <defs>
          <linearGradient
            id="navGrad"
            x1="10"
            y1="10"
            x2="30"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        <path
          d="M11.5 11.5V28.5M28.5 11.5V28.5M11.5 11.5L28.5 28.5"
          stroke="url(#navGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="11.5" cy="11.5" r="2.4" fill="url(#navGrad)" />
        <circle cx="28.5" cy="11.5" r="2.4" fill="url(#navGrad)" />
        <circle cx="11.5" cy="28.5" r="2.4" fill="url(#navGrad)" />
        <circle
          cx="28.5"
          cy="28.5"
          r="2.4"
          fill="url(#navGrad)"
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