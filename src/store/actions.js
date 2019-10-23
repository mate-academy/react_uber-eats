const BASE_URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SAVE_RESTAURANT_PAGE: 'SAVE_RESTAURANT_PAGE',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const saveRestaurantPage = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANT_PAGE,
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

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());
  fetch(BASE_URL)
    .then(response => response.json())
    .then(({ data }) => dispatch(saveRestaurants(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadRestaurantPage = id => (dispatch) => {
  dispatch(startLoading());
  fetch(`${BASE_URL}${id}`)
    .then(response => response.json())
    .then(({ data }) => dispatch(saveRestaurantPage(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
