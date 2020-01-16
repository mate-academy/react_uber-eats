export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SAVE_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestaurants = value => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: value,
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

export const uploadRestaurants = () => (dispatch) => {
  dispatch(startLoading());

  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
