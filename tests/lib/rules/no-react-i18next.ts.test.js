/**
 * @fileoverview Enforce next-i18next usage instead of react-i18next
 * @author Shi Woo, Park
 */
"use strict";

const rule = require("../../../lib/rules/no-react-i18next"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
});

ruleTester.run("ts/no-react-i18next", rule, {
  valid: [
    {
      code: 'import { t } from "next-i18next";',
    },
    {
      code: "import { t } from 'next-i18next';",
    },
  ],

  invalid: [
    {
      code: 'import { t } from "react-i18next";',
      output: 'import { t } from "next-i18next";',
      errors: 1,
    },
    {
      code: "import { t } from 'react-i18next';",
      output: "import { t } from 'next-i18next';",
      errors: 1,
    },
  ],
});
