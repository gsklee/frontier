// Development Server
// ==================

import path from 'path';

import Express from 'express';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import WEBPACK_CONFIG from 'configs/webpack';

const app = Express();
const compiler = Webpack(WEBPACK_CONFIG);
const port = 5566;

// Configure Middleware
// --------------------
//
// ### Webpack Dev Middleware
//
// Serves the files emitted from Webpack over Express.

app.use(WebpackDevMiddleware(compiler));

// ### Webpack Hot Middleware
//
// Enable [Hot Module Replacement](http://webpack.github.io/docs/hot-module-replacement.html).

app.use(WebpackHotMiddleware(compiler));

// Configure Routing
// -----------------

app.get('*', (request, response, next) =>
  response.sendFile(path.join(global.__projectRoot, 'source/index.html'))
);

// Listen for Connection
// ---------------------

app.listen(port, 'localhost', error =>
  console.log(error || `Listening at http://localhost:${port}`)
);
