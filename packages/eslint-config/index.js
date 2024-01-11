const coreRules = require("./rules/core");

const typescriptRules = require("./rules/ts");
const tsCheckRules = require("./rules/ts-check");
const tsCompatRules = require("./rules/ts-compat");

const unicornRules = require("./rules/unicorn");

// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const typescriptExtensions = [".ts", ".tsx", ".js", ".jsx"];

module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
  },
  parserOptions: {
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"],
    },
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2_021,
    requireConfigFile: false,
    sourceType: "module",
  },
  rules: {
    ...coreRules,
    ...unicornRules,
  },
  plugins: ["unicorn", "promise"],
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],

      overrides: [
        {
          files: ["*.ts", "*.tsx"],
          rules: {
            "@typescript-eslint/explicit-member-accessibility": config.ERROR,
          },
        },
        {
          files: ["*.d.ts"],
          rules: {
            "@typescript-eslint/consistent-type-definitions": config.OFF,
            "@typescript-eslint/no-empty-interface": config.OFF,
            "@typescript-eslint/no-shadow": config.OFF,
            "no-var": config.OFF,
            "vars-on-top": config.OFF,
          },
        },
      ],

      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "typescript-sort-keys"],

      settings: {
        "import/extensions": typescriptExtensions,
        "import/external-module-folders": [
          "node_modules",
          "node_modules/@types",
        ],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            extensions: typescriptExtensions,
          },
        },
        "jsdoc": {
          mode: "typescript",
        },
        "node": {
          tryExtensions: [".ts", ".tsx", ".js", ".json"],
        },
      },

      rules: {
        ...typescriptRules,
        ...tsCompatRules,
        ...tsCheckRules,
      },
    },
  ],
};
