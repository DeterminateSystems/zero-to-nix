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
        // Drawn from: https://tailwindcss.com/docs/customizing-colors
        pale: colors.slate["50"], // #F8FAFC
        dark: "rgb(10, 10, 10)",
        yellow: colors.yellow["500"], // #EAB308
        "pale-yellow": colors.yellow["50"], // #FEFCE8
        "dark-yellow": colors.yellow["600"], // #CA8A04
        "soft-gray": colors.slate["200"], // #E2E8F0
        "light-gray": colors.slate["300"], // #CBD5E1
        gray: colors.slate["500"], // #64748B
        "dark-gray": colors.slate["700"], // #334155
        blue: colors.blue["500"], // #3B82F6
        "light-blue": colors.blue["300"], // #93C5FD
        "pale-blue": colors.blue["50"], // #EFF6FF
        green: colors.green["500"], // #22C55E
        "pale-green": colors.green["50"], // #F0FDF4
        red: colors.red["500"], // #EF4444
        "pale-red": colors.red["50"], // #FEF2F2
        cerulean: colors.sky["500"], // #0EA5E9
        lilac: colors.purple["500"], // #A855F7
        rose: colors.rose["500"], // #F43F5E
        orange: colors.orange["500"], // #F97316
        primary: "var(--primary)", // Determinate Systems light purple
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
