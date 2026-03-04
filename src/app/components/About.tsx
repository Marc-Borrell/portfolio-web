"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-10 px-6 max-w-5xl mx-auto text-center">
      
      <motion.div
        className="relative flex justify-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 w-72 h-72">
          <DotLottieReact
            src="https://lottie.host/3bdd9c0a-353a-4899-9f45-605ba7dfb3f3/PeVepJuPQU.lottie"
            loop
            autoplay
          />
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10 text-left text-neutral-400 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          I am a Spanish Junior Full-Stack Developer passionate about building
          modern web applications with clean architecture and maintainable code.
          I enjoy working across both frontend and backend environments,
          understanding how each layer connects within a complete system.
        </p>

        <p>
          My focus is on writing efficient, scalable and readable code while
          continuously improving my technical knowledge. I have experience
          deploying applications in AWS environments and learning production
          workflows that prepare me for real-world development teams.
        </p>
      </motion.div>

      <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-3xl font-bold text-white">Full-Stack</h3>
          <p className="text-sm text-neutral-500 mt-2">Frontend & Backend</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">AWS</h3>
          <p className="text-sm text-neutral-500 mt-2">Cloud Deployment</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">Clean Code</h3>
          <p className="text-sm text-neutral-500 mt-2">Best Practices</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">Growing</h3>
          <p className="text-sm text-neutral-500 mt-2">Continuous Learning</p>
        </div>
      </motion.div>

    </section>
  );
}