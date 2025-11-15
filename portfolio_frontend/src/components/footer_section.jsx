"use client";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileUser,
  House,
  Mail,
  UserRound,
} from "lucide-react";
import Footer_bottom_section from "./footer_bottom_section";
import { Link } from "react-router";

export default function Footer_section() {
  return (
    <div className="bg-gradient-to-r from-cyan-900/70 via-cyan-800/70 -mb-8 to-cyan-900/70 text-gray-300 py-12 xl:px-64 lg:px-32 md:px-16 px-4 sm:px-32">
      <div className="w-full justify-between mx-auto grid  lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-x-24 gap-y-16">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 whitespace-nowrap">Ritesh Tamang</h2>
          <p className=" text-sm">
            Crafting modern web experiences with React, Next.js, and Tailwind
            CSS.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-400 text-xs">
              Building clean, responsive, and interactive web apps.
            </p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <p className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">
            Quick Links
          </p>
          <div className="flex flex-col gap-3">
            {quick_links.map((item, index) => (
              <Link to={item.path} key={index} className="cursor-pointer w-max px-2 group">
                {/* Icons */}
                <div className="flex items-center  gap-2 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-4 h-4 group-hover:text-cyan-600 transition-all duration-500 " />
                  {/* names */}
                  <div className="text-sm  flex items-center gap-0.5">
                    <p className="group-hover:text-cyan-500 text-sm duration-500 transition-all ">
                      {item.i_name}
                    </p>
                    <ArrowUpRight className="w-4 h-4 group-hover:text-cyan-600 mt-1 duration-500 origin-center group-hover:rotate-45 " />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <p className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">
            Connect
          </p>
          <div className="flex flex-col gap-2  w-max">
            {socialIcons.map((icon, index) => (
              <Link to={icon.url} key={index} className="group">
                <div className="flex items-center group-hover:scale-110 duration-300 transition-all origin-center cursor-pointer -ml-1 gap-1">
                  <motion.div className="text-gray-300 group-hover:text-cyan-400 transition-all duration-300 text-xl p-2 rounded-full group-hover:bg-cyan-700/20 ">
                    <icon.icon className="w-4 h-4 group-hover:text-cyan-600" />
                  </motion.div>
                  <p className="text-sm group-hover:text-cyan-600 duration-300">
                    {icon.s_name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact / Newsletter */}
        <div className="space-y-4">
          <p className="font-semibold text-cyan-300 uppercase tracking-wider text-sm">
            Get in Touch
          </p>
          <p className=" text-sm">
            Interested in working together? Drop me a message!
          </p>
          <p
            // href="mailto:your.email@example.com"
            className="inline-block mt-2 px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300"
          >
            Email Me
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <Footer_bottom_section />

    </div>
  );
}

// social icons with links
const socialIcons = [
  { icon: Facebook, s_name: "Facebook", url: "https://facebook.com/" },
  { icon: Linkedin, s_name: "Linkdin", url: "https://linkedin.com/" },
  { icon: Instagram, s_name: "Instagram", url: "https://instagram.com/" },
  { icon: Github, s_name: "Github", url: "https://github.com/" },
];

const quick_links = [
  { icon: House, i_name: "Home", path: "/" },
  { icon: UserRound, i_name: "About", path: "/about" },
  { icon: FileUser, i_name: "Resume", path: "/resume" },
  { icon: BriefcaseBusiness, i_name: "Project", path: "/portfolio" },
  { icon: Mail, i_name: "Contact", path: "/contact" },
];
