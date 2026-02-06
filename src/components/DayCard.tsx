"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CoupleIllustration from "./CoupleIllustration";

interface DayCardProps {
  id: number;
  dayName: string;
  emoji: string;
  title: string;
  date: string;
  gradient: string;
  isUnlocked: boolean;
  index: number;
}

export default function DayCard({
  id,
  dayName,
  emoji,
  title,
  date,
  gradient,
  isUnlocked,
  index,
}: DayCardProps) {
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={isUnlocked ? { scale: 1.05, y: -8 } : {}}
      whileTap={isUnlocked ? { scale: 0.98 } : {}}
      className={`relative overflow-hidden rounded-3xl p-6 h-full min-h-[220px] flex flex-col justify-between
        ${isUnlocked ? "cursor-pointer shadow-xl hover:shadow-2xl" : "cursor-not-allowed"}
        transition-shadow duration-500`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} ${
          isUnlocked ? "opacity-90" : "opacity-30"
        } transition-opacity duration-500`}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      {/* Shimmer effect for unlocked cards */}
      {isUnlocked && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
        />
      )}

      {/* Blur overlay for locked cards */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px] z-10" />
      )}

      {/* Content */}
      <div className="relative z-20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-black-500 bg-white/20 px-3 py-1 rounded-full">
            {formattedDate}
          </span>
          {!isUnlocked && (
            <span className="text-lg">&#x1f512;</span>
          )}
        </div>

        <div className="mb-2 drop-shadow-lg">
          {isUnlocked ? (
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CoupleIllustration dayId={id} className="w-28 h-28 mx-auto" />
            </motion.div>
          ) : (
            <div className="opacity-40 grayscale">
              <CoupleIllustration dayId={id} className="w-28 h-28 mx-auto" />
            </div>
          )}
        </div>

        <h3 className={`text-lg font-bold mb-1 ${isUnlocked ? "text-white" : "text-gray-500"}`}>
          {dayName}
        </h3>

        {isUnlocked ? (
          <p className="text-sm text-white/80 line-clamp-2">{title}</p>
        ) : (
          <p className="text-sm text-gray-400 italic">
            Unlocks on {formattedDate} &#x1f512;
          </p>
        )}
      </div>

      {/* Bottom glow for unlocked */}
      {isUnlocked && (
        <div className="relative z-20 mt-4">
          <motion.div
            className="flex items-center gap-1 text-white/90 text-sm font-medium"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Open with love
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Valentine's Day special badge */}
      {id === 14 && isUnlocked && (
        <motion.div
          className="absolute top-3 right-3 z-30 bg-white/30 backdrop-blur-md rounded-full px-3 py-1"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-bold text-white">&#x2728; Special</span>
        </motion.div>
      )}
    </motion.div>
  );

  if (isUnlocked) {
    return (
      <Link href={`/day/${id}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
