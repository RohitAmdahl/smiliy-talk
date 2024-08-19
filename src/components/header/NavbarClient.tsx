"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import ThemeSwitch from "../theme/ThemeSwitch";
import Link from "next/link";

const NavbarClient = ({ userEmail }: { userEmail: string }) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    } else {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center gap-6">
      <ThemeSwitch />
      <div>
        {userEmail ? (
          <form action="/">
            <button
              type="submit"
              onClick={handleLogout}
              className="bg-red-500 tracking-wider text-lg text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="bg-primary tracking-wider text-lg text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavbarClient;
