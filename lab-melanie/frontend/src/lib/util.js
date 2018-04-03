'use strict';

export const logError = (...args) => {
  __DEBUG__ ? console.log('logError args', ...args) : undefined;
};

export const classToggler = options => 
  Object.keys(options).filter(key => !!options[key].join(' '));