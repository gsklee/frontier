// [Babel Hook File](https://babeljs.io/docs/usage/require/)
// =========================================================
//
// Do not use ES6 Import/Export in this file because:
//
// 1. The syntax is not yet supported by V8
// 2. The require hook relies on overriding the `require` function
//
// Import Modules
// --------------

require('babel-core/register');

// Define Globals
// --------------
//
// #### `global.__projectRoot`
//
// *`{string}`* Store the root path of the project.

global.__projectRoot = require('path').resolve(__dirname, '..');

// Run the Hooked File
// -------------------
//
// Determine which file to run according to the input command.

module.exports = require({
  [__filename]: './server'
}[process.argv[1]]);
