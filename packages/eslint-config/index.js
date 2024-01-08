const coreRules = require("./rules/core");
const typescriptRules = require("./rules/ts");

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    ...coreRules,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        /* "plugin:@typescript-eslint/recommended-requiring-type-checking", */
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        ...typescriptRules,
      },
    },
  ],
};
