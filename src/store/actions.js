export const ACTIONS_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
};

const saveRestaurants = data => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const setRestaurantsError = error => ({
  type: ACTIONS_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

export const loadRestaurants = () => async(dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(
      'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants'
    );
    const { data } = await response.json();

    dispatch(saveRestaurants(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  } finally {
    dispatch(stopLoading());
  }
};
