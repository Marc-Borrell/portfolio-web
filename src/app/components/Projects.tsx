"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "SaaS Dashboard", desc: "Panel admin con auth y analytics.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" },
  { title: "E-commerce", desc: "Tienda online optimizada para SEO.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" },
  { title: "Django app", desc: "App backend con Django REST.", img: "https://i.pinimg.com/236x/14/06/50/140650eae0f0311d165f94e168404891.jpg", link: "https://github.com/Marc-Borrell" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-34 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="overflow-x-auto flex space-x-6 pb-4 py-4 projects-scroll">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="min-w-[350px] max-w-[400px] p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400 transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-400 mt-3">{project.desc}</p>
            <br />

            <figure className="relative w-full h-50 overflow-hidden rounded-xl">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" src={project.img} alt={project.title} />
              </a>
            </figure>
          </motion.div>
        ))}
      </div>

      {/* Scrollbar personalizada */}
      <style jsx>{`
        .projects-scroll {
          scrollbar-width: thin;
          scrollbar-color: #22d3ee22 transparent;
        }
        .projects-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .projects-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .projects-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #22d3ee, #818cf8);
          border-radius: 999px;
        }
        .projects-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #06b6d4, #6366f1);
        }
      `}</style>
    </section>
  );
}