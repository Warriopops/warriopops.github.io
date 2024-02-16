const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // Ajouter des plugins Babel
  addBabelPlugin('babel-plugin-transform-async-to-promises')
);