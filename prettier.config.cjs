/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindConfig: "./tailwind.config.cjs",
  trailingComma: "es5",
};
