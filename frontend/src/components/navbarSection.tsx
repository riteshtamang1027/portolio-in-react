import { NavLink } from "react-router";
import MobileMenu from "./mobileMenu";

export default function NavbarSection() {
  return (
    <div className="lg:px-28 md:px-16 px-4 w-full z-10 bg-gradient-to-r from-cyan-500 via-black to-cyan-500  py-4 flex justify-between border-b border-gray-300 shadow-2xl sticky top-0">
      {/* Logo Section */}
      <NavLink to={"/"} className="flex md:flex-row flex-col items-center md:gap-2 lg:text-xl sm:text-lg text-sm -gap-2 cursor-pointer text-white  w-max ">
        <span className=" font-bold tracking-wide opacity-80 ">
          Ritesh Tamang
        </span>
        <span className="hidden md:flex">/</span>
        <span className="opacity-80">Web Developer</span>
      </NavLink>

      {/* Pages section */}
      <div className="sm:flex hidden items-center gap-8 lg:text-base text-sm  text-white/80">
        {Items.map((item, index) => (
          <NavLink to={item.url} className="cursor-pointer" key={index}>
            {item.text.toUpperCase()}
          </NavLink>
        ))}
      </div>

      <div className="flex sm:hidden">
        <MobileMenu Items={Items} />
      </div>
    </div>
  );
}

const Items = [
  {
    text: "About Me",
    url: "/about",
  },
  {
    text: "Resume",
    url: "/resume",
  },
  {
    text: "Project",
    url: "/project",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];
