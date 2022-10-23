'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-rational-order-fix',
  ],
  rules: {
    'declaration-empty-line-before': null,
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true,
      },
    ],
  },
};
