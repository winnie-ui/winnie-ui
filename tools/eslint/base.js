const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-only-tests"],
  env: {
    browser: true,
  },
  ignorePatterns: [".*.js", ".*.cjs", "node_modules/", "dist/", "*.json"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off",
    "no-console": "error",
    "no-only-tests/no-only-tests": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": ["*.ts", "*.tsx"],
    },
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};

module.exports = config;
