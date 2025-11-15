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
        className="inline-block mt-2 px-4 py-2 rounded-full border border-cyan-600 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-black/80 transition-all duration-500 cursor-pointer"
      >
        Email me
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
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
              className=" bg-gray-800/40 border w-[90%] max-w-md md:w-[28rem] max-h-[90vh] overflow-y-auto z-20 border-cyan-400/20 rounded-2xl p-6 space-y-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl"
            >
              {/* Close Button (Visible only on small screens) */}
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="absolute top-3 right-3 text-cyan-400  bg-gray-700/40 p-1 rounded-full  hover:bg-gray-700 transition md:hidden
    "
              >
                <X />
              </button>

              <p className="text-xl font-semibold text-cyan-400">
                Send a Message
              </p>

              <div className="space-y-4 px-4">
                <div>
                  <label className="text-sm opacity-80">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your message..."
                    className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(34,211,238,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  className="w-full py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-transparent hover:text-cyan-400 border border-transparent hover:border-cyan-400 transition-all duration-500"
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
