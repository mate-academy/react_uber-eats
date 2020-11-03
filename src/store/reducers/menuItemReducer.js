import { MENU_ITEM_TYPES } from '../actions/actionTypes';

const initialState = {
  menuItemData: {},
  isLoading: false,
  isError: false,
};

export const menuItemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MENU_ITEM_TYPES.SET_MENU_ITEM_DATA:
      return {
        ...state,
        menuItemData: payload,
      };

    case MENU_ITEM_TYPES.TOGGLE_MENU_ITEM_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case MENU_ITEM_TYPES.TOGGLE_MENU_ITEM_IS_ERROR:
      return {
        ...state,
        isError: payload,
      };

    default:
      return state;
  }
};
