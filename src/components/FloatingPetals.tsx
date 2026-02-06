"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function FloatingPetals({ count = 20 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-pink-300/40"
          style={{
            left: `${petal.x}%`,
            top: "-20px",
            fontSize: `${petal.size}px`,
          }}
          animate={{
            y: [0, typeof window !== "undefined" ? window.innerHeight + 100 : 1000],
            x: [0, Math.sin(petal.id * 0.5) * 100, Math.cos(petal.id * 0.3) * 50],
            rotate: [petal.rotation, petal.rotation + 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          &#127801;
        </motion.div>
      ))}
    </div>
  );
}
