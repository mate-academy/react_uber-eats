import { RESTAURANT_LIST_TYPES } from '../actions/actionTypes';

const initialState = {
  restaurantListData: [],
  isLoading: false,
  isError: false,
};

export const restaurantListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESTAURANT_LIST_TYPES.SET_RESTAURANT_LIST_DATA:
      return {
        ...state,
        restaurantListData: payload,
      };

    case RESTAURANT_LIST_TYPES.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case RESTAURANT_LIST_TYPES.TOGGLE_IS_ERROR:
      return {
        ...state,
        isError: payload,
      };

    default:
      return state;
  }
};
