# eslint-plugin-use-next-i18next-not-react-i18next

If you're using Next.js 12, use next-i18next instead of react-i18next.

This plugin is for dummy devs like me who forget to change the import from react-i18next to next-i18next.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-use-next-i18next-not-react-i18next`:

```sh
npm install eslint-plugin-use-next-i18next-not-react-i18next --save-dev
```

## Usage

Add `use-next-i18next-not-react-i18next` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["use-next-i18next-not-react-i18next"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "use-next-i18next-not-react-i18next/no-react-i18next": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                               | Description                                         | 💼  | 🔧  |
| :------------------------------------------------- | :-------------------------------------------------- | :-- | :-- |
| [no-react-i18next](docs/rules/no-react-i18next.md) | Enforce next-i18next usage instead of react-i18next | ✅  | 🔧  |

<!-- end auto-generated rules list -->
