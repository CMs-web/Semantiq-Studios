"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticTextProps {
  children: React.ReactNode;
}

export function MagneticText({ children }: MagneticTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = textRef.current?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    setPosition({
      x: distance.x * 0.1,
      y: distance.y * 0.1,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  return (
    <motion.div
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={springConfig}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}