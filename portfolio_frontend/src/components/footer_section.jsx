"use client";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400">Ritesh Tamang</h2>
          <p className="text-gray-300 text-sm">
            Crafting modern web experiences with React, Next.js, and Tailwind CSS.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-400 text-xs">Building clean, responsive, and interactive web apps.</p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400 transition-all duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition-all duration-300">About</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-cyan-400 transition-all duration-300">Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition-all duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">Connect</h3>
          <div className="flex gap-4 mt-2">
            {socialIcons.map((icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                whileTap={{ scale: 0.95 }}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl p-2 rounded-full hover:bg-cyan-700/20"
              >
                <icon.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact / Newsletter */}
        <div className="space-y-2">
          <h3 className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">Get in Touch</h3>
          <p className="text-gray-300 text-sm">Interested in working together? Drop me a message!</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block mt-2 px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300"
          >
            Email Me
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-cyan-700 pt-6 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <span>&copy; {new Date().getFullYear()} Ritesh Tamang. All rights reserved.</span>
        <span className="text-gray-500 text-xs">Made with ❤️ and React + Tailwind</span>
      </div>
    </footer>
  );
}

// social icons with links
const socialIcons = [
  { icon: Facebook, link: "https://facebook.com/" },
  { icon: Linkedin, link: "https://linkedin.com/" },
  { icon: Instagram, link: "https://instagram.com/" },
  { icon: Github, link: "https://github.com/" },
];
