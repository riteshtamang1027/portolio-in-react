import { AlignJustify, Mail, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router";
import { useState } from "react";
import { Input } from "./ui/input";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <AlignJustify className="flex md:hidden" size={24} strokeWidth={1.2} />
      </SheetTrigger>
      <SheetContent className="space-y-2">
        <SheetHeader>
          {/* menu title */}
          <SheetTitle className="font-ritesh">Menu Bar</SheetTitle>

         <div className="space-y-8">
           {/* pages links */}
          <SheetDescription className="flex flex-col gap-4 mt-8">
            {menuItems.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                onClick={() => setOpen(false)}
                className="border-b text-center py-1 font-ritesh text-sm"
              >
                {item.text.toUpperCase()}
              </Link>
            ))}
          </SheetDescription>

           {/* Search section */}
        <SheetDescription className="">
          <Input
            type="text"
            className="border-0 border-b border-foreground focus-visible:ring-0 shadow-2xl  rounded-md text-sm"
            placeholder="Search Here..."
          />
        </SheetDescription>
        
         </div>
        </SheetHeader>

       

        {/* Link of the media  */}
        <div className=" space-y-4 px-2">
          {mediaItem.map((item, index) =>
            item.icon ? (
              <Link
                to={item.url}
                key={index}
                className="flex  gap-2 items-center"
              >
                <item.icon size={24} className={`${item.iconColor}`} />
                <SheetDescription className="font-semibold ">
                  {item.itemName}{" "}
                </SheetDescription>
              </Link>
            ) : null
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const menuItems = [
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
  {
    url: "/about",
    text: "about me",
  },
];

const mediaItem = [
  {
    url: "https://www.facebook.com/ritesh.lama.981107",
    icon: FaFacebook,
    iconColor: "text-blue-500",
    itemName: "Facebook",
  },
  {
    url: "https://www.instagram.com/riteshlama1027",
    icon: FaInstagram,
    iconColor: "text-red-500",
    itemName: "Instagram",
  },
  {
    url: "https://github.com/riteshtamang1027",
    icon: FaGithub,
    iconColor: "text-primary",
    itemName: "GitHub",
  },
  {
    url: "",
    icon: Mail,
    iconColor: "text-primary",
    itemName: "riteshtamang1027@gmail.com",
  },
  {
    url: "https://www.google.com/maps/@27.73931,85.2890271,1482m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPin,
    iconColor: "text-primary",
    itemName: "Kathmandu",
  },
];
