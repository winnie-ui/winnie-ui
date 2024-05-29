/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@winnie-ui/eslint-config/next"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["*.config.js", "*.config.cjs", "*.config.mjs"],
};
