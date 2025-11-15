import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiCloudinary,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link } from "react-router";

export default function AboutSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] h-full xl:px-32 md:px-24 px-4 sm:px-16 py-16">
     
     <div className="text-white  flex flex-col lg:flex-row items-center gap-12  justify-between ">
       {/* Profile Image */}

      <div className="flex  flex-col items-center justify-center md:w-120 w-88 sm:w-100  gap-8">
       {/* main top images container */}
       <motion.div
       initial={{opacity:0, x:-100}}
       whileInView={{opacity:1, x:0}}
       transition={{duration:1}}
       className="w-full md:h-88 flex-shrink-0 "
       >
         <Swiper
          // spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode,  Thumbs]}
          className="mySwiper2 w-full h-full cursor-pointer "
        >
         {Images.map((item, i) => (
            <SwiperSlide key={i} className=" border border-cyan-600 rounded-xl overflow-hidden">
              <img
                className="w-full rounded-xl hover:scale-110 duration-300 object-cover"
                src={item.url}
                alt={item.im_name}
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
       </motion.div>

       <motion.div 
       initial={{opacity:0, y:100}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:1}}
       
       className="w-full">
         <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper w-full  rounded-xl pt-2! "
        >
          {Images.map((item, i) => (
            <SwiperSlide key={i} className="border border-cyan-600 rounded-xl  cursor-pointer hover:-translate-y-2 overflow-hidden duration-300">
                <img
                className="w-full h-24 rounded-xl hover:scale-105 duration-300 object-cover"
                src={item.url}
                alt={item.im_name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
       </motion.div>
      </div>


      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        <p className="text-3xl md:text-4xl font-bold  text-cyan-400">
          About Me
        </p>
       <div className="space-y-4">
         
        <p className="text-gray-300 leading-relaxed">
          Hi, I’m <span className="text-white font-semibold">Ritesh</span>, a
          passionate{" "}
          <span className="text-cyan-400 font-semibold">
            React and Next.js developer
          </span>{" "}
          from Kathmandu, Nepal. I love building clean, responsive, and
          user-friendly web applications that bring ideas to life.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          My journey into web development started with curiosity about how
          websites work. Since then, I’ve been developing projects using{" "}
          <span className="text-white font-semibold">
            React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM
          </span>
          , and <span className="text-white font-semibold">Cloudinary</span>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          I enjoy crafting smooth user experiences, writing clean code, and
          exploring new technologies that push my creativity. My goal is to grow
          as a full-stack developer and collaborate with teams that care about
          design, performance, and innovation.
        </p>

        <p className="text-gray-300 leading-relaxed">
          When I’m not coding, I’m usually exploring new UI trends, tweaking
          designs, or helping my little sister{" "}
          <span className="text-white font-semibold">Kushum</span> with her
          studies. If you’d like to connect or collaborate, feel free to{" "}
          <Link to={"/contact"}
            href="#contact"
            className="text-cyan-400 hover:underline underline-offset-2"
          >
            reach out
          </Link>
          !
        </p>
       </div>


        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-5 mt-8"
        >
          {icons.map((Icon, i) => (
            <Tooltip
              key={i}
              title={Icon.i_name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#0891b2", // tooltip background
                    color: "black", // tooltip text
                    fontSize: "0.9rem",
                  },
                },
              }}
            >
              <motion.div
                whileHover={{
                  borderColor: "#22d3ee",
                  boxShadow: "0px 0px 15px rgba(34, 211, 238, 0.35)",
                }}
                className="p-3 rounded-xl  bg-gray-800/50 border border-cyan-500/30 transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <Icon.icon className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </Tooltip>
          ))}
        </motion.div>
      </motion.div>
     </div>


    </div>
  );
}

const icons = [
  { icon: SiReact, i_name: "React JS" },
  { icon: SiNextdotjs, i_name: "NextJS" },
  { icon: SiTailwindcss, i_name: "Tailwindcss" },
  { icon: SiPostgresql, i_name: "Postgresql" },
  { icon: SiCloudinary, i_name: "Cloudinary" },
];

const Images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1726714601217-b9268de01ca7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    im_name: "mage1I",
  },
  {
    url: "https://images.unsplash.com/photo-1565687981296-535f09db714e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    im_name: "Image2",
  },
  {
    url: "https://images.unsplash.com/photo-1617791160530-fb48acfc1658?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    im_name: "Image3",
  },
];
