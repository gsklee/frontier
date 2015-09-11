// Webpack Configuration
// =====================

import Webpack from 'webpack';

export default {

  // Development Settings
  // --------------------

  devtool: 'eval',

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

  // ### [Plugins](http://webpack.github.io/docs/list-of-plugins.html)

  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(true)
  ]
};
