import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function FooterSection() {
  return (
    <div className="h-88 bg-primary xl:px-64 lg:px-32 md:px-16 sm:px-8 px-4 py-12">
       <div className="flex items-center justify-between">
         {/* Right side section. */}
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage
              className="rounded-full w-8 h-8 object-cover"
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link className="text-sm lg:text-base font-bold font-ritesh tracking-widest " to={"/"}>
            {"Ritesh Tamang".toUpperCase()}
          </Link>
        </div>

        {/* Left Section */}
        <div>
            <p className="font-ritesh">Short Cut Link</p>
        </div>
       </div>


      
    </div>
  )
}
