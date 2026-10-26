const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
languageOptions: {
  globals: {
    ...globals.browser,
    ...globals.node,
  },
},
    rules: {
      ...js.configs.recommended.rules,
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "error",
    },
  },
];
