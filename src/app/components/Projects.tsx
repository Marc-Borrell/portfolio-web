"use client";
import { motion } from "framer-motion";

const projects  =  [
  // Projects list example
  { title: "SaaS Dashboard", desc: "Panel admin con auth y analytics.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" },
  { title: "E-commerce", desc: "Tienda online optimizada para SEO.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" }, 
  { title: "Django app", desc: "Tienda online optimizada para SEO.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" },
]; 

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-400 mt-3">{project.desc}</p>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img className="rounded-base" src={project.img} />
            </a>
            </figure>
          </motion.div>
        ))}
      </div>
    </section>
  );
}