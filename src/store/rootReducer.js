import { ACTION_TYPES } from './actions';

export const initialState = {
  restaurantsListData: null,
  hasError: '',
  loadingRestaurants: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      return {
        ...state,
        restaurantsListData: action.payload,
      };
    }

    case ACTION_TYPES.DATA_LOADING: {
      return {
        ...state,
        loadingRestaurants: !state.loadingRestaurants,
      };
    }

    case ACTION_TYPES.HAS_ERROR: {
      return {
        ...state,
        hasError: action.payload,
      };
    }

    default:
      return state;
  }
}
