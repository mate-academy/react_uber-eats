import { RESTAURANT_LIST_TYPES } from './actionTypes';
import { getRestaurantsListData } from '../../utils/utils';

export const toggleLoader = data => ({
  type: RESTAURANT_LIST_TYPES.TOGGLE_IS_LOADING,
  payload: data,
});

export const toggleError = data => ({
  type: RESTAURANT_LIST_TYPES.TOGGLE_IS_ERROR,
  payload: data,
});

export const setRestaurantListData = () => (dispatch) => {
  dispatch(toggleLoader(true));
  getRestaurantsListData()
    .then(({ data }) => {
      const storeData = Object.entries(data.data.storesMap);

      dispatch({
        type: RESTAURANT_LIST_TYPES.SET_RESTAURANT_LIST_DATA,
        payload: storeData,
      });
      dispatch(toggleLoader(false));
    })
    .catch(() => {
      dispatch(toggleLoader(false));
    });
};
