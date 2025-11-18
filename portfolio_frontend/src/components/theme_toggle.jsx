import  { useContext } from "react";
import { ThemeContext } from "../theme_provider";
import { Moon, SunMedium } from "lucide-react";

export default function Theme_toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sticky">
        <button
      onClick={toggleTheme}
      className=" p-2 rounded-full bg-gradient text-[var(--text-secondary)] cursor-pointer border border-[var(--border-radious)] "
    >
      {theme === "dark" ? <SunMedium className="w-6 h-6 max-md:w-4 max-md:h-4"/> : <Moon className="w-6 h-6 max-md:w-4 max-md:h-4"/>}
    </button>
    </div>
  );
}
