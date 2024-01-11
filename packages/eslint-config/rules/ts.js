const config = require("../config");

module.exports = {
  "@babel/object-curly-spacing": config.OFF,
  "@typescript-eslint/adjacent-overload-signatures": config.ERROR,
  "@typescript-eslint/array-type": [
    config.ERROR,
    {
      default: "array-simple",
    },
  ],
  "@typescript-eslint/ban-ts-comment": [
    config.ERROR,
    {
      "ts-check": true,
      "ts-expect-error": "allow-with-description",
      "ts-ignore": false,
      "ts-nocheck": false,
    },
  ],
  "@typescript-eslint/ban-tslint-comment": config.ERROR,
  "@typescript-eslint/ban-types": config.OFF,
  "@typescript-eslint/class-literal-property-style": [config.ERROR, "fields"],
  "@typescript-eslint/consistent-indexed-object-style": config.OFF,
  "@typescript-eslint/consistent-type-assertions": [
    config.ERROR,
    {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow",
    },
  ],
  "@typescript-eslint/consistent-type-definitions": [config.ERROR, "type"],
  "@typescript-eslint/consistent-type-imports": [
    config.ERROR,
    {
      prefer: "type-imports",
    },
  ],
  "@typescript-eslint/default-param-last": config.ERROR,
  "@typescript-eslint/explicit-function-return-type": config.OFF,
  "@typescript-eslint/explicit-member-accessibility": config.OFF,
  "@typescript-eslint/explicit-module-boundary-types": config.OFF,
  "@typescript-eslint/member-delimiter-style": [
    config.ERROR,
    {
      multiline: {
        delimiter: "comma",
        requireLast: true,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
        },
      },
      singleline: {
        delimiter: "comma",
        requireLast: true,
      },
    },
  ],
  "@typescript-eslint/member-ordering": config.OFF,
  "@typescript-eslint/method-signature-style": [config.ERROR, "property"],
  "@typescript-eslint/naming-convention": [
    config.ERROR,
    {
      format: ["camelCase", "UPPER_CASE", "PascalCase"],
      selector: "variable",
    },
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": config.ERROR,
  "@typescript-eslint/no-dynamic-delete": config.ERROR,
  "@typescript-eslint/no-empty-function": config.OFF,
  "@typescript-eslint/no-empty-interface": [
    "error",
    {
      allowSingleExtends: false,
    },
  ],
  "@typescript-eslint/no-explicit-any": [
    config.ERROR,
    {
      ignoreRestArgs: true,
    },
  ],
  "@typescript-eslint/no-extra-non-null-assertion": config.ERROR,
  "@typescript-eslint/no-extraneous-class": config.ERROR,
  "@typescript-eslint/no-inferrable-types": [
    config.ERROR,
    {
      ignoreParameters: true,
      ignoreProperties: true,
    },
  ],
  "@typescript-eslint/no-invalid-void-type": [
    config.ERROR,
    {
      allowAsThisParameter: true,
      allowInGenericTypeArguments: true,
    },
  ],
  "@typescript-eslint/no-misused-new": config.ERROR,
  "@typescript-eslint/no-namespace": [
    config.ERROR,
    {
      allowDeclarations: true,
    },
  ],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": config.ERROR,
  "@typescript-eslint/no-non-null-asserted-optional-chain": config.ERROR,
  "@typescript-eslint/no-non-null-assertion": config.ERROR,
  "@typescript-eslint/no-parameter-properties": config.OFF,
  "@typescript-eslint/no-require-imports": config.ERROR,
  "@typescript-eslint/no-restricted-imports": config.OFF,
  "@typescript-eslint/no-this-alias": [
    config.ERROR,
    {
      allowDestructuring: true,
      allowedNames: ["self"],
    },
  ],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": config.OFF,
  "@typescript-eslint/no-unnecessary-condition": config.OFF,
  "@typescript-eslint/no-unnecessary-type-arguments": config.OFF,
  "@typescript-eslint/no-unnecessary-type-assertion": config.OFF,
  "@typescript-eslint/no-unnecessary-type-constraint": config.ERROR,
  "@typescript-eslint/no-unsafe-argument": config.OFF,
  "@typescript-eslint/no-unsafe-assignment": config.OFF,
  "@typescript-eslint/no-unsafe-call": config.OFF,
  "@typescript-eslint/no-unsafe-member-access": config.OFF,
  "@typescript-eslint/no-unsafe-return": config.OFF,
  "@typescript-eslint/no-var-requires": config.ERROR,
  "@typescript-eslint/non-nullable-type-assertion-style": config.OFF,
  "@typescript-eslint/object-curly-spacing": [config.ERROR, "never"],
  "@typescript-eslint/padding-line-between-statements": config.OFF,
  "@typescript-eslint/prefer-as-const": config.ERROR,
  "@typescript-eslint/prefer-enum-initializers": config.ERROR,
  "@typescript-eslint/prefer-for-of": config.ERROR,
  "@typescript-eslint/prefer-function-type": config.ERROR,
  "@typescript-eslint/prefer-literal-enum-member": config.ERROR,
  "@typescript-eslint/prefer-namespace-keyword": config.ERROR,
  "@typescript-eslint/prefer-readonly-parameter-types": config.OFF,
  "@typescript-eslint/prefer-ts-expect-error": config.ERROR,
  "@typescript-eslint/restrict-plus-operands": config.OFF,
  "@typescript-eslint/restrict-template-expressions": config.OFF,
  "@typescript-eslint/strict-boolean-expressions": config.OFF,
  "@typescript-eslint/triple-slash-reference": [
    config.ERROR,
    {
      lib: "never",
      path: "never",
      types: "never",
    },
  ],
  "@typescript-eslint/type-annotation-spacing": config.ERROR,
  "@typescript-eslint/typedef": config.OFF,
  "@typescript-eslint/unified-signatures": config.ERROR,
  "canonical/prefer-inline-type-import": config.ERROR,
  "default-param-last": config.OFF,
  "import/no-dynamic-require": config.OFF,
  "jsdoc/require-property-type": config.OFF,
  "n/global-require": config.OFF,
  "n/no-missing-import": config.OFF,
  "no-duplicate-imports": config.OFF,
  "no-undef": config.OFF,
  "no-use-before-define": config.OFF,
  "spaced-comment": [
    config.ERROR,
    "always",
    {
      markers: ["/"],
    },
  ],
  "typescript-sort-keys/interface": config.ERROR,
  "typescript-sort-keys/string-enum": config.ERROR,
};
