import Image from "next/image";
import ThemeSwitch from "../theme/ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="w-full backdrop-blur-md p-4 ">
        <div className=" max-w-7xl container mx-auto flex justify-between mt-2 px-2 py-2 ">
          <nav className="flex">
            <Link className="flex justify-center items-center " href="/">
              <Image
                src="/favicon.png"
                alt="smiliy-talk-logo brand image logo"
                width={100}
                height={100}
                className="rounded-full border-2 border-primary max-w-[70px] hidden md:block"
              />
              <span className="uppercase flex py-1 tracking-wider px-2">
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
