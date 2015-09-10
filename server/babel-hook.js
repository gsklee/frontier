/*

[Babel Hook File](https://babeljs.io/docs/usage/require/)
=========================================================

Do not use ES6 Import/Export because:

1. The syntax is not yet supported by V8
2. The require hook relies on overriding the `require` function

*/

require('babel-core/register');

global.__projectRoot = require('path').resolve(__dirname, '..');

module.exports = require({
  [__filename]: './server'
}[process.argv[1]]);
