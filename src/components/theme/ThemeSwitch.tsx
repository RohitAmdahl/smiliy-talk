"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

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
