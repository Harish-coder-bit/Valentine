"use client";

import { motion } from "framer-motion";
import valentines from "@/data/valentines.json";
import DayCard from "@/components/DayCard";
import FloatingPetals from "@/components/FloatingPetals";

function isUnlocked(dateStr: string): boolean {
  return true; // TODO: restore date logic before going live
  // const today = new Date();
  // today.setHours(0, 0, 0, 0);
  // const unlockDate = new Date(dateStr + "T00:00:00");
  // return today >= unlockDate;
}

export default function Home() {
  const unlockedCount = valentines.filter((v) => isUnlocked(v.date)).length;

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,113,133,0.15),_transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(167,139,250,0.1),_transparent_50%)]" />

      <FloatingPetals count={15} />

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-5xl sm:text-6xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &#x1f495;
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3">
            <span className="shimmer-text">Valentine Week</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-pink-400 mb-2">
            Love Calendar
          </h2>

          <motion.p
            className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A little something I made just for you, Pathure. Each day holds a piece of my
            heart. Unlock them one by one, my love. &#x2014; Your Rishh
          </motion.p>

          {/* Progress indicator */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-1.5">
              {valentines.map((v, i) => (
                <motion.div
                  key={v.id}
                  className={`w-2.5 h-2.5 rounded-full ${
                    isUnlocked(v.date)
                      ? "bg-gradient-to-r from-pink-400 to-rose-500"
                      : "bg-gray-200"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">
              {unlockedCount}/8 unlocked
            </span>
          </motion.div>
        </motion.header>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-12">
          {valentines.map((day, index) => (
            <DayCard
              key={day.id}
              id={day.id}
              dayName={day.dayName}
              emoji={day.emoji}
              title={day.title}
              date={day.date}
              gradient={day.gradient}
              isUnlocked={isUnlocked(day.date)}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-sm text-pink-300">
            Made with &#x2764;&#xfe0f; by Harish, for his Pungdi
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
