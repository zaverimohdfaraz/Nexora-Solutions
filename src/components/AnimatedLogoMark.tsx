"use client";

import { motion } from "framer-motion";

const NODES = [
  { cx: 30, cy: 30, delay: 0.9 },
  { cx: 90, cy: 30, delay: 1.0 },
  { cx: 30, cy: 90, delay: 1.1 },
  { cx: 90, cy: 90, delay: 1.2 },
];

export function AnimatedLogoMark({
  size = 120,
  loop = false,
  className,
}: {
  size?: number;
  loop?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="animGrad"
          x1="30"
          y1="30"
          x2="90"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>

        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* LIGHT MODE */}
      <g className="dark:hidden">
        <motion.path
          d="M30 30V90M90 30V90M30 30L90 90"
          stroke="#000000"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {NODES.map((node, i) => (
          <motion.circle
            key={`light-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={7}
            fill="#000000"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              loop
                ? { scale: [0, 1.3, 1, 1.15, 1], opacity: 1 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              loop
                ? {
                    scale: {
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 1.4 + i * 0.3,
                      ease: "easeInOut",
                      delay: node.delay,
                    },
                    opacity: {
                      duration: 0.4,
                      delay: node.delay,
                    },
                  }
                : {
                    duration: 0.4,
                    delay: node.delay,
                    ease: "backOut",
                  }
            }
            style={{
              transformOrigin: `${node.cx}px ${node.cy}px`,
            }}
          />
        ))}
      </g>

      {/* DARK MODE */}
      <g className="hidden dark:block">
        <motion.path
          d="M30 30V90M90 30V90M30 30L90 90"
          stroke="url(#animGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {NODES.map((node, i) => (
          <motion.circle
            key={`dark-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={7}
            fill="url(#animGrad)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              loop
                ? { scale: [0, 1.3, 1, 1.15, 1], opacity: 1 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              loop
                ? {
                    scale: {
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 1.4 + i * 0.3,
                      ease: "easeInOut",
                      delay: node.delay,
                    },
                    opacity: {
                      duration: 0.4,
                      delay: node.delay,
                    },
                  }
                : {
                    duration: 0.4,
                    delay: node.delay,
                    ease: "backOut",
                  }
            }
            style={{
              transformOrigin: `${node.cx}px ${node.cy}px`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}