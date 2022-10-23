'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-clean-order',
  ],
  rules: {
    'declaration-empty-line-before': null,
    'custom-property-pattern': [
      '^(_)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],
  },
};
