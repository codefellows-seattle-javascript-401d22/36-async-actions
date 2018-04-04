'use strict';

import reducers from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducers, applyMiddleware(thunk, reporter))
);

export default appCreateStore;