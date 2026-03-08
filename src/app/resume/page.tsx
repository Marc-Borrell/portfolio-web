"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumePage() {
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => router.push("/"), 400); // delay to set animation
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: exiting ? "100%" : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="min-h-screen bg-neutral-950 text-white flex flex-col"
    >
      <div className="sticky top-0 z-50 flex items-center px-6 py-4 bg-neutral-950/80 backdrop-blur-lg border-b border-white/10">
        <motion.button
          onClick={handleBack}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors text-sm font-medium"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to portfolio
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 px-4 py-6 md:px-10 md:py-8"
      >
        <iframe
          src="/resume.pdf"
          className="w-full h-[85vh] rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
          title="Marc Borrell — Resume"
        />
      </motion.div>
    </motion.div>
  );
}