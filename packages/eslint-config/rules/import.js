// const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  'import/first': ERROR,
  'import/no-amd': ERROR,
  'import/no-webpack-loader-syntax': ERROR,
  'import-helpers/order-imports': [
    ERROR,
    {
      'newlinesBetween': 'always',
      'groups': [
        '/^react/',
        'module',
        ['/^@/', '/^~/'],
        ['parent', 'sibling'],
        'type',
        'index',
      ],
      'alphabetize': {
        'order': 'asc',
        'ignoreCase': true,
      }
    },
  ],
};
