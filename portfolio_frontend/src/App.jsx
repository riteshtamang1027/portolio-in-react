import Category_section from "./components/category_section";
import HeroSection from "./components/heroSection";
import Socialmedia_icon from "./components/socialmedia_icon";
import Techstack_section from "./components/techstack_section";

export default function App() {
  return (
    <div className="bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] w-full min-h-screen xl:px-64 lg:px-32 md:px-16 px-4 sm:px-32 py-16">
      <div className="space-y-16">
        <HeroSection />
        <Socialmedia_icon />
        <Techstack_section />
        <Category_section/>
      </div>
    </div>
  );
}
