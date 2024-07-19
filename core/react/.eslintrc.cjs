/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@winnie-ui/eslint-config/react"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["*.config.cjs"]
}
