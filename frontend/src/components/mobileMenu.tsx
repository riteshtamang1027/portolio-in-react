import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

interface Itext {
  text: string;
  url: string;
}
interface Imenu {
  Items: Itext[];
}

export default function MobileMenu({ Items }: Imenu) {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={IsOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-cyan-600 via-black/90 to-cyan-500">
        <SheetHeader>
          <SheetTitle className="text-white">Ritesh Tamang</SheetTitle>
          <div className="space-y-4 text-center mt-12">
            {Items.map((item: Itext, index: number) => (
              <div key={index} className="space-y-2">
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={item.url}
                  className="cursor-pointer font-medium text-sm text-white opacity-80"
                >
                  {item.text.toUpperCase()}
                </NavLink>
                <hr />
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
