const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        // Variables defined in src/assets/css/variables.css
        pale: "var(--pale)",
        dark: "var(--dark)",
        yellow: "var(--yellow)",
        "pale-yellow": "var(--pale-yellow)",
        "dark-yellow": "var(--dark-yellow)",
        "soft-gray": "var(--soft-gray)",
        "light-gray": "var(--light-gray)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        blue: "var(--blue)",
        "light-blue": "var(--light-blue)",
        "pale-blue": "var(--pale-blue)",
        green: "var(--green)",
        "pale-green": "var(--pale-green)",
        red: "var(--red)",
        "pale-red": "var(--pale-red)",
        cerulean: "var(--cerulean)",
        lilac: "var(--lilac)",
        rose: "var(--rose)",
        orange: "var(--orange)",
        "light-orange": "var(--light-orange)",
        primary: "var(--primary)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: theme("colors.primary"),
              },
            },
            code: {
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
