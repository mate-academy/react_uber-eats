import getDataFromServer from '../getDataApi';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const setRestaurantsError = error => ({
  type: ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const restaurantsURL
  = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurants = () => async(dispatch) => {
  dispatch(startLoading());
  try {
    const { data } = await getDataFromServer(restaurantsURL);

    dispatch(saveRestaurants(data));
  } catch (error) {
    dispatch(setRestaurantsError(error.message));
  }

  dispatch(stopLoading());
};
