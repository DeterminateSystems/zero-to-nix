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
      <FaSun className="h-4 w-4 text-yellow hover:text-dark-yellow md:h-5 md:w-5" />
    ) : (
      <FaMoon className="h-4 w-4 text-light-blue hover:text-blue md:h-5 md:w-5" />
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
