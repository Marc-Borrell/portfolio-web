"use client";

import { color, motion } from "framer-motion";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    value: "marcboso2005@gmail.com",
    href: "mailto:marcboso2005@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    label: "Telegram",
    value: "@Marc_Borrell",
    href: "https://t.me/Marc_Borrell",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.944 0A12 12 0 1 0 24 12 12 12 0 0 0 11.944 0Zm4.962 7.224-1.49 7.032c-.1.484-.374.6-.756.374l-2.09-1.54-1.006.974c-.112.112-.207.207-.425.207l.15-2.14 3.9-3.52c.168-.15-.037-.232-.262-.082L7.34 13.155l-2.08-.648c-.452-.14-.46-.452.097-.668l8.107-3.123c.376-.136.705.092.582.508Z"/>
      </svg>
    ),
    color: "from-sky-400 to-cyan-500",
    glow: "rgba(56,189,248,0.3)",
  },
  {
    label: "LinkedIn",
    value: "Marc Borrell",
    href: "https://www.linkedin.com/in/marc-borrell-soler-8868a7375",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    label: "GitHub",
    value: "Marc-Borrell",
    href: "https://github.com/Marc-Borrell",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: "from-neutral-300 to-neutral-500",
    glow: "rgba(200,200,200,0.2)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center px-6 py-24 max-w-4xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">
          Let's talk
        </h2>
        <p className="mt-4 text-neutral-400 text-lg max-w-md mx-auto">
          Open to new opportunities, collaborations, or just a good conversation.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.map((c) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 backdrop-blur-lg overflow-hidden cursor-pointer"
            style={{
              boxShadow: `0 0 0 0 ${c.glow}`,
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = `0 8px 40px 0 ${c.glow}`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = `0 0 0 0 ${c.glow}`)
            }
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            <div
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} text-white shrink-0 shadow-lg`}
            >
              {c.icon}
            </div>

            <div className="relative z-10 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-0.5">
                {c.label}
              </span>
              <span className={`font-semibold text-white group-hover:bg-gradient-to-r group-hover:${c.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                {c.value}
              </span>
            </div>

            <div className="relative z-10 ml-auto text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom divider */}
      <motion.div
        className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />

      <motion.p
        className="mt-6 text-neutral-600 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Marc Borrell - Built with  <Link href="https://nextjs.org/" target="_blank" className="text-blue-600 hover:text-purple-500"> Next.js </Link> and <Link href="https://tailwindcss.com/" target="_blank" className="text-blue-600 hover:text-purple-500"> Tailwind CSS </Link>
      </motion.p>
    </section>
  );
}