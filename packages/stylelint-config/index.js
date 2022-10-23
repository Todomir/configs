'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  rules: {
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true,
      },
    ],
  },
};
