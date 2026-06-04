"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { label } from "framer-motion/client";

const techStack = [
  { label: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",        color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
  { label: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",            color: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20" },
  { label: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
  { label: "C#",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",        color: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20" },
  { label: "Angular",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",      color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
  { label: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",        color: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20" },
  { label: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",        color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
  { label: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",              color: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20" },
  { label: "SQL",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",          color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
  { label: ".NET",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",color: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20" },
  {label: "AWS",          icon: "https://devicons.io/devicons/icons/aws.svg", color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20"},
  {label: "PostgreSQL",   icon: "https://devicons.io/devicons/icons/postgresql.svg", color: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20" },
];

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
          modern solutions with clean architecture and maintainable code.
          I enjoy working across both frontend and backend,
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

      <motion.h2
        className="text-2xl font-semibold text-neutral-402 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My tech stack
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.label}
            className={`flex flex-col items-center gap-2 px-5 py-3 rounded-2xl border ${tech.color} min-w-[80px]`}
          >
            <Image
              src={tech.icon}
              alt={tech.label}
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xs font-medium">{tech.label}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}