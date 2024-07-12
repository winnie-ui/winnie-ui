module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: ["^react", "<THIRD_PARTY_MODULES>", "^[./].*(?<!\\.(c|le|sc)ss)$", "\\.(c|le|sc)ss$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [{ files: ["*.ts"], options: { parser: "babel-ts" } }],
};
