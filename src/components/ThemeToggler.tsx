import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { theme } from "../data/store";

const ThemeToggler = () => {
  const $theme = useStore(theme);

  useEffect(() => {
    if ($theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggle = () => {
    theme.set($theme === "dark" ? "light" : "dark");
  };

  const icon =
    $theme === "dark" ? (
      <FaSun className="h-5 w-5 text-yellow-500 hover:text-yellow-600" />
    ) : (
      <FaMoon className="h-5 w-5 text-blue-500 hover:text-blue-600" />
    );

  return (
    <div onClick={() => toggle()} className="flex items-center">
      <button
        aria-label="Toggle the site theme between light and dark"
        onClick={() => toggle()}
      >
        {icon}
      </button>
    </div>
  );
};

export default ThemeToggler;
