const config = require("../config");

module.exports = {
  "unicorn/better-regex": config.ERROR,
  "unicorn/catch-error-name": [
    "error",
    {
      name: "error",
    },
  ],
  "unicorn/consistent-destructuring": config.OFF,
  "unicorn/consistent-function-scoping": config.ERROR,
  "unicorn/custom-error-definition": config.OFF,
  "unicorn/empty-brace-spaces": config.ERROR,
  "unicorn/error-message": config.ERROR,
  "unicorn/escape-case": config.ERROR,
  "unicorn/expiring-todo-comments": config.OFF,
  "unicorn/explicit-length-check": config.OFF,
  "unicorn/filename-case": config.OFF,
  "unicorn/import-style": config.OFF,
  "unicorn/new-for-builtins": config.ERROR,
  "unicorn/no-abusive-eslint-disable": config.ERROR,
  "unicorn/no-array-callback-reference": config.OFF,
  "unicorn/no-array-for-each": config.ERROR,
  "unicorn/no-array-method-this-argument": config.ERROR,
  "unicorn/no-array-push-push": config.OFF,
  "unicorn/no-array-reduce": [
    "error",
    {
      allowSimpleOperations: true,
    },
  ],
  "unicorn/no-await-expression-member": config.OFF,
  "unicorn/no-console-spaces": config.OFF,
  "unicorn/no-document-cookie": config.ERROR,
  "unicorn/no-empty-file": config.ERROR,
  "unicorn/no-for-loop": config.ERROR,
  "unicorn/no-hex-escape": config.ERROR,
  "unicorn/no-instanceof-array": config.ERROR,
  "unicorn/no-invalid-remove-event-listener": config.ERROR,
  "unicorn/no-keyword-prefix": config.OFF,
  "unicorn/no-lonely-if": config.ERROR,
  "unicorn/no-nested-ternary": config.ERROR,
  "unicorn/no-new-array": config.ERROR,
  "unicorn/no-new-buffer": config.ERROR,
  "unicorn/no-null": config.OFF,
  "unicorn/no-object-as-default-parameter": config.ERROR,
  "unicorn/no-process-exit": config.OFF,
  "unicorn/no-static-only-class": config.ERROR,
  "unicorn/no-thenable": config.ERROR,
  "unicorn/no-this-assignment": config.ERROR,
  "unicorn/no-unreadable-array-destructuring": config.OFF,
  "unicorn/no-unreadable-iife": config.ERROR,
  "unicorn/no-unused-properties": config.ERROR,
  "unicorn/no-useless-fallback-in-spread": config.ERROR,
  "unicorn/no-useless-length-check": config.ERROR,
  "unicorn/no-useless-promise-resolve-reject": config.ERROR,
  "unicorn/no-useless-spread": config.ERROR,
  "unicorn/no-useless-switch-case": config.OFF,
  "unicorn/no-useless-undefined": config.OFF,
  "unicorn/no-zero-fractions": config.ERROR,
  "unicorn/number-literal-case": config.ERROR,
  "unicorn/numeric-separators-style": [
    config.ERROR,
    {
      number: {
        groupLength: 3,
        minimumDigits: config.OFF,
      },
    },
  ],
  "unicorn/prefer-add-event-listener": config.OFF,
  "unicorn/prefer-array-find": config.ERROR,
  "unicorn/prefer-array-flat": config.ERROR,
  "unicorn/prefer-array-flat-map": config.ERROR,
  "unicorn/prefer-array-index-of": config.ERROR,
  "unicorn/prefer-array-some": config.ERROR,
  "unicorn/prefer-at": config.OFF,
  "unicorn/prefer-blob-reading-methods": config.ERROR,
  "unicorn/prefer-code-point": config.ERROR,
  "unicorn/prefer-date-now": config.ERROR,
  "unicorn/prefer-default-parameters": config.ERROR,
  "unicorn/prefer-export-from": config.ERROR,
  "unicorn/prefer-includes": config.ERROR,
  "unicorn/prefer-json-parse-buffer": config.ERROR,
  "unicorn/prefer-math-trunc": config.ERROR,
  "unicorn/prefer-modern-math-apis": config.ERROR,
  "unicorn/prefer-native-coercion-functions": config.ERROR,
  "unicorn/prefer-negative-index": config.OFF,
  "unicorn/prefer-number-properties": config.ERROR,
  "unicorn/prefer-object-from-entries": config.ERROR,
  "unicorn/prefer-optional-catch-binding": config.ERROR,
  "unicorn/prefer-prototype-methods": config.OFF,
  "unicorn/prefer-query-selector": config.ERROR,
  "unicorn/prefer-reflect-apply": config.ERROR,
  "unicorn/prefer-regexp-test": config.ERROR,
  "unicorn/prefer-set-has": config.OFF,
  "unicorn/prefer-spread": config.OFF,
  "unicorn/prefer-string-replace-all": config.ERROR,
  "unicorn/prefer-string-slice": config.ERROR,
  "unicorn/prefer-string-starts-ends-with": config.ERROR,
  "unicorn/prefer-string-trim-start-end": config.ERROR,
  "unicorn/prefer-switch": config.OFF,
  "unicorn/prefer-ternary": config.OFF,
  "unicorn/prefer-top-level-await": config.OFF,
  "unicorn/prefer-type-error": config.ERROR,
  "unicorn/prevent-abbreviations": [
    config.ERROR,
    {
      checkProperties: false,
      replacements: {
        args: false,
        pkg: false,
        props: false,
        ref: false,
        rel: false,
      },
    },
  ],
  "unicorn/relative-url-style": [config.ERROR, "never"],
  "unicorn/require-array-join-separator": config.ERROR,
  "unicorn/require-number-to-fixed-digits-argument": config.ERROR,
  "unicorn/require-post-message-target-origin": config.ERROR,
  "unicorn/string-content": config.OFF,
  "unicorn/template-indent": config.ERROR,
  "unicorn/text-encoding-identifier-case": config.ERROR,
  "unicorn/throw-new-error": config.ERROR,
};