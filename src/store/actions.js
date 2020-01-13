import { getRestaurantsFromServer } from '../api';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const setRestaurantsError = error => ({
  type: ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

export const loadRestaurants = () => async(dispatch) => {
  dispatch(startLoading());

  try {
    const { data } = await getRestaurantsFromServer();

    dispatch(saveRestaurants(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  }

  dispatch(stopLoading());
};
