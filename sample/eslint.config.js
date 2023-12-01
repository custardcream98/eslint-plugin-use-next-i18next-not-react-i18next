"use strict";

const plugin = require("../lib/index");

module.exports = [
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: { sample: plugin },
    rules: {
      "sample/no-react-i18next": "error",
    },
  },
];
