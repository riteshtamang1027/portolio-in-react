import React from "react";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

export default function Socialmedia_icon() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 0.8 }}
        className="flex items-center max-md:justify-center gap-4"
      >
        {mediaIcon.map((Icon, index) => (
          <Link to={Icon.m_url} key={index}>
            <Tooltip
              title={Icon.i_name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#06b6d4",
                    color: "black",
                    fontSize: "0.7rem",
                  },
                },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  borderColor: "#22d3ee",
                  boxShadow: "0px 0px 18px rgba(34,211,238,0.5)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="border p-2 rounded-full border-cyan-500 cursor-pointer"
              >
                <Icon.icon className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </Tooltip>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

// social media icons
const mediaIcon = [
  {
    icon: Facebook,
    i_name: "Facebook",
    m_url: "https://www.facebook.com/riteshlama007/",
  },
  {
    icon: Linkedin,
    i_name: "LinkedIn",
    m_url: "https://www.linkedin.com/in/ritesh-lama-62887435b",
  },
  {
    icon: Instagram,
    i_name: "Instagram",
    m_url: "https://www.instagram.com/riteshlama1027",
  },
  {
    icon: Github,
    i_name: "GitHub",
    m_url: "https://github.com/riteshtamang1027",
  },
];
