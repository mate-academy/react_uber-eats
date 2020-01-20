import { ACTION_TYPES } from './actions';

const initialState = {
  RestaurantListData: null,
  isLoading: false,
  error: null,
  searchQuery: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const {payload} = action;  // eslint-disable-line

      return {
        ...state,
        error: null,
        RestaurantListData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const {payload} = action; // eslint-disable-line

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SEARCH_RESTAURANT: {
      const { payload } = action;

      return {
        ...state,
        searchQuery: payload.value,
      };
    }

    default:
      return state;
  }
};
