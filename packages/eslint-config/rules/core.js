/* const OFF = 0; */
const WARN = 1;
const ERROR = 2;

module.exports = {
  'array-callback-return': WARN,
  'getter-return': WARN,
  'new-parens': WARN,
  'no-array-constructor': WARN,
  'no-caller': ERROR,
  'no-cond-assign': [WARN, 'except-parens'],
  'no-constant-condition': ERROR,
  'no-unreachable': ERROR,
  'no-constant-binary-expression': ERROR,
  'no-sequences': ERROR,
  'no-const-assign': ERROR,
  'no-control-regex': WARN,
  'no-dupe-args': WARN,
  'no-dupe-class-members': WARN,
  'no-dupe-keys': WARN,
  'no-duplicate-case': WARN,
  'no-empty-character-class': WARN,
  'no-empty-pattern': WARN,
  'no-duplicate-imports': WARN,
  'no-empty': [WARN, { allowEmptyCatch: true }],
  'no-eval': ERROR,
  'no-ex-assign': WARN,
  'no-extend-native': WARN,
  'no-extra-bind': WARN,
  'no-extra-label': WARN,
  'no-extra-boolean-cast': WARN,
  'no-func-assign': ERROR,
  'no-global-assign': ERROR,
  'no-implied-eval': WARN,
  'no-invalid-regexp': ERROR,
  'no-label-var': ERROR,
  'no-labels': [WARN, { allowLoop: true, allowSwitch: false }],
  'no-lone-blocks': WARN,
  'no-loop-func': WARN,
  'no-mixed-operators': [
    WARN,
    {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    },
  ],
  'no-unsafe-negation': ERROR,
  'no-new-func': WARN,
  'no-new-object': WARN,
  'no-octal': WARN,
  'no-redeclare': ERROR,
  'no-restricted-imports': [WARN],
  'no-script-url': WARN,
  'no-self-assign': WARN,
  'no-self-compare': WARN,
  'no-shadow-restricted-names': WARN,
  'no-sparse-arrays': WARN,
  'no-template-curly-in-string': WARN,
  'no-this-before-super': WARN,
  'no-undef': ERROR,
  'no-unused-expressions': [
    ERROR,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-labels': WARN,
  'no-unused-vars': [
    WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
    },
  ],
  'no-use-before-define': [
    ERROR,
    { classes: false, functions: false, variables: false },
  ],
  'no-useless-computed-key': ERROR,
  'no-useless-concat': ERROR,
  'no-useless-constructor': ERROR,
  'no-useless-escape': ERROR,
  'no-useless-rename': [
    WARN,
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  'require-yield': WARN,
  'use-isnan': WARN,
  'valid-typeof': WARN,
};
