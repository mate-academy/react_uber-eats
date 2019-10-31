const BASE_URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SAVE_RESTAURANT_PAGE: 'SAVE_RESTAURANT_PAGE',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_ORDER: 'SET_ORDER',
  SET_MODAL_WINDOW: 'SET_MODAL_WINDOW',
  SET_ALT_DATA_MODAL_WINDOW: 'SET_ALT_DATA_MODAL_WINDOW',
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

const setOrder = uuid => ({
  type: ACTION_TYPES.SET_ORDER,
  payload: uuid,
});

const setModalWindow = bool => ({
  type: ACTION_TYPES.SET_MODAL_WINDOW,
  payload: bool,
});

export const setAltDataModalWindow = data => ({
  type: ACTION_TYPES.SET_ALT_DATA_MODAL_WINDOW,
  payload: data,
});

export const hideModalWindow = () => (dispatch) => {
  dispatch(setModalWindow(false));
  dispatch(setOrder(null));
  dispatch(setRestaurantsError(null));
};

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());
  fetch(`${BASE_URL}restaurants/`)
    .then(response => response.json())
    .then(({ data }) => dispatch(saveRestaurants(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadRestaurantPage = id => (dispatch) => {
  dispatch(startLoading());
  fetch(`${BASE_URL}restaurants/${id}`)
    .then(response => response.json())
    .then(({ data }) => dispatch(saveRestaurantPage(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadMenuItem = uuid => (dispatch) => {
  dispatch(setModalWindow(true));
  dispatch(startLoading());
  fetch(`${BASE_URL}menu-items/${uuid}`)
    .then(response => response.json())
    .then(({ data }) => dispatch(setOrder(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
