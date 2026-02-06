"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import valentines from "@/data/valentines.json";
import FloatingHearts from "@/components/FloatingHearts";
import CoupleIllustration from "@/components/CoupleIllustration";
import Link from "next/link";

function isUnlocked(dateStr: string): boolean {
  return true; // TODO: restore date logic before going live
  // const today = new Date();
  // today.setHours(0, 0, 0, 0);
  // const unlockDate = new Date(dateStr + "T00:00:00");
  // return today >= unlockDate;
}

export default function DayPage() {
  const params = useParams();
  const id = Number(params.id);

  const day = valentines.find((v) => v.id === id);

  if (!day) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="text-center">
          <p className="text-6xl mb-4">&#x1f494;</p>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">
            Day not found
          </h1>
          <Link
            href="/"
            className="text-pink-500 underline hover:text-pink-600"
          >
            Go back to calendar
          </Link>
        </div>
      </div>
    );
  }

  if (!isUnlocked(day.date)) {
    const formattedDate = new Date(day.date + "T00:00:00").toLocaleDateString(
      "en-US",
      { month: "long", day: "numeric" }
    );
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-6xl mb-4">&#x1f512;</p>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">
            Not yet, my love...
          </h1>
          <p className="text-gray-500 mb-6">
            This day unlocks on{" "}
            <span className="font-semibold text-pink-500">{formattedDate}</span>
            . Patience, beautiful.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Calendar
          </Link>
        </motion.div>
      </div>
    );
  }

  const isValentineDay = day.id === 14;
  const currentIndex = valentines.findIndex((v) => v.id === id);
  const prevDay = currentIndex > 0 ? valentines[currentIndex - 1] : null;
  const nextDay =
    currentIndex < valentines.length - 1 ? valentines[currentIndex + 1] : null;

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Backgrounds */}
      <div
        className={`fixed inset-0 bg-gradient-to-br ${day.bgGradient} transition-colors duration-1000`}
      />
      {isValentineDay && (
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,63,94,0.1),_transparent_70%)]" />
      )}

      <FloatingHearts count={isValentineDay ? 25 : 12} />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigations */}
        <motion.nav
          className="flex items-center justify-between px-4 sm:px-8 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Calendar</span>
          </Link>

          <motion.span
            className="text-sm text-gray-400"
            animate={isValentineDay ? { color: ["#f472b6", "#e879f9", "#f472b6"] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {new Date(day.date + "T00:00:00").toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </motion.span>
        </motion.nav>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8">
          <motion.article
            className="max-w-2xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Couple Illustration */}
            <motion.div
              className="text-center mb-6"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CoupleIllustration
                dayId={day.id}
                className={`mx-auto ${isValentineDay ? "w-48 h-48 sm:w-56 sm:h-56" : "w-40 h-40 sm:w-48 sm:h-48"}`}
              />
            </motion.div>

            {/* Day Name */}
            <motion.div
              className="text-center mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase
                  bg-gradient-to-r ${day.gradient} text-white shadow-lg`}
              >
                {day.dayName}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className={`text-center font-bold text-gray-800 mt-6 mb-8 leading-tight
                ${isValentineDay ? "text-3xl sm:text-5xl text-glow" : "text-2xl sm:text-4xl"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {day.title}
            </motion.h1>

            {/* Message Card */}
            <motion.div
              className={`relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl
                ${isValentineDay ? "romantic-glow border-2 border-pink-200/50" : "border border-white/40"}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-4 left-8 text-5xl text-pink-200 font-serif select-none">
                &#x201c;
              </div>

              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-light italic text-center pt-2">
                {day.message}
              </p>

              <div className="absolute -bottom-3 right-8 text-5xl text-pink-200 font-serif select-none">
                &#x201d;
              </div>

              {/* Signature */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-4" />
                <p className="text-sm text-pink-400 font-medium">
                  With all my love,
                </p>
                <p className="text-pink-500 text-sm mt-1 font-semibold">
                  Your Rishh &#x2764;&#xfe0f;
                </p>
              </motion.div>
            </motion.div>

            {/* Valentine's Day Extra Special Section */}
            {isValentineDay && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 rounded-2xl p-6 text-white shadow-2xl">
                  <motion.p
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Happy Valentine&#39;s Day, Pathure &#x2764;&#xfe0f;
                  </motion.p>
                  <p className="text-white/80 text-sm">
                    You are the most beautiful chapter of my life. From your Rishh,
                    today, tomorrow, and always.
                  </p>  
                </div>
              </motion.div>
            )}

            {/* Day Navigation */}
            <motion.div
              className="flex items-center justify-between mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {prevDay && isUnlocked(prevDay.date) ? (
                <Link
                  href={`/day/${prevDay.id}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors text-sm group"
                >
                  <svg
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {prevDay.emoji} {prevDay.dayName}
                </Link>
              ) : (
                <div />
              )}

              {nextDay && isUnlocked(nextDay.date) ? (
                <Link
                  href={`/day/${nextDay.id}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors text-sm group"
                >
                  {nextDay.dayName} {nextDay.emoji}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </motion.div>
          </motion.article>
        </div>
      </div>
    </main>
  );
}
