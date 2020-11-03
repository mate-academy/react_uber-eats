import { RESTAURANT_TYPES } from './actionTypes';
import { getRestaurantsDataById } from '../../utils/utils';

export const toggleLoader = data => ({
  type: RESTAURANT_TYPES.TOGGLE_IS_LOADING,
  payload: data,
});

export const toggleError = data => ({
  type: RESTAURANT_TYPES.TOGGLE_IS_ERROR,
  payload: data,
});

export const setRestaurantData = id => (dispatch) => {
  dispatch(toggleLoader(true));
  getRestaurantsDataById(id)
    .then(({ data }) => {
      dispatch({
        type: RESTAURANT_TYPES.SET_RESTAURANT_DATA,
        payload: data?.data,
      });
      dispatch(toggleLoader(false));
    })
    .catch(() => {
      dispatch(toggleLoader(false));
    });
};
