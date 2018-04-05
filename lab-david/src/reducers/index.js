'use strict';

import {combineReducers} from 'redux';
import pol from './pol-reducer';
import ins from './ins-reducer';
import ill from './ill-reducer';

export default combineReducers({pol, ins, ill});