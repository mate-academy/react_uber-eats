import { ACTION_TYPES } from './actions';

const initialStore = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
  restaurantData: null,
};

export function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANT: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

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

    default:
      return state;
  }
}
