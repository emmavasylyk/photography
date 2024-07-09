import { useState } from "react";
import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Sheet open={visible} onOpenChange={setVisible}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col gap-y-6 items-center"
              linkStyles="text-xl"
              onLinkClick={() => setVisible(false)}
            />
          </div>
          <Socials
            containerStyles="flex gap-x-4 items-center"
            iconStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
