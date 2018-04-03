'use strict';

const validateIns = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR: insured must have an id');
  if(!payload.first_name) throw new Error('VALIDATION ERROR: insured must have a first name');
  if(!payload.last_name) throw new Error('VALIDATION ERROR: insured must have a last name');
  if(!payload.dateofbirth) throw new Error('VALIDATION ERROR: insured must have a date of birth');
  if(payload.gender !== 'M' && payload.gender !== 'F') throw new Error('VALIDATION ERROR: insured gender must be M or F');
}

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'INS_SET':
      return payload;
    case 'INS_CREATE':
      validateIns(payload);
      return [payload, ...state];
    case 'INS_UPDATE':
      validateIns(payload);
      return state.map(item => item._id === payload._id ? payload : item);
    case 'INS_DELETE':
      validateIns(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
}