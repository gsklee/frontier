// Root Reducer
// ============
//
// This file simply combines and exports all other Redux reducers.
//
// Import Modules
// --------------
//
// ### NPM Modules

import {combineReducers} from 'redux';

// ### Local Modules

import exampleReducer from 'scripts/reducers/example';

// Export Module
// -------------
//
// This module combines all other Redux reducers into the root reducer.

export default combineReducers({
  example: combineReducers(exampleReducer)
});
