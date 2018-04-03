'use strict';

const validateFolder = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: folder must have an id');
  }

  if (!payload.title) {
    throw new Error('VALIDATION ERROR: folder must have title');
  }

  if (!payload.description) {
    throw new Error('VALIDATION ERROR: folder must have description');
  }
}

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'FOLDER_SET':
      return payload;
    case 'FOLDER_CREATE':
      validateFolder(payload);
      return [payload, ...state];
    case 'FOLDER_UPDATE':
      validateFolder(payload);
      return state.filter(item => item._id !== payload._id);
    case 'FOLDER_DELETE':
      validateFolder(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
}