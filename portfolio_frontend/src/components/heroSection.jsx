"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Socialmedia_icon from "./socialmedia_icon";

export default function HeroSection() {
  return (
    <div className="text-white">
      {/* main container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="border border-cyan-600 px-4 py-2 bg-[linear-gradient(to_left,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] rounded-2xl shadow-2xl space-y-8"
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-white lg:text-3xl md:text-2xl text-3xl font-bold"
        >
          Port <span className="text-cyan-500">Folio</span>
        </motion.p>

        {/* content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full xl:gap-16 gap-4 py-2 sm:px-4">
          {/* LEFT SECTION */}
          <div className="md:w-2/3 space-y-8 md:order-1 order-2 max-md:text-center py-2 max-md:px-4">
            {/* introduction */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
              className="text-base space-y-2 md:space-y-4 "
            >
              <div className="space-y-1 md:space-y-2">
                <p className="text-xl font-bold opacity-90">Hi, I'm</p>
                <p className="lg:text-3xl text-2xl font-bold text-cyan-500">{`Ritesh Tamang`}</p>
              </div>

              <p className="lg:text-2xl text-xl font-bold">
                I'm{" "}
                <span className="text-cyan-500">
                  <Typewriter
                    words={["Frontend Developer", "Learning Next.Js"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>

              <p className="font-semibold opacity-80 lg:text-base sm:text-sm text-xs tracking-widest">
                I love turning ideas into interactive, modern web experiences.
                Passionate about crafting responsive UIs and learning the latest
                web technologies to make the web faster and more beautiful.
              </p>
            </motion.div>

            {/* CTA & Social */}
            <div className="flex flex-col gap-6 2xl:flex-row max-md:items-center max-md:justify-center ">
              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
                className="flex gap-4 justify-center sm:justify-start"
              >
                <button className="relative overflow-hidden px-5 py-2 rounded-full font-semibold text-black bg-cyan-500/90 cursor-pointer border-transparent border transition-all duration-500 hover:scale-105 hover:text-cyan-400 hover:border-cyan-600 hover:bg-transparent">
                  <span className="relative z-10 whitespace-nowrap">
                    Download CV
                  </span>
                </button>
                <button className="px-5 py-2 rounded-full font-semibold text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-500 whitespace-nowrap">
                  Contact Me
                </button>
              </motion.div>

              <Socialmedia_icon />
            </div>
          </div>

          {/* RIGHT SECTION - IMAGE */}
         
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{
              
                boxShadow: "0 0 35px rgba(34, 211, 238, 0.6)", // cyan glowing shadow
                borderColor: "#0ea5e9",
              }}
              className="w-full max-w-[280px] md:max-w-[320px] mx-auto rounded-full overflow-hidden border-2 border-cyan-500/60 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500 cursor-pointer order-1 md:order-2"
            >
              <img
                className="w-full h-full object-cover rounded-full hover:scale-110 duration-500"
                src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
                alt="Profile"
              />
            </motion.div>

         
        </div>
      </motion.div>
    </div>
  );
}
