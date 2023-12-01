/**
 * @fileoverview If you're using Next.js 12, use next-i18next instead of react-i18next.
 * @author Shi Woo, Park
 */
"use strict";

const noReactI18nextRule = require("./rules/no-react-i18next");

/** @type {import('eslint').ESLint.Plugin} */
const plugin = {
  rules: {
    "no-react-i18next": noReactI18nextRule,
  },
  configs: {
    recommended: {
      plugins: ["use-next-i18next-not-react-i18next"],
      rules: {
        "use-next-i18next-not-react-i18next/no-react-i18next":
          "error",
      },
    },
  },
};

module.exports = plugin;
