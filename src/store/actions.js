export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  HAS_ERROR: 'HAS_ERROR',
  DATA_LOADING: 'DATA_LOADING',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const hasError = message => ({
  type: ACTION_TYPES.HAS_ERROR,
  payload: message,
});

const dataLoading = () => ({
  type: ACTION_TYPES.DATA_LOADING,
});

export const loadRestaurants = () => (dispatch) => {
  dispatch(dataLoading());
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
      dispatch(dataLoading());
    })
    .catch((error) => {
      dispatch(hasError(error.message));
      dispatch(dataLoading());
    });
};
