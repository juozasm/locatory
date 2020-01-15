import { combineReducers } from 'redux';
import auth from './modules/auth';
import locations from './modules/locations';

export default combineReducers({
  auth,
  locations,
});
