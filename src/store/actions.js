export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const finishLoading = () => ({
  type: ACTION_TYPES.FINISH_LOADING,
});

const setRestaurantsLoadError = error => ({
  type: ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurantsAction = () => (dispatch) => {
  dispatch(startLoading());

  fetch(URL)
    .then(response => response.json())
    .then(data => dispatch(saveRestaurants(data.data)))
    .catch(error => dispatch(setRestaurantsLoadError(error.message)))
    .finally(() => dispatch(finishLoading()));
};
