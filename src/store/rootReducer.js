import { combineReducers } from 'redux';
import auth, { types } from './modules/auth';
import locations from './modules/locations';

const appReducer = combineReducers({
  auth,
  locations,
});

const rootReducer = (state, action) => {
  if (action.type === types.USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
