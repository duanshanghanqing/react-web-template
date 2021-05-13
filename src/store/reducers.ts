import { combineReducers } from 'redux';
import { reducer as counter } from '../views/Counter/store';

export default combineReducers({
  counter,
});
