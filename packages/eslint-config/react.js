const reactRules = require('./rules/react');
const reactSettings = require('./settings/react');

module.exports = {
  extends: [
    './index.js',
    "plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/strict",
  ],
  plugins: ["import", "react", "react-hooks", "jsx-a11y"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("@babel/preset-react")],
    },
  },
  settings: {
    ...reactSettings,
  },
  rules: {
    ...reactRules
  }
};
