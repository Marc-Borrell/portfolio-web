"use client";

import { motion } from "framer-motion";

const education = [
  /* {
    degree: "Applied Computer Science — Artificial Intelligence Major",
    school: "Thomas More  · Geel, Belgium",
    period: "2026 – Actuallity",
    description:
      "Bachelor's degree program in Applied Computer Science with specialization in Artificial Intelligence. Focused on advanced software development, data engineering, machine learning, enterprise applications, and modern software architectures.",
    tags: ["Java",".NET","Software Engineering","Machine Learning","Data Science","Data Engineering","Business Intelligence","Cloud & DevOps","Web Development", "Application Security","Software Architecture", "Enterprise Systems"],
    dotColor: "cyan" as const,
  }, */
  {
    degree: "Web Application Development", 
    school: "Escola Jesuïtes el Clot · Barcelona, Spain",
    period: "2025 – 2026",
    description:
      "Higher vocational training focused on full-stack web development, covering front-end and back-end technologies, databases, web services, UX/UI design, and application deployment.",
    tags: ["HTML/CSS", "JavaScript", "TypeScript", "PHP", "Java", "MySQL", "MongoDB", "Angular", "Vue.js", "Spring Boot", "Laravel", "Deployment","Express.js","Node.js"],
    dotColor: "purple" as const,
  },
  {
    degree: "Multiplatform Application Development", 
    school: "Escola Jesuïtes el Clot · Barcelona, Spain",
    period: "2023 – 2025",
    description:
      "Higher vocational training specialized in software development. Foundations of Java, C#, mobile application development, SQL and NoSQL databases, software architecture, distributed systems, and enterprise applications.",
    tags: ["Java", "Python","C#","C++",".NET","Android","MySQL","MariaDB","MongoDB","Big Data","IoT","UML","Unity","QT"],
    dotColor: "green" as const,
  },
];

const dotStyles = {
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]",
  purple: "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)]",
  green: "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]",
  dim: "bg-zinc-600",
};

const badgeStyles = {
  cyan: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
  purple: "bg-indigo-400/10 text-indigo-300 border border-indigo-400/20",
  green: "bg-green-500/10 text-green-400 border border-green-300/20",
  dim: "bg-white/5 text-neutral-500 border border-white/8",
};

const highlightTags = ["HTML/CSS", "JavaScript", "TypeScript","MongoDB", "PHP", "Java", "MySQL", "Angular", "Vue.js", "Spring Boot", "Laravel", "Deployment","Express.js","Node.js",
                        "Java", "Python","C#",".NET","Android","MySQL","MariaDB","MongoDB","Big Data","IoT","UML","Unity","C++","QT",
                        "Java",".NET","Software Engineering","Machine Learning","Data Science","Data Engineering","Business Intelligence","Cloud & DevOps","Web Development", "Application Security","Software Architecture", "Enterprise Systems"
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 py-24 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-600 mb-2">
          Background
        </p>
        <h2 className="text-3xl font-bold">Education</h2>
      </motion.div>

      {/* Timeline wrapper */}
      <motion.div
        className="relative pl-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-indigo-400/30 to-transparent" />

        {education.map((item) => (
          <motion.div
            key={item.degree}
            variants={itemVariants}
            className="relative mb-7 last:mb-0"
          >
            {/* Dot */}
            <span
              className={`absolute -left-8 top-[22px] w-[9px] h-[9px] rounded-full border-2 border-neutral-950 ${dotStyles[item.dotColor]}`}
            />

            {/* Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 transition-all duration-200 hover:bg-white/[0.07] hover:border-white/[0.18]">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {item.degree}
                  </h3>
                  <span className={`text-[11px] font-medium px-3 py-1 rounded-full shrink-0 ${badgeStyles[item.dotColor]}`}>
                    {item.period}
                  </span>
                </div>

                <p className="text-[13px] text-neutral-500 mb-3">{item.school}</p>

                <p className="text-[14px] text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md border ${
                          highlightTags.includes(tag)
                            ? badgeStyles[item.dotColor]
                            : "text-neutral-500 border-white/7 bg-white/[0.04]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}