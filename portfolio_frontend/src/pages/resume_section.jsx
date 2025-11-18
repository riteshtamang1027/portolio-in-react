"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume_section() {
  const skills = {
    Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"],
    Styling: ["Tailwind CSS", "MUI", "Framer Motion", "ShadCN/UI"],
    Backend: ["Node.js", "Express.js"],
    Database: ["PostgreSQL", "Drizzle ORM", "MongoDB"],
    Tools: ["Git", "GitHub", "Cloudinary", "Figma", "VS Code"],
  };

  const projects = [
    {
      title: "Blog Application",
      description:
        "A full-stack blog platform built with Next.js, Drizzle ORM, and Cloudinary. Users can create, edit, and like articles. Authentication via Clerk.",
      tech: "Next.js • PostgreSQL • Drizzle ORM • Cloudinary",
      link: "#", // add your GitHub or live demo link
    },
    {
      title: "Movie Search App",
      description:
        "A responsive web app that fetches and displays movie data using the OMDb API. Clean design and fast search experience.",
      tech: "React.js • Tailwind CSS • API Integration",
      link: "#",
    },
  ];

  const certificates = [
    "JavaScript Algorithms and Data Structures — freeCodeCamp",
    "Responsive Web Design — Coursera",
  ];

  return (
    <div className="text-[var(--text-primary)] min-h-screen w-full py-12 xl:px-64 lg:px-32 md:px-16 px-8 sm:px-32 bg-gradient">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header */}
        <p className="text-3xl md:text-4xl font-bold text-center text-[var(--text-secondary)]">
          Resume
        </p>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <p className="text-xl font-semibold text-[var(--text-secondary)] ">
            Professional Summary
          </p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            I’m a passionate Frontend Developer specializing in building modern,
            responsive, and user-friendly web applications using React, Next.js,
            and Tailwind CSS. I love turning complex ideas into smooth digital
            experiences and constantly learning new technologies to grow as a
            developer.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Skills
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <p className="text-[var(--text-secondary)]/90 font-semibold">
                  {category}
                </p>
                <ul className="list-disc list-inside text-sm opacity-90 space-y-1 px-1">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Education
          </p>
          <div className="space-y-1">
            <p className="font-semibold text-base opacity-90">
              Bachelor of Science in Information Technology (Honours) BSc (Hons)
              IT.
            </p>
            <p className="text-sm opacity-80">
              Asia Pacific University of Technology and Innovation (APU) —
              2025–Present
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <p className="text-xl font-semibold text-[var(--text-secondary)] ">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  borderColor: "var(--border-color)",
                  boxShadow: "var(--shadow-glow)",
                }}
                className="border border-[var(--border-radious)] rounded-xl p-4  cursor-pointer space-y-4  duration-500 transition-all"
              >
                <p className="text-[var(--text-secondary)]/90 font-semibold">
                  {project.title}
                </p>

                <div className="space-y-1">
                  <p className="text-sm opacity-90 ">{project.description}</p>
                  <p className="text-xs text-[var(--text-secondary)]/60 italic">
                    {project.tech}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] text-xs underline inline-block hover:text-[var(--text-secondary)]/80"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Certificates
          </p>
          <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
            {certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </motion.div>

        {/* Download Button */}
        <div className="flex justify-center">
          <motion.a
            href="/Ritesh_Tamang_CV.pdf" // replace with your actual file path
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "var(--shadow-glow)",
            }}
            className="flex items-center gap-2 bg-[var(--text-secondary)] text-[var(--tooltip-color)] font-semibold px-6 py-2 rounded-full hover:bg-transparent hover:text-[var(--text-hover)] border border-transparent hover:border-[var(--border-radious)] transition-all duration-500"
          >
            <Download className="w-5 h-5" /> Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
