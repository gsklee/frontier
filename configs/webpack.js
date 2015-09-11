// Webpack Configuration
// =====================

import {assign} from 'bound-native-methods/object';
import Webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

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

  // ### [Plugins](http://webpack.github.io/docs/list-of-plugins.html)

  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(true)
  ]
}::assign(!isProduction && {

  // Development Settings
  // --------------------

  devtool: 'eval'
});
