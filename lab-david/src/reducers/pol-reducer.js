'use strict';

const validatePol = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR: policy must have an id');
  if(!payload.policynumber) throw new Error('VALIDATION ERROR: policy must have a policy number');
  if(!payload.ins_carrier) throw new Error('VALIDATION ERROR: policy must have an insurance carrier');
  if(!payload.death_benefit) throw new Error('VALIDATION ERROR: policy must have a death benefit');
  if(!payload.primary_insuredId) throw new Error('VALIDATION ERROR: policy must have a primary insured id');
}

export default (state=[], action) => {
  let (type, payload) = action;

  switch(type) {
    case 'POL_SET':
      return payload;
    case 'POL_CREATE':
      validatePol(payload);
      return [payload, ...state];
    case 'POL_UPDATE':
      validatePol(payload);
      return state.map(item => item._id === payload._id ? payload : item);
    case 'POL_DELETE':
      validatePol(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
}