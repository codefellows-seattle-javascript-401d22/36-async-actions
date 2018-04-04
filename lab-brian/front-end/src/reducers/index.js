import { combineReducers } from 'redux';
import entrees from './entrees';
import menus from './menus';

export default combineReducers({
  entrees,
  menus,
});