"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <RiseLoader color="rgba(128, 109, 109, 1)" />;
  }

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="cursor-pointer"
        size={25}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="cursor-pointer"
        size={25}
        onClick={() => setTheme("dark")}
      />
    );
  }
}
