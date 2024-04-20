/** @type {import("stylelint").Config} */
module.exports = {
  extends: "stylelint-config-recommended",
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
};
