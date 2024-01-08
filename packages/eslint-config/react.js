const reactRules = require('./rules/react');
const reactSettings = require('./settings/react');

module.exports = {
  extends: ['./index.js', './jsx.js', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@babel/preset-react')],
    },
  },
  settings: {
    ...reactSettings,
  },
  rules: {
    ...reactRules,
  },
};
