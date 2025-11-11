import Tooltip from "@mui/material/Tooltip";
import {
  BriefcaseBusiness,
  FileUser,
  House,
  Mail,
  UserRound,
} from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="relative top-8 left-1/2 transform -translate-x-1/2 w-max px-4 py-2 bg-gray-600/70 shadow-2xl rounded-full ">
      <div className="flex items-center gap-16">
        {icons.map((item, index) => (
        
            <Tooltip
            key={index}
              title={item.i_name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#0891b2", // tooltip background
                    color: "black", // tooltip text
                    fontSize: "0.8rem",
                  },
                },
              }} className="cursor-pointer"
            >
              <item.icon size={26} className="text-cyan-600" strokeWidth={1} />
            </Tooltip>
          
        ))}
      </div>
    </div>
  );
}

const icons = [
  { icon: House, i_name: "Home" },
  { icon: UserRound, i_name: "About" },
  { icon: FileUser, i_name: "Resume" },
  { icon: BriefcaseBusiness, i_name: "Portfolio" },
  { icon: Mail, i_name: "Contact" },
];
