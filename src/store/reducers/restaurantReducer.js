import { RESTAURANT_TYPES } from '../actions/actionTypes';

const initialState = {
  restaurantData: {},
  isLoading: false,
  isError: false,
};

export const restaurantReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESTAURANT_TYPES.SET_RESTAURANT_DATA:
      return {
        ...state,
        restaurantData: payload,
      };

    case RESTAURANT_TYPES.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case RESTAURANT_TYPES.TOGGLE_IS_ERROR:
      return {
        ...state,
        isError: payload,
      };

    default:
      return state;
  }
};
