import Image from "next/image";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

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
                smiliy-talk - {data.user?.email || ""}
              </span>
            </Link>
          </nav>
          <NavbarClient userEmail={data.user?.email || ""} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
