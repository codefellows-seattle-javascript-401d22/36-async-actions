'use strict';

const validateIll = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR: illustration must have an id');
  if(!payload.date) throw new Error('VALIDATION ERROR: illustration must have a date');
  if(!payload.premiums_until_age) throw new Error('VALIDATION ERROR: illustration must have premiums to age...');
  if(!payload.inforce_until_age) throw new Error('VALIDATION ERROR: illustration must have inforce until age...');
  if(!payload.annualized_premiums) throw new Error('VALIDATION ERROR: illustration must have annualized premiums');
  if(!payload.lifepolicyId) throw new Error('VALIDATION ERROR: illustration must have a life policy id');
}

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type){
    case 'ILL_CREATE':
      validateIll(payload);
      return [payload, ...state];
    default:
      return state;
  }
}