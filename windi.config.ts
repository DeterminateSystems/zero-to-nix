import colors from "windicss/colors";
import defaultTheme from "windicss/defaultTheme";
import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

const detSysPurple = "#5074bf";

export default defineConfig({
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // https://windicss.org/utilities/general/colors.html
        primary: detSysPurple,
        pale: colors.slate[50],
        yellow: colors.yellow[500],
        "dark-yellow": colors.yellow[600],
        "soft-gray": colors.slate[200],
        "light-gray": colors.slate[300],
        gray: colors.slate[500],
        "dark-gray": colors.slate[700],
        "light-blue": colors.blue[300],
        blue: colors.blue[500],
        cerulean: colors.sky[500],
        lilac: colors.purple[500],
        rose: colors.rose[500],
        orange: colors.orange[500],
      },
      transitionProperty: {
        "bg-color": "background-color",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: detSysPurple,
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
      },
    },
  },
  plugins: [
    typography({
      dark: true,
    }),
  ],
});
