export default function HeroProfileSection() {
  return (
    <div className="w-full py-4 bg-secondary relative border-b border-gray-400  md:h-108 h-84">
      {/* Background Profile Image */}
      <div className="w-full md:h-64 h-44 mt-4 rounded-sm xl:px-64 lg:px-32 md:px-16 sm:px-8 px-4">
        <img
          className="w-full h-full object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      {/* Profile Image */}
      <div className="absolute  transform -translate-x-1/2 left-1/2 -translate-y-1/2">
       <div className="flex flex-col items-center justify-center gap-2 ">
        
         <img className="md:w-44 md:h-44 w-36 h-36 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <p className="font-ritesh lg:text-base text-sm ">Ritesh Tamang</p>
       
       </div>
      </div>
      
    </div>
  );
}
