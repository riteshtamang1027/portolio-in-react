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
import Message_popup from "./message_popup";

export default function Footer_section() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="footer-gradient text-[var(--text-primary)]/70 py-12 xl:px-64 lg:px-32 md:px-16 px-4 sm:px-32"
    >
      <div className="w-full justify-between  grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-x-24 sm:gap-y-16 gap-y-8">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <p className="text-2xl font-bold text-[var(--text-secondary)] whitespace-nowrap">
            Ritesh Tamang
          </p>
          <p className=" text-sm">
            Crafting modern web experiences with React, Next.js, and Tailwind
            CSS.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[var(--text-primary)]/60 gray-400 text-xs">
              Building clean, responsive, and interactive web apps.
            </p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <p className="font-semibold text-[var(--text-hover)] uppercase tracking-wider text-sm">
            Quick Links
          </p>
          <div className="flex flex-col gap-3">
            {quick_links.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="cursor-pointer w-max px-2 group"
              >
                {/* Icons */}
                <div className="flex items-center  gap-2 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-4 h-4 group-hover:text-[var(--text-secondary)] transition-all duration-500 " />
                  {/* names */}
                  <div className="text-sm  flex items-center gap-0.5">
                    <p className="group-hover:text-[var(--text-secondary)] text-sm duration-500 transition-all ">
                      {item.i_name}
                    </p>
                    <ArrowUpRight className="w-4 h-4 group-hover:text-[var(--text-secondary)] mt-1 duration-500 origin-center group-hover:rotate-45 " />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <p className="font-semibold text-[var(--text-hover)] uppercase tracking-wider text-sm">
            Connect
          </p>
          <div className="flex flex-col gap-2  w-max">
            {socialIcons.map((icon, index) => (
              <Link to={icon.url} key={index} className="group">
                <div className="flex items-center group-hover:scale-110 duration-300 transition-all origin-center cursor-pointer -ml-1 gap-1">
                  <motion.div className="text-[var(--text-primary)]/70 group-hover:text-[var(--text-secondary)]transition-all duration-300 text-xl p-2 rounded-full group-hover:bg-[var(--footer-bg_hover)]/20 ">
                    <icon.icon className="w-4 h-4 group-hover:text-[var(--text-secondary)]" />
                  </motion.div>
                  <p className="text-sm group-hover:text-[var(--text-secondary)] duration-300">
                    {icon.s_name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact / Newsletter */}
        <div className="space-y-4">
          <p className="font-semibold text-[var(--text-hover)] uppercase tracking-wider text-sm">
            Get in Touch
          </p>
          <p className=" text-sm">
            Interested in working together? Drop me a message!
          </p>

          <Message_popup />
        </div>
      </div>

      {/* Bottom copyright */}
      <Footer_bottom_section />
    </motion.div>
  );
}

// social icons with links
const socialIcons = [
  {
    icon: Facebook,
    s_name: "Facebook",
    url: "https://www.facebook.com/riteshlama007/",
  },
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
