import Image from "next/image";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="w-full backdrop-blur-md ">
      <header className="w-full max-w-7xl container mx-auto flex justify-between p-4">
        <nav className="flex justify-center items-center gap-4 ">
          <Image
            src="/favicon.png"
            alt="smiliy-talk-logo brand image logo"
            width={100}
            height={100}
            className="rounded-full border-2 border-primary p-1 "
          />
          <span className="uppercase tracking-wider px-2">smiliy-talk</span>
        </nav>
        <div className="flex justify-center items-center gap-6">
          <ThemeSwitch />
          <div>
            <Button
              className="bg-primary tracking-wider text-lg text-primary-foreground"
              size={"lg"}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
