/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@alku/eslint-config-muma/solid"],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
