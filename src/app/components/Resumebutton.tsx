"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ResumeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/resume");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-semibold overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        variants={{ hover: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.3 }}
      />

      {/* Glowing border on hover */}
      <motion.span
        className="absolute inset-0 rounded-full border border-cyan-400/0"
        variants={{ hover: { borderColor: "rgba(34,211,238,0.5)" } }}
        transition={{ duration: 0.3 }}
      />

      {/* Document icon */}
      <motion.span
        className="relative z-10 text-neutral-400 group-hover:text-cyan-400 transition-colors"
        variants={{ hover: { rotate: -8, scale: 1.1 } }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </motion.span>

      <span className="relative z-10">My Resume</span>

      {/* Arrow that slides in on hover */}
      <motion.span
        className="relative z-10 text-cyan-400"
        initial={{ x: -4, opacity: 0 }}
        variants={{ hover: { x: 0, opacity: 1 } }}
        transition={{ duration: 0.2 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.span>
    </motion.button>
  );
}