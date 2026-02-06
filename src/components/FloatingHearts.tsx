"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heartEmojis = ["\u2764\ufe0f", "\ud83d\udc95", "\ud83d\udc96", "\ud83d\udc97", "\ud83d\udc93", "\ud83c\udf39", "\u2728", "\ud83e\udd0d"];

interface Heart {
  id: number;
  x: number;
  emoji: string;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts({ count = 15 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      size: Math.random() * 16 + 12,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            bottom: "-40px",
          }}
          animate={{
            y: [0, -window?.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 60],
            opacity: [0, 1, 1, 0],
            rotate: [0, heart.id % 2 === 0 ? 20 : -20, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}
