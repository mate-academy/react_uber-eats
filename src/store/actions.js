import axios from 'axios';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SEARCH_RESTAURANT: 'SET_SEARCH_RESTAURANT',
};

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

export const saveRESTAURANTS = (restaurants) => {
  const { data } = restaurants;

  return {
    type: ACTION_TYPES.SAVE_RESTAURANTS,
    payload: data,
  };
};

export const searchRESTAURANT = value => ({
  type: ACTION_TYPES.SEARCH_RESTAURANT,
  payload: value,
});

export const loadRESTAURANTS = () => async(dispatch) => {
  dispatch(startLoading());
  try {
    const { data } = await axios.get(
      'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants'
    );

    dispatch(saveRESTAURANTS(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  } finally {
    dispatch(stopLoading());
  }
};
