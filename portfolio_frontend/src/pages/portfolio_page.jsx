"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Portfolio_section() {
  const projects = [
    {
      id: 1,
      title: "Next.js Blog Platform",
      description: "A full-stack blog app built with Next.js, Drizzle ORM, and Cloudinary for image uploads.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com/yourusername/blog-platform",
      live: "https://yourblog.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, animations, and contact form.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.vercel.app",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description: "Modern e-commerce web app built using React, Redux, and TailwindCSS.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] text-white py-16 px-6 md:px-16 xl:px-64"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="space-y-2">
            
        <p className="text-3xl md:text-4xl font-bold text-cyan-400">
          My Projects
        </p>
        <p className="text-gray-300 ">
          A few of the things I’ve built recently
        </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay:project.id*0.2  }}
            // whileHover={{ scale: 1.03 ,duration:0.7}}
            className="relative bg-gray-900/50 border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-400/70 transition-all cursor-pointer hover:scale-105 duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-110 duration-500"
            />

            {/* Content */}
            <div className="p-4 space-y-4">
              <p className="text-xl font-semibold text-cyan-400">
                {project.title}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-black font-semibold bg-cyan-400/90 px-3 py-1 rounded-full hover:bg-cyan-500 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-cyan-400 font-semibold border border-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-400/10 transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
