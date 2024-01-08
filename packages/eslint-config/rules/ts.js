const config = require('../config');

module.exports = {
  'no-dupe-class-members': config.OFF,
  'no-undef': config.OFF,

  // Add TypeScript specific rules (and turn off ESLint equivalents)
  '@typescript-eslint/consistent-type-assertions': config.ERROR,
  '@typescript-eslint/consistent-type-imports': config.ERROR,

  'no-array-constructor': config.OFF,
  '@typescript-eslint/no-array-constructor': config.ERROR,

  // There is a bug w/ @typescript-eslint/no-duplicate-imports triggered
  // by multiple imports inside of module declarations. We should reenable
  // this rule when the bug is fixed.
  // https://github.com/typescript-eslint/typescript-eslint/issues/3071
  'no-duplicate-imports': config.OFF,
  // "@typescript-eslint/no-duplicate-imports": WARN,

  'no-redeclare': config.OFF,
  '@typescript-eslint/no-redeclare': config.ERROR,
  'no-use-before-define': config.OFF,
  '@typescript-eslint/no-use-before-define': [
    config.ERROR,
    {
      functions: false,
      classes: false,
      variables: true,
      typedefs: false,
    },
  ],
  'no-unused-expressions': config.OFF,
  '@typescript-eslint/no-unused-expressions': [
    config.ERROR,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-vars': config.OFF,
  '@typescript-eslint/no-unused-vars': [
    config.WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
    },
  ],
  'no-useless-constructor': config.OFF,
  '@typescript-eslint/no-useless-constructor': config.ERROR,
  'class-methods-use-this': config.ERROR,
  eqeqeq: [config.ERROR, 'always', { null: 'ignore' }],
  'no-alert': config.ERROR,
  'no-console': config.ERROR,
  'no-constructor-return': config.ERROR,
  'no-lonely-if': config.ERROR,
  'no-promise-executor-return': config.ERROR,
  'no-shadow': config.ERROR,
  'no-template-curly-in-string': config.ERROR,
  'no-unreachable-loop': config.ERROR,
  'no-warning-comments': [
    config.ERROR,
    {
      terms: ['@nocommit'],
      location: 'anywhere',
    },
  ],
  'prefer-const': config.ERROR,
  'require-await': config.ERROR,
  'require-yield': config.ERROR,
  'symbol-description': config.ERROR,
  yoda: config.ERROR,
  '@typescript-eslint/no-floating-promises': config.ERROR,
  '@typescript-eslint/no-misused-promises': config.ERROR,
  '@typescript-eslint/await-thenable': config.ERROR,
  '@typescript-eslint/no-for-in-array': config.ERROR,
  '@typescript-eslint/no-unnecessary-type-assertion': config.ERROR,
  '@typescript-eslint/no-unsafe-argument': config.ERROR,
  '@typescript-eslint/no-unsafe-assignment': config.ERROR,
  '@typescript-eslint/no-unsafe-call': config.ERROR,
  '@typescript-eslint/no-unsafe-member-access': config.ERROR,
  '@typescript-eslint/no-unsafe-return': config.ERROR,
  '@typescript-eslint/require-await': config.ERROR,
  '@typescript-eslint/restrict-plus-operands': config.ERROR,
  '@typescript-eslint/restrict-template-expressions': config.ERROR,
  '@typescript-eslint/unbound-method': config.ERROR,
};
