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
      colors: {
        // Drawn from: https://tailwindcss.com/docs/customizing-colors
        pale: colors.slate["50"], // #F8FAFC
        yellow: colors.yellow["500"], // #EAB308
        "dark-yellow": colors.yellow["600"], // #CA8A04
        "soft-gray": colors.slate["200"], // #E2E8F0
        "light-gray": colors.slate["300"], // #CBD5E1
        gray: colors.slate["500"], // #64748B
        "dark-gray": colors.slate["700"], // #334155
        "light-blue": colors.blue["300"], // #93C5FD
        blue: colors.blue["500"], // #3B82F6
        cerulean: colors.sky["500"], // #0EA5E9
        lilac: colors.purple["500"], // #A855F7
        rose: colors.rose["500"], // #F43F5E
        orange: colors.orange["500"], // #F97316
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
