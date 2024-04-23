/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@alku/eslint-config-muma/react"],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
