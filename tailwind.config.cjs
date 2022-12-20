const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        // Variables defined in src/assets/css/variables.css
        pale: "var(--pale)",
        dark: "var(--dark)",
        "pale-yellow": "var(--pale-yellow)",
        "middle-yellow": "var(--middle-yellow)",
        yellow: "var(--yellow)",
        "dark-yellow": "var(--dark-yellow)",
        "soft-gray": "var(--soft-gray)",
        "light-gray": "var(--light-gray)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        "darker-gray": "var(--darker-gray)",
        "pale-blue": "var(--pale-blue)",
        "light-blue": "var(--light-blue)",
        "middle-blue": "var(--middle-blue)",
        blue: "var(--blue)",
        "pale-green": "var(--pale-green)",
        "middle-green": "var(--middle-green)",
        green: "var(--green)",
        "pale-red": "var(--pale-red)",
        "middle-red": "var(--middle-red)",
        red: "var(--red)",
        cerulean: "var(--cerulean)",
        lilac: "var(--lilac)",
        rose: "var(--rose)",
        orange: "var(--orange)",
        "light-orange": "var(--light-orange)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
