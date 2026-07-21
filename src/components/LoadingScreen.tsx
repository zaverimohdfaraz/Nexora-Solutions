"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedLogoMark } from "./AnimatedLogoMark";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("nexora-loaded")) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        return next >= 100 ? 100 : next;
      });
    }, 140);

    const timeout = setTimeout(() => {
      setProgress(100);
      sessionStorage.setItem("nexora-loaded", "1");
      setTimeout(() => setVisible(false), 450);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-5 bg-surface-dark"
        >
          <AnimatedLogoMark size={72} />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-lg font-bold tracking-[0.1em] text-white">
              NEXORA
            </p>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-brand"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Connect. Code. Create.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
