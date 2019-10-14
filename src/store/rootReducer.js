import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  restaurantInfo: null,
  isLoading: false,
  error: null,
  modalWindowInfo: {
    isOpened: false,
    openedWindowId: null,
  },
  menuItemInfo: null,
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
        modalWindowInfo: {
          isOpened: true,
          openedWindowId: payload,
        },
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
        modalWindowInfo: {
          isOpened: false,
          openedWindowId: null,
        },
      };
    }

    default:
      return state;
  }
}
