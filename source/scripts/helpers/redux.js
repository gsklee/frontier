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
import {createAction} from 'redux-actions';

// Export Module
// -------------
//
// This module contains the following helpers.

export default {

  // > `createActions` : Function

  createActions (...actionNames) {
    return actionNames.reduce((actions, actionName) => {
      actions[actionName] = createAction(actionName);

      return actions;
    }, {});
  },

  // > `createReducers` : Function

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
