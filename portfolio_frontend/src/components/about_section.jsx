"use client";
import { motion } from "framer-motion";

export default function About_section() {
  return (
    <div className="text-white space-y-8">
      <p className="text-3xl md:text-4xl font-bold text-cyan-500 text-center">About Me</p>
      <div className="flex flex-col md:flex-row items-center md:gap-24 gap-8">
        {/* LEFT SECTION - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/3"
        >
          <img
            src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="About Me"
            className="md:w-full h-120 w-88 auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* RIGHT SECTION - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-2/3 space-y-4"
        >
          <p className="text-base md:text-lg font-medium opacity-90 leading-relaxed">
            I am <span className="font-bold text-cyan-400">Ritesh Tamang</span>,
            a passionate Frontend Developer focused on building modern,
            responsive, and interactive web applications. I enjoy turning design
            ideas into functional websites using the latest web technologies.
          </p>
          <p className="text-sm md:text-base font-semibold opacity-70">
            My skills include React, Next.js, Tailwind CSS, and more. I am
            constantly exploring new frameworks and tools to make the web
            beautiful and efficient.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
