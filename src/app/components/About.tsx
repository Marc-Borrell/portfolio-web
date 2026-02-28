"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">About me</h2>
        <p className="text-neutral-400 leading-relaxed">
          I am a Spanish developer passionate about backend development, although I also 
          have experience in frontend and other development environments, which allows me to 
          adapt to different technologies and projects.
          I have experience working with AWS cloud and have deployed code using Sered.
        </p>
      </motion.div>
    </section>
  );
}