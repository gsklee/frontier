// Example Reducer
// ===============
//
// This file defines a Redux reducer example.
//
// Export Module
// -------------
//
// This module contains the following Redux reducers.

export default {
  count (state = 0, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;

      default:
        return state;
    }
  }
};
