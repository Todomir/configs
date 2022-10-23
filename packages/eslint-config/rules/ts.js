const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  'no-dupe-class-members': OFF,
  'no-undef': OFF,

  // Add TypeScript specific rules (and turn off ESLint equivalents)
  '@typescript-eslint/consistent-type-assertions': ERROR,
  '@typescript-eslint/consistent-type-imports': ERROR,

  'no-array-constructor': OFF,
  '@typescript-eslint/no-array-constructor': ERROR,

  // There is a bug w/ @typescript-eslint/no-duplicate-imports triggered
  // by multiple imports inside of module declarations. We should reenable
  // this rule when the bug is fixed.
  // https://github.com/typescript-eslint/typescript-eslint/issues/3071
  'no-duplicate-imports': OFF,
  // "@typescript-eslint/no-duplicate-imports": WARN,

  'no-redeclare': OFF,
  '@typescript-eslint/no-redeclare': ERROR,
  'no-use-before-define': OFF,
  '@typescript-eslint/no-use-before-define': [
    WARN,
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  'no-unused-expressions': OFF,
  '@typescript-eslint/no-unused-expressions': [
    ERROR,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-vars': OFF,
  '@typescript-eslint/no-unused-vars': [
    WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  'no-useless-constructor': OFF,
  '@typescript-eslint/no-useless-constructor': ERROR,
  'class-methods-use-this': ERROR,
  eqeqeq: [ERROR, 'always', { null: 'ignore' }],
  'no-alert': ERROR,
  'no-console': ERROR,
  'no-constructor-return': ERROR,
  'no-lonely-if': ERROR,
  'no-promise-executor-return': ERROR,
  'no-shadow': ERROR,
  'no-template-curly-in-string': ERROR,
  'no-unreachable-loop': ERROR,
  'no-warning-comments': [
    ERROR,
    {
      terms: ['@nocommit'],
      location: 'anywhere',
    },
  ],
  'prefer-const': ERROR,
  'require-await': ERROR,
  'require-yield': ERROR,
  'symbol-description': ERROR,
  yoda: ERROR,
};
