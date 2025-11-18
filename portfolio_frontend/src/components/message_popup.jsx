import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Message_popup() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  //  Prevent background scrolling when popover is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block mt-2 px-4 py-2 rounded-full border border-[var(--border-radious)] text-[var(--text-secondary)] font-semibold hover:bg-[var(--text-secondary)]  hover:text-black/80 transition-all duration-500 cursor-pointer"
      >
        Email me
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[var(--text-primary)]/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.form
              ref={popoverRef}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className=" bg-[var(--bg-popover)]/40 border w-[80%]  md:w-[28rem] max-h-[90vh] overflow-y-auto z-20 border-[var(--border-radious)] rounded-2xl p-6 space-y-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl"
            >
              {/* Close Button (Visible only on small screens) */}
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="absolute top-3 right-3 text-[var(--text-secondary)]  bg-[var(--footer-bg_hover)]/20 p-1 rounded-full   md:hidden
    "
              >
                <X />
              </button>

              <p className="text-xl font-semibold text-[var(--text-secondary)]">
                Send a Message
              </p>

              <div className="space-y-4 px-4 text-[var(--text-primary)]">
                <div>
                  <label className="text-sm  opacity-80">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)]/60 text-sm outline-none focus:border-[var(--border-radious)] transition"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)]/60 text-sm outline-none focus:border-[var(--border-radious)] transition"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your message..."
                    className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)]/60 text-sm outline-none focus:border-[var(--border-radious)] transition"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{
                    
                    boxShadow: "var(--shadow-glow)",
                  }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  className="w-max px-4 py-2 rounded-full bg-[var(--text-secondary)]/80 text-black font-semibold hover:bg-transparent hover:text-[var(--text-hover)] border border-transparent hover:border-[var(--border-radious)] transition-all duration-500 text-sm cursor-pointer hover:scale-105"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
