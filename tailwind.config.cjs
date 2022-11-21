const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // https://tailwindcss.com/docs/customizing-colors
        pale: "#F8FAFC", // slate-50
        yellow: "#EAB308", // yellow-500
        "dark-yellow": "#CA8A04", // yellow-600
        "soft-gray": "#E2E8F0", // slate-200
        "light-gray": "#CBD5E1", // slate-300
        gray: "#64748B", // slate-500
        "dark-gray": "#334155", // slate-700
        "light-blue": "#93C5FD", // blue-300
        blue: "#3B82F6", // blue-500
        cerulean: "#0EA5E9", // sky-500
        lilac: "#A855F7", // purple-500
        rose: "#F43F5E", // rose-500
        orange: "#F97316", // orange-500
        primary: "rgb(80, 116, 191)", // Determinate Systems light purple
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
