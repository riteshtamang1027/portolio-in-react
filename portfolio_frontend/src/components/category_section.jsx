"use client";
import { motion } from "framer-motion";
import { Code, Layout, Server } from "lucide-react"; // Example icons, you can change

export default function Category_section() {
  return (
    <div className="text-white    w-full space-y-8">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-cyan-500 text-center "
      >
        My Expertise
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20))] border border-cyan-600 rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <div className="flex items-center gap-4">{category.icon}</div>
            <p className="text-xl font-bold text-cyan-500 whitespace-nowrap">{category.title}</p>
            <p className="text-sm font-medium opacity-80 ">
              {category.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces using React, Next.js, and Tailwind CSS.",
    icon: <Code size={28} className="text-cyan-500" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating clean and modern designs, focusing on user experience and visual appeal.",
    icon: <Layout size={28} className="text-cyan-500" />,
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Working with APIs, databases, and server-side logic to build full-stack applications.",
    icon: <Server size={28} className="text-cyan-500" />,
  },
];
