"use client";

import { motion } from "framer-motion";
import TypeIt from "typeit-react";
/*import Image from 'next/image';
import miDibujo from '../../../public/Loader cat.gif';*/
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Introduction() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-12 max-w-6xl mx-auto">
      <div className="flex flex-col items-center md:items-start flex-1">
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
        
         <TypeIt
         getBeforeInit={(instance) => {
        instance.type("I like coding ").pause(750).delete(12).pause(500).type("'m a developer, excited to learn and grow while creating efficient solutions ")
        .pause(750).delete(61).pause(500).type("welcome to my portfolio! :) ").pause(3000);

    // Remember to return it!
    return instance;
  }}
        options={{
          //strings: ["I'm a developer, excited to learn and grow while creating efficient solutions."],
          speed: 50,
          waitUntilVisible: true,
          loop: true,
        }} 
      />;
      </motion.p>
      
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start"
        >
          <a
            href="#about"
            className="px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Know more about me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-200"
          >
            Contact with me
          </a>
        </motion.div>
      </div>
      
      <motion.div
        className="flex-1 flex justify-center items-center relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {/* Background glow */}
        <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <motion.div
          animate={{ y: [0, -14, 0] }}
          //transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-80 h-80"
        >
          <DotLottieReact
            src="https://lottie.host/9f957502-1c01-43b0-bc71-762461410819/uB2iKM3lgo.lottie"
            loop
            autoplay
          />
        </motion.div>

        <motion.div
          className="absolute top-4 right-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2 text-sm text-cyan-300 font-mono shadow"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {"<Developer />"}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2 text-sm text-purple-300 font-semibold shadow"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          Open to work
        </motion.div>
      </motion.div>
      
    </section>
  );
}