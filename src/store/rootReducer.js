import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  restaurantInfo: null,
  isLoading: false,
  error: null,
  modalWindowInfo: null,
  menuItemInfo: null,
  menuItemError: null,
  locationsVariants: null,
  currentLocation: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANT_INFO: {
      const { payload } = action;

      return {
        ...state,
        restaurantInfo: payload,
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

    case ACTION_TYPES.MODAL_WINDOW_OPENING: {
      const { payload } = action;

      return {
        ...state,
        modalWindowInfo: payload,
      };
    }

    case ACTION_TYPES.SAVE_MENU_ITEM_DETAILS: {
      const { payload } = action;

      return {
        ...state,
        menuItemInfo: payload,
      };
    }

    case ACTION_TYPES.CLOSE_MODAL_WINDOW: {
      return {
        ...state,
        modalWindowInfo: null,
        menuItemInfo: null,
      };
    }

    case ACTION_TYPES.CLEAN_MODAL_WINDOW_STATE: {
      return {
        ...state,
        menuItemInfo: null,
        menuItemError: null,
      };
    }

    case ACTION_TYPES.SET_MENU_ITEM_ERROR: {
      const { payload } = action;

      return {
        ...state,
        menuItemError: payload,
      };
    }

    case ACTION_TYPES.ADD_LOCATIONS_VARIANTS: {
      const { payload } = action;

      return {
        ...state,
        locationsVariants: payload,
      };
    }

    case ACTION_TYPES.ADD_CURRENT_LOCATION: {
      const { payload } = action;

      return {
        ...state,
        currentLocation: payload,
      };
    }

    default:
      return state;
  }
}
