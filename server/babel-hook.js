// [Babel Hook File](https://babeljs.io/docs/usage/require/)
// =========================================================
//
// This file serves as a Babel Hook, enabling the execution of JavaScript files written in ES2015+ on the server side.
//
// Do not use ES2015 Import/Export within *this very file* because:
//
// 1. The syntax is not yet supported by V8
//
// 2. The hooking mechanism relies on overriding the `require` function
//
// Import Modules
// --------------
//
// ### NPM Modules

require('babel-core/register');

// Define Globals
// --------------
//
// > `global.__projectRoot` : string
//
// Store the root path of the project.

global.__projectRoot = require('path').resolve(__dirname, '..');

// Export Module
// -------------
//
// Determine which file to run according to the input command. The result will be exported for consumption.

module.exports = require({
  [__filename]: './server'
}[process.argv[1]]);
