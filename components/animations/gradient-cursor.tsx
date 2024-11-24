"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function GradientCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-50 opacity-30"
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{ type: "spring", mass: 0.2, stiffness: 100, damping: 15 }}
    >
      <div className="w-full h-full rounded-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-3xl" />
    </motion.div>
  );
}