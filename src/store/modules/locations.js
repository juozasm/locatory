export const types = {
  SET_LOCATIONS: 'SET_LOCATIONS',
};

export function setLocations(locations) {
  return { type: types.SET_LOCATIONS, payload: locations };
}

const initialState = null;

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default locationsReducer;
