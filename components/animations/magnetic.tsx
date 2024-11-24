"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
}

export function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    controls.start({
      x: distance.x * 0.1,
      y: distance.y * 0.1,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}