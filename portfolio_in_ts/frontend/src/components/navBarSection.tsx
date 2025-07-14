import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ModeToggle } from "./modeToggle";
import MobileMenu from "./mobileMenu";

export default function NavBarSection() {
  return (
    <div className=" xl:px-64 lg:px-32 md:px-16 sm:px-8 px-4 border">
      <div className=" p-2 rounded-m flex items-center justify-between ">
        {/* Right side section. */}
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              className="rounded-full w-8 h-8 object-cover"
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link className="text-sm lg:text-base font-medium" to={"/"}>
            {"Ritesh Tamang".toUpperCase()}
          </Link>
        </div>

        {/* Left side section */}
        <div className="flex items-center gap-8">
          {/* web pages */}
          {navItem.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className=" cursor-pointer hidden md:flex font-medium"
            >
              {item.text.toUpperCase()}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            {/* mobile menu */}
            <MobileMenu/>
            

            {/* Theme changer */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

const navItem = [
  {
    url: "/",
    text: "home",
  },
  {
    url: "/project",
    text: "project",
  },
  {
    url: "/resume",
    text: "resume",
  },
  {
    url: "/contact",
    text: "contact",
  },
];
