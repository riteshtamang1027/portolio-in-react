import React from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-b border-gray-700">
      <div className=" flex items-center justify-between lg:px-32 md:px-8 sm:px-16 px-8 py-2">
        {/* left side div */}
        <div className="font-bold lg:text-2xl md:text-xl text-gray-800">
          <span className="text-gray-100 border-b-2 border-sky-700">Port</span>
          <span className="text-cyan-600 border-b-2 border-gray-200">
            Folio
          </span>
        </div>
        {/* center div */}

        <div className="md:flex items-center lg:gap-8 gap-6 hidden  font-semibold lg:text-lg">
          {navItems.map((item, index) => (
            <p
              key={index}
              className=" text-gray-100 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-700 after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-500"
            >
              {item}
            </p>
          ))}
        </div>

        {/* left side dive */}
        <div className="p-[1px] rounded-lg bg-gradient-to-r to-gray-600 from-sky-600 ">
          <button className="flex items-center gap-1 lg:px-3 px-2 lg:py-1 md:py-0.5 rounded-lg lg:text-base text-sm font-semibold cursor-pointer bg-gray-200 text-gray-900">
            Download CV{" "}
            <Download size={16} strokeWidth={2} className="hidden sm:flex" />
          </button>
        </div>
      </div>
    </div>
  );
}

const navItems = ["Home", "About", "Skill", "Services", "Portfolio", "Contact"];
