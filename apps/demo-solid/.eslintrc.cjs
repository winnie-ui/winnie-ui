/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@muma/eslint-config-muma/solid"],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
