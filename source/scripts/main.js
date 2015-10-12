// Web App Initter
// ===============
//
// This file configures Redux and kicks off the rendering of the web app.
//
// Import Modules
// --------------
//
// ### NPM Modules

import 'babel-core/polyfill';
import {keys} from 'bound-native-methods/object';
import React from 'react'; // Required by JSX
import {render} from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';

// ### Local Modules

import {defaultState} from 'scripts/configs';
import * as reducers from 'scripts/reducers';
import App from 'scripts/containers/App';

// Configure Redux Store
// ---------------------
//
// Apply the following [Redux middleware](https://github.com/rackt/redux/blob/master/docs/advanced/Middleware.md):
//
// * [Redux Thunk](https://github.com/gaearon/redux-thunk) - Enable function-based [async actions](https://github.com/rackt/redux/blob/master/docs/advanced/AsyncActions.md)
// * [Redux Promise](https://github.com/acdlite/redux-promise) - Enable promise-based async actions
// * [Redux Logger](https://github.com/fcomb/redux-logger) - Add action logger

function configureStore (initialState) {
  return applyMiddleware(
    ReduxThunk,
    ReduxPromise,
    createLogger()
  )(createStore)(
    combineReducers(
      defaultState::keys().reduce((metareducers, stateName) => {
        metareducers[stateName] = combineReducers(reducers[stateName]);

        return metareducers;
      }, {})
    ),

    initialState);
}

// Render the Web App
// ------------------
//
// Render the React entry container `< App/>` - which is wrapped inside the Redux container `< Provider/>` - in `<#app/>`.

render(
  <Provider store = {configureStore()}>
    <App/>
  </Provider>,

  document.getElementById('app')
);
