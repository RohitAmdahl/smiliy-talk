import Image from "next/image";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <header>
      <div className="w-full backdrop-blur-md ">
        <div className=" max-w-7xl container mx-auto flex justify-between p-4 ">
          <nav className="flex">
            <Link href="/">
              <Image
                src="/favicon.png"
                alt="smiliy-talk-logo brand image logo"
                width={100}
                height={100}
                className="rounded-full border-2 border-primary p-1 "
              />
              <span className="uppercase flex py-1 justify-center items-center tracking-wider px-2">
                smiliy-talk
              </span>
            </Link>
          </nav>
          <div className="flex justify-center items-center gap-6">
            <ThemeSwitch />
            <div>
              <Link
                href={"/log-in"}
                className="bg-primary tracking-wider text-lg text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
