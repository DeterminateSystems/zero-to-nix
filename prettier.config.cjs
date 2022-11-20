/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-windicss")],
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
};
