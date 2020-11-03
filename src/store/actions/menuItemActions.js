import { MENU_ITEM_TYPES } from './actionTypes';
import { getRestaurantMenuItems } from '../../utils/utils';

export const toggleLoader = data => ({
  type: MENU_ITEM_TYPES.TOGGLE_MENU_ITEM_IS_LOADING,
  payload: data,
});

export const toggleErrorMenuItem = data => ({
  type: MENU_ITEM_TYPES.TOGGLE_MENU_ITEM_IS_ERROR,
  payload: data,
});

export const setMenuItemData = id => (dispatch) => {
  dispatch(toggleLoader(true));
  getRestaurantMenuItems(id)
    .then(({ data }) => {
      dispatch({
        type: MENU_ITEM_TYPES.SET_MENU_ITEM_DATA,
        payload: data?.data,
      });
      dispatch(toggleLoader(false));
    })
    .catch(() => {
      dispatch(toggleErrorMenuItem(true));
    });
};
