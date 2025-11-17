import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiCloudinary,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const skills = [
  { name: "React", icon: SiReact },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Drizzle ORM",
    icon: TbDatabase,
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
  },
];

export default function Techstack_section() {
  return (
    <div>
      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="space-y-8"
      >
        <p className="text-3xl font-bold max-sm:text-2xl text-cyan-400">
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill,index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 px-4 py-1 border border-cyan-500/40 rounded-full text-sm text-cyan-300 bg-gray-800/60"
            >
              <skill.icon   className="text-cyan-400 md:w-6 md:h-6 w-4 h-4" />
              <span className="md:text-base text-sm">{skill.name}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
