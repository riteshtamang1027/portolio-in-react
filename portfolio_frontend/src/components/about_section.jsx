"use client";
import { motion } from "framer-motion";

export default function About_section() {
  return (
    <div className="text-white my-16 px-4 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="border border-cyan-600 p-6 bg-[linear-gradient(to_left,var(--custom-a0),var(--custom-a10),var(--custom-a20))] rounded-2xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* LEFT SECTION - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="md:w-2/3 space-y-4 max-md:text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500">
              About Me
            </h2>
            <p className="text-base md:text-lg font-medium opacity-90 leading-relaxed">
              I am <span className="font-bold text-cyan-400">Ritesh Tamang</span>,
              a passionate Frontend Developer focused on building modern,
              responsive, and interactive web applications. I enjoy turning
              design ideas into fully functional websites using the latest web
              technologies.
            </p>
            <p className="text-sm md:text-base font-semibold opacity-70">
              My skills include React, Next.js, Tailwind CSS, and more. I am
              constantly exploring new frameworks and tools to make the web more
              beautiful and interactive.
            </p>
          </motion.div>

          {/* RIGHT SECTION - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{
              boxShadow: "0 0 35px rgba(34, 211, 238, 0.6)",
              borderColor: "#0ea5e9",
            }}
            className="w-full max-w-[280px] md:max-w-[320px] mx-auto rounded-full overflow-hidden border-2 border-cyan-500/60 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500 cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="About Me"
              className="w-full h-full object-cover rounded-full hover:scale-110 duration-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
