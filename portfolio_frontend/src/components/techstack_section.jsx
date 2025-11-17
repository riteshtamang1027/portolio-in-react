import React from "react";
import { motion } from "framer-motion";

export default function Techstack_section() {
  return (
    <div>
      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="space-y-4"
      >
        <p className="text-3xl font-bold max-sm:text-2xl text-cyan-400">
          {" "}
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Drizzle ORM",
            "Cloudinary",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-4 py-1 border border-cyan-500/40 rounded-full text-sm text-cyan-300 bg-gray-800/60"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
