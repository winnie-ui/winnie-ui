/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["./base.js", "plugin:solid/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  globals: {
    JSX: true,
  },
  rules: {},
};

module.exports = config;
