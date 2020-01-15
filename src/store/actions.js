import { getRestaurantsFromServer } from '../api/restaurants';

export const ACTIONS_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_RESTAURANTS_ERROR: 'SET_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const getRestaurants = restaurants => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANTS,
  restaurants,
});

const setRestaurantsError = error => ({
  type: ACTIONS_TYPES.SET_RESTAURANTS_ERROR,
  error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());

  getRestaurantsFromServer()
    .then(({ data }) => dispatch(getRestaurants(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
