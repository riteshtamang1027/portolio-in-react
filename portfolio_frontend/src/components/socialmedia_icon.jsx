import React from "react";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";


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
          <div key={index}>
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
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// social media icons
const mediaIcon = [
  { icon: Facebook, i_name: "Facebook" },
  { icon: Linkedin, i_name: "LinkedIn" },
  { icon: Instagram, i_name: "Instagram" },
  { icon: Github, i_name: "GitHub" },
];
