'use strict';

export default store => next => action => (
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
)
// ??? why parens
// what else could it be besides a function