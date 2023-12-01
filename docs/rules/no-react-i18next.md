# Enforce next-i18next usage instead of react-i18next (`use-next-i18next-not-react-i18next/no-react-i18next`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> If you're using Next.js 12, use next-i18next instead of react-i18next.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
import { useTranslation } from "react-i18next";
```

Examples of **correct** code for this rule:

```js
import { useTranslation } from "next-i18next";
```

## When Not To Use It

You can use `react-i18next` if you are using Next.js 13 or above.
