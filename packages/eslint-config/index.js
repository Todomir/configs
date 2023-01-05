const coreRules = require('./rules/core');
const importRules = require('./rules/import');
const typescriptRules = require('./rules/ts');

const importSettings = require('./settings/import');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    ecmaVersion: 'latest'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  settings: {
    ...importSettings
  },
  rules: {
    ...coreRules,
    ...importRules
  },
  plugins: ['import', 'eslint-plugin-import-helpers'],
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended'
        /* "plugin:@typescript-eslint/recommended-requiring-type-checking", */
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ['@typescript-eslint'],
      rules: {
        ...typescriptRules
      }
    }
  ]
};
