import { Button } from "@/components/ui/button";

export default function heroSection() {
  return (
   <div>

    {/*  Background theem */}
    <div className="relative bg-gradient-to-r  from-slate-800 to-cyan-500 w-88 h-120">
      </div>
      {/* Profile section */}

      <div className="absolute lg:px-28 md:px-16 px-4 top-64 flex md:flex-row flex-col items-center justify-between gap-8 w-full ">
        {/* Profile picture */}
        
        <div className="flex flex-col bg-cyan-700 md:w-1/3 w-full  items-center gap-2 p-4">
         
          <div className="">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src="https://media.istockphoto.com/id/1392583255/photo/portrait-of-a-man-riding-his-classic-motorbike-in-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=9Kjpc34MR9ikiTGLP0-HsvSy39d97iPhAFPjWBiqvoY="
              alt="profile image"
            />
          </div>

          {/* Your name and your  */}
          <div className="">
            <p className="text-xl font-bold">Your name</p>
            <p className="text-lg font-medium">Your post</p>
          </div>
        </div>

        {/* About yourself */}

        <div className="space-y-4 md:w-2/3 w-full">
          <p className="text-6xl font-bold">Hello Everyone ...!</p>
          <p className="text-lg font-medium">
            I am Ritesh. So, who am I and what I can do, You can explore here.
          </p>
          <div className="flex items-center gap-4">
            {/* Resume button */}
            <Button className="bg-cyan-600 hover:text-black border hover:border-cyan-600  hover:bg-white cursor-pointer duration-300 rounded-full">
              Resume
            </Button>

            {/* Project button */}
            <Button className="bg-white text-black border hover:text-white border-cyan-600 hover:bg-cyan-600 cursor-pointer duration-300 rounded-full">
              Resume
            </Button>
          </div>

          {/* about yourself */}
          <div>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              saepe libero aliquid molestiae iste fugit exercitationem quis, id
              molestias asperiores neque veniam error architecto quisquam!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam facilis quis pariatur repellat non suscipit eum tenetur. Minus error deleniti provident dicta amet iste.
            </p>
          </div>


        </div>


      </div>

              </div>

  
  );
}
