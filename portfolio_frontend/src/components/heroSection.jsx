import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

import Typed from "typed.js";

export default function HeroSection() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:px-32 md:px-8 sm:px-16 px-8  text-white flex items-center justify-between gap-16">
      {/* profile container */}

      <div className="flex justify-center md:justify-start">
        <div className="relative w-[400px] h-[500px]">
          {/* Outer cyan glow - largest */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[60px]"></div>

          {/* Middle cyan glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[40px]"></div>

          {/* Inner bright cyan glow - moon effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-cyan-400/40 rounded-full blur-[20px]"></div>

          {/* Teardrop container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            {/* Teardrop shape with image */}
            <div className="relative w-full h-full teardrop-shape overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758797849614-aea4f74fb056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                alt="Chandni Chauhan"
                className="w-80 h-80 rounded-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      {/* text container */}
      <div className="space-y-8">
        {/* text area */}
        <div className="space-y-1.5">
          <p className="text-xl font-semibold">Hi,🫡 I'm </p>
          <p className="text-3xl font-bold">Ritesh Tamang </p>
          <p className="text-xl font-bold">
            And I'm a{" "}
            <span ref={el} className="text-cyan-500 font-bold text-2xl"></span>{" "}
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            labore sit doloremque, corporis ex fuga, animi quasi quo dolorem
            perferendis corrupti id hic distinctio. Est!
          </p>
        </div>

        {/* social media link */}
        <div className="flex items-center gap-4">
          {mediaIcon.map((Icon, index) => (
            <div
              key={index}
              className="border p-1 rounded-md bg-sky-800 cursor-pointer"
            >
              <Icon size={24} strokeWidth={1} />
            </div>
          ))}
        </div>

        {/* direct link bottom section */}
        <div className="flex items-center gap-8">
          {/* hire button */}
          <button className="border px-4 py-1.5 rounded-md cursor-pointer bg-cyan-700">
            Hire Me
          </button>
          {/* contact button */}
          <button className="border px-4 py-1.5 rounded-md cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

const mediaIcon = [Facebook, Linkedin, Instagram, Github];
