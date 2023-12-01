/**
 * @fileoverview Enforce next-i18next usage instead of react-i18next
 * @author Shi Woo, Park
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce next-i18next usage instead of react-i18next",
      recommended: false,
      url: "https://github.com/custardcream98/eslint-plugin-use-next-i18next-not-react-i18next/blob/main/docs/rules/no-react-i18next.md",
    },
    fixable: "code",
    schema: [],
    messages: {
      noReactI18next:
        "Use next-i18next instead of react-i18next",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          node.source.value === "react-i18next" &&
          node.source.type === "Literal"
        ) {
          context.report({
            node,
            messageId: "noReactI18next",
            fix(fixer) {
              const quote = node.source.raw.includes("'")
                ? "'"
                : '"';
              return fixer.replaceText(
                node.source,
                `${quote}next-i18next${quote}`
              );
            },
          });
        }
      },
    };
  },
};
