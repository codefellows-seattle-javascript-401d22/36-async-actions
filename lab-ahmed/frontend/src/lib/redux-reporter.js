
'use strict';

const reporter = store => next => action => {
  console.log('__ACTION IN REDUX REPORTER__', action);
  
  try {
    console.log('__STATE IN REDUX REPORTER__', store.getState());
    return next(action);
  } catch (error) {
    console.error('__ERROR__', error);
    return error.action;
  }
};

export default reporter;