"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export function ParallaxText({ children, baseVelocity = 5 }: ParallaxTextProps) {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useTransform(scrollY, [0, 1000], [0, 5]);
  const x = useTransform(scrollVelocity, (latest) => {
    baseX.current = baseX.current + latest * baseVelocity;
    return baseX.current;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap flex-nowrap"
      >
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block">{children}</span>
      </motion.div>
    </div>
  );
}