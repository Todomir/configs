const config = require('../config');

module.exports = {
  'react/react-in-jsx-scope': config.OFF,
  'react-hooks/exhaustive-deps': config.ERROR,
};
