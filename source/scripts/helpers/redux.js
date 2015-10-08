// Redux Helpers
// =============
//
// This file defines Redux-related helpers.
//
// Import Modules
// --------------
//
// ### NPM Modules

import {keys} from 'bound-native-methods/object';

// Export Module
// -------------
//
// This module contains the following helpers.

export default {
  createReducers (schema, defaultState) {
    return schema::keys().reduce((reducers, stateName) => {
      reducers[stateName] = (state = defaultState[stateName], action) => {
        let transitions = schema[stateName];

        return transitions.hasOwnProperty(action.type) ? transitions[action.type](state, action) : state;
      };

      return reducers;
    }, {});
  }
};
