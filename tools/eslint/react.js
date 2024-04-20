/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "./base.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "react"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react-no-unknown-property": "off",
  },
};

module.exports = config;
