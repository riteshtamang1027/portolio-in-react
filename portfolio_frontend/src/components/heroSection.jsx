"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <div className="text-white">
      {/* main container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="border border-[var(--border-radious)] px-4 py-2 bg-gradient rounded-2xl shadow-2xl space-y-8"
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-[var(--text-primary)] lg:text-3xl md:text-2xl text-3xl font-bold"
        >
          Port <span className="text-[var(--text-secondary)]">Folio</span>
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
                <p className="text-xl font-bold opacity-90 text-[var(--text-primary)]">Hi, I'm</p>
                <p className="lg:text-3xl text-2xl font-bold text-[var(--text-secondary)] ">{`Ritesh Tamang`}</p>
              </div>

              <p className="lg:text-2xl text-xl font-bold text-[var(--text-primary)]">
                I'm{" "}
                <span className="text-[var(--text-secondary)] ">
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

              <p className="font-semibold opacity-80 lg:text-base sm:text-sm text-xs tracking-widest text-[var(--text-primary)]">
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
                <Link to={"/resume"} className="relative overflow-hidden px-5 py-2 rounded-full font-semibold text-black bg-[var(--text-secondary)]/90 cursor-pointer border-transparent border transition-all duration-500 hover:scale-105 hover:text-[var(--text-hover)] hover:border-[var(--border-radious)] hover:bg-transparent">
                  <span className="relative  whitespace-nowrap">
                    Download CV
                  </span>
                </Link>
                <Link to={"/contact"} className="px-5 py-2 rounded-full font-semibold text-[var(--text-hover)] border border-[var(--border-radious)] hover:bg-[var(--text-secondary)]/90 hover:text-black/80 transition-all duration-500 whitespace-nowrap">
                  Contact Me
                </Link>
              </motion.div>

            </div>
          </div>

          {/* RIGHT SECTION - IMAGE */}
         
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              
              className="w-full max-w-[280px] md:max-w-[320px] mx-auto rounded-full overflow-hidden border-1 border-[var(--border-radious)]/60 shadow-[var(---shadow-primary)] transition-all duration-500 cursor-pointer order-1 md:order-2"
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
