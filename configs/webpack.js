// Webpack Configuration
// =====================
//
// Import Modules
// --------------
//
// ### Node.js Modules

import path from 'path';

// ### NPM Modules

import {assign} from 'bound-native-methods/object';
import Webpack from 'webpack';

// Define Values
// -------------

const isProduction = process.env.NODE_ENV === 'production';

// Export Module
// -------------

export default {

  // General Settings
  // ----------------

  entry: [
    'webpack-hot-middleware/client',
    './source/scripts/main'
  ],

  output: {
    path: '/', // Required by Webpack Dev Middleware
    filename: 'main.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  // ### [Module Resolution](http://webpack.github.io/docs/configuration.html#resolve)
  //
  // Set the `source` directory as the root when resolving local modules to eliminate the clutter associated with importing from a deeply nested directory structure.
  //
  // #### Why not use `resolve.modulesDirectories`?
  //
  // See [https://github.com/webpack/webpack/issues/472](https://github.com/webpack/webpack/issues/472).

  resolve: {
    root: path.join(global.__projectRoot, 'source')
  },

  // ### [Plugins](http://webpack.github.io/docs/list-of-plugins.html)

  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(true)
  ]
}::assign(!isProduction && {

  // Development Settings
  // --------------------
  //
  // See [https://webpack.github.io/docs/configuration.html#devtool](https://webpack.github.io/docs/configuration.html#devtool).

  devtool: 'cheap-module-eval-source-map'
});
