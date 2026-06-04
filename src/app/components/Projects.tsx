"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "M.O.N. Protocol", desc: "M.O.N Protocol is a web application made in Angular that integrates a Unity game inside it.", img: "/monLogo.png", link: "https://github.com/Marc-Borrell/web-game", tags: ["Angular", "Unity", "Node.js", "PostgreSQL"],},
  { title: "Air Quality Monitoring System", desc: "The application is made with Spring Boot and allows users to consult the air quality of a city by consuming data from an API.", img: "airQualityLogo.png", link: "https://github.com/Marc-Borrell/spring-pj7",tags: ["Spring Boot", "Java", "Thymeleaf","MongoDB"], }, 
  { title: "Rock-paper-scissors", desc: "Desktop Rock-Paper-Scissors game made with QT where the player competes against an AI opponent.", img: "/RPSLogo.png", link: "https://github.com/Marc-Borrell/rock-paper-scissors", tags: ["C++", "QT", "MQTT", "CMake"], },
  { title: "Space Expedition Manager", desc: "The application is made with C# and allows users to register and log in to manage a system for space expeditions.", img: "/expSpacial.png", link: "https://github.com/Marc-Borrell/expedicio-espacial",tags: ["C#", ".NET", "ADO.NET"], },
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
            className="min-w-[350px] max-w-[400px] p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400 transition-colors cursor-pointer flex flex-col min-h-[420px]"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-400 mt-3 line-clamp-4">{project.desc}</p>

            {project.tags && project.tags.length > 0 && (
  <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
      >
        {tag}
      </span>
    ))}
  </div>
)}

            <figure className="relative mt-auto overflow-hidden rounded-xl" style={{ height: "192px" }}>
                <img className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" src={project.img} alt={project.title} />

                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent rounded-t-xl pointer-events-none" />
            </figure>
            </a>
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