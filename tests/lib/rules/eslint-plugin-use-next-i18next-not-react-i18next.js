/**
 * @fileoverview Enforce next-i18next usage instead of react-i18next
 * @author Shi Woo, Park
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/eslint-plugin-use-next-i18next-not-react-i18next"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-use-next-i18next-not-react-i18next", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import { t } from \"react-i18next\";",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
