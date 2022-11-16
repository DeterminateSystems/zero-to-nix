/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        detsys: "rgb(80, 116, 191)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: theme("colors.detsys"),
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
