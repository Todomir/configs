// const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  'import/first': ERROR,
  'import/no-amd': ERROR,
  'import/no-webpack-loader-syntax': ERROR,
  'import/order': [
    ERROR,
    {
      'newlines-between': 'always',
      groups: [
        'builtin',
        ['sibling, parent'],
        'internal',
        'external',
        'type',
        'object',
        'index',
      ],
      pathGroups: [
        {
          pattern: '~/**',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@/**',
          group: 'external',
          position: 'before',
        },
      ],
    },
  ],
};
