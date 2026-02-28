"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Hello, I'm Marc
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg text-neutral-400 max-w-xl"
      >
       I'm a developer, excited to learn and grow while creating efficient solutions.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#projects"
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
      >
        Projects
      </motion.a>
    </section>
  );
}