import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  restaurantPageData: null,
  isLoading: false,
  error: null,
  order: null,
  showModalWindow: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        restaurantsListData: payload,
        restaurantPageData: null,
      });
    }

    case ACTION_TYPES.SAVE_RESTAURANT_PAGE: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        restaurantPageData: payload,
      });
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return ({
        ...state,
        error: payload,
        restaurantsListData: null,
        restaurantPage: null,
        order: null,
      });
    }

    case ACTION_TYPES.START_LOADING: {
      return ({
        ...state,
        isLoading: true,
      });
    }

    case ACTION_TYPES.STOP_LOADING: {
      return ({
        ...state,
        isLoading: false,
      });
    }

    case ACTION_TYPES.SET_ORDER: {
      const { payload } = action;

      return ({
        ...state,
        order: payload,
      });
    }

    case ACTION_TYPES.SET_MODAL_WINDOW: {
      const { payload } = action;

      return ({
        ...state,
        showModalWindow: payload,
      });
    }

    default:
      return state;
  }
}
