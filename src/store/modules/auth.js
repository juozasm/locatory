export const types = {
  SET_TOKEN: 'SET_TOKEN',
  USER_LOGOUT: 'USER_LOGOUT',
};

export function setToken(token) {
  return { type: types.SET_TOKEN, payload: token };
}

export function logout() {
  return { type: 'USER_LOGOUT' };
}

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
