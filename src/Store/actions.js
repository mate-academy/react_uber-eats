export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const setLoadError = error => ({
  type: ACTION_TYPES.SET_LOAD_ERROR,
  payload: error,
});

export const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

export const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());

  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(url => url.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    })
    .catch(error => dispatch(setLoadError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
