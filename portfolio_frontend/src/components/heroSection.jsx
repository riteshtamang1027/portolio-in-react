import Tooltip from "@mui/material/Tooltip";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
export default function heroSection() {
  return (
    <div className="xl:px-64 lg:px-32 md:px-16 px-8 text-white h-full">
      {/* main div */}
      <div className="relative w-full border border-cyan-600 px-4 py-4 top-1/2 transform -translate-y-1/2 bg-gray-500/40 rounded-2xl shadow-2xl space-y-8">
        {/* Header section */}
        <p className="text-white text-3xl font-bold">
          Port <span className="text-cyan-500">Folio</span>
        </p>

        {/* components sections */}
        <div className="flex items-center justify-between w-full gap-16 px-4">
          {/* left div where introduction section */}
          <div className="w-2/3 space-y-8">
            {/* text section */}
            <div className="text-base space-y-4">
              <div className="space-y-2">
                <p className="text-xl font-bold opacity-90">Hi, I'm</p>
                <p className="text-3xl font-bold text-cyan-500">{`Ritesh Tamang`}</p>
              </div>
              <p className="text-2xl font-bold">
                I'm{" "}
                <span className="text-cyan-500">
                  {" "}
                  <Typewriter
                    words={["Frontend Developer", "Learning Next.Js"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>{" "}
              </p>
              <p className="font-semibold opacity-80 trackind-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                sit distinctio, harum necessitatibus incidunt amet eius dolores
                alias enim quam qui repellat facere sunt .
              </p>
            </div>

            {/* button section */}
            <div className="flex items-center gap-12">
              {/* CV download button */}
              <button className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-semibold text-black/60 bg-cyan-500/80 cursor-pointer border-transparent border transition-all duration-1000 hover:scale-105 hover:text-cyan-500 hover:border-cyan-600 hover:bg-transparent">
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-cyan-500/80 transform -translate-x-full hover:translate-x-0 transition-transform duration-1000 delay-150 rounded-full"></span>
              </button>

              {/* social media sections */}
              <div className="flex items-center gap-4">
                {mediaIcon.map((Icon, index) => (
                  <div key={index}>
                    <Tooltip
                      title={Icon.i_name}
                      placement="top"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#06b6d4", // tooltip background
                            color: "black", // tooltip text
                            fontSize: "0.7rem",
                          },
                        },
                      }}
                    >
                      <div className="border p-2 rounded-full border-cyan-500 cursor-pointer transition-transform hover:scale-110  hover:ring-cyan-300 hover:ring-2 hover:ring-offset-1 hover:ring-offset-transparent duration-300">
                        <Icon.icon
                          width={20}
                          height={20}
                          className="text-cyan-500 "
                        />
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image container section */}
          <div className="w-1/3">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mediaIcon = [
  {
    icon: Facebook,
    i_name: "Facebook",
  },
  {
    icon: Linkedin,
    i_name: "Linkedin",
  },
  {
    icon: Instagram,
    i_name: "Instagram",
  },
  {
    icon: Github,
    i_name: "Github",
  },
];
