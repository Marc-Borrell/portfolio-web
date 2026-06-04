"use client";

import { motion } from "framer-motion";

type DotColor = "cyan" | "purple" | "dim";

const experiences = [
 /* {
    role: "Junior Full-Stack Developer",
    company: "Empresa · Barcelona",
    period: "Ene 2025 – Presente",
    current: true,
    description:
      "Desarrollo de aplicaciones web con Next.js y Laravel. Integración de APIs REST, gestión de bases de datos y despliegue de proyectos en producción sobre AWS.",
    tags: ["Next.js", "Laravel", "AWS", "Tailwind CSS", "MySQL"],
    dotColor: "cyan" as DotColor,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <image
          href="/lingua.png"
          x="0"
          y="0"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),
    iconBg: "bg-cyan-400/[0.08]",
    iconBorder: "border-cyan-400/10",
  }, */
  {
    role: "Software Development Intern · Internship",
    company: "EDCO DISSENY · Barcelona, Spain",
    period: "Nov 2025 – May 2026",
    current: false,
    description:
      "Contributed to the development of a time-tracking platform using Django and React Native, integrating Telegram automation, deploying backend services, and adding features to improve remote workforce management.",
    tags: ["Django", "React-Native", "testing", "SQLite"],
    dotColor: "purple" as DotColor,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <image
          href="/edco.png"
          x="0"
          y="0"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),
    iconBg: "bg-green-400/[0.08]",
    iconBorder: "border-green-400/10",
  },
  {
    role: "Full-stack Developer · Internship",
    company: "Lingua2 · Remote",
    period: "Jan 2025 – May 2025",
    current: false,
    description:
      "Maintained and managed cloud servers on DigitalOcean, developed backend services with Node.js and Express.js, handled database administration, performed testing and debugging, and provided full technical support throughout the development lifecycle.",
    tags: ["Node.js", "Express.js", "React Native", "MySQL", "Linux", "Expo"],
    dotColor: "dim" as DotColor,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <image
          href="/lingua.png"
          x="0"
          y="0"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),
    iconBg: "bg-amber-400/[0.07]",
    iconBorder: "border-amber-400/10",
  },
];

const dotStyles: Record<DotColor, string> = {
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]",
  purple: "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)]",
  dim: "bg-zinc-600",
};

const badgeStyles: Record<DotColor, string> = {
  cyan: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
  purple: "bg-indigo-400/10 text-indigo-300 border border-indigo-400/20",
  dim: "bg-white/5 text-neutral-500 border border-white/[0.08]",
};

const highlightTags = ["Django", "React-Native", "testing", "SQLite", "Node.js", "Express.js", "React Native", "MySQL", "Linux", "Expo"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
          Work
        </p>
        <h2 className="text-3xl font-bold">Experience</h2>
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

        {experiences.map((exp) => (
          <motion.div
            key={exp.role}
            variants={itemVariants}
            className="relative mb-7 last:mb-0"
          >
            {/* Dot */}
            <span
              className={`absolute -left-8 top-[26px] w-[9px] h-[9px] rounded-full border-2 border-neutral-950 ${dotStyles[exp.dotColor]}`}
            />

            {/* Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 transition-all duration-200 hover:bg-white/[0.07] hover:border-white/[0.18]">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex gap-5 items-start">
                {/* Icon */}
                <div
                  className={`shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center border ${exp.iconBg} ${exp.iconBorder}`}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {exp.role}
                    </h3>
                    <span className={`text-[11px] font-medium px-3 py-1 rounded-full shrink-0 ${badgeStyles[exp.dotColor]}`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[13px] text-neutral-500 mb-3 flex items-center gap-1.5">
                    {exp.current && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    )}
                    {exp.company}
                  </p>

                  <p className="text-[14px] text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md border ${highlightTags.includes(tag)
                            ? "text-cyan-400 border-cyan-400/15 bg-cyan-400/5"
                            : "text-neutral-500 border-white/7 bg-white/[0.04]"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}