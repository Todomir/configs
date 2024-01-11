const config = require("../config");

module.exports = {
  rules: {
    "@typescript-eslint/await-thenable": config.ERROR,
    "@typescript-eslint/consistent-type-exports": [
      config.ERROR,
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    "@typescript-eslint/dot-notation": config.ERROR,
    "@typescript-eslint/no-base-to-string": [
      config.ERROR,
      {
        ignoredTypeNames: ["RegExp"],
      },
    ],
    "@typescript-eslint/no-confusing-void-expression": [
      config.ERROR,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      config.ERROR,
      {
        ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    "@typescript-eslint/no-for-in-array": config.ERROR,
    "@typescript-eslint/no-implied-eval": config.ERROR,
    "@typescript-eslint/no-meaningless-void-operator": [
      config.ERROR,
      {
        checkNever: true,
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      config.ERROR,
      {
        checksConditionals: true,
        checksVoidReturn: {
          arguments: true,
          attributes: false,
          properties: true,
          returns: true,
          variables: true,
        },
      },
    ],
    "@typescript-eslint/no-throw-literal": config.ERROR,
    "@typescript-eslint/no-unnecessary-qualifier": config.ERROR,
    "@typescript-eslint/prefer-includes": config.ERROR,
    "@typescript-eslint/prefer-nullish-coalescing": [
      config.ERROR,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": config.ERROR,
    "@typescript-eslint/prefer-readonly": [
      config.ERROR,
      {
        onlyInlineLambdas: true,
      },
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": config.ERROR,
    "@typescript-eslint/prefer-regexp-exec": config.ERROR,
    "@typescript-eslint/prefer-return-this-type": config.ERROR,
    "@typescript-eslint/prefer-string-starts-ends-with": config.ERROR,
    "@typescript-eslint/promise-function-async": config.ERROR,
    "@typescript-eslint/require-array-sort-compare": [
      config.ERROR,
      {
        ignoreStringArrays: false,
      },
    ],
    "@typescript-eslint/return-await": [config.ERROR, "always"],
    "@typescript-eslint/switch-exhaustiveness-check": config.ERROR,
    "@typescript-eslint/unbound-method": [
      config.ERROR,
      {
        ignoreStatic: true,
      },
    ],
  },
};
