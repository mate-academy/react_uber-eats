export const ACTION_TYPES = {
  SAVE_RESTOURANTS: 'SAVE_RESTOURANTS',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_RESTOURANTS_ERROR: 'SET_RESTOURANTS_ERROR',
}

const saveRestourants = (data) => ({
  type: ACTION_TYPES.SAVE_RESTOURANTS,
  payload: data,
});

const setRestourantsError = error => ({
  type: ACTION_TYPES.SET_RESTOURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

export const loadRestourants = () => (dispatch) => {
  dispatch(startLoading());
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants ')
    .then(response => response.json())
    .then(({data}) => {
      dispatch(saveRestourants(data))
    })
    .catch(error => dispatch(setRestourantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
}
