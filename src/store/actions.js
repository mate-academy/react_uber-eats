export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SAVE_RESTAURANT_INFO: 'SAVE_RESTAURANTS_INFO',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  MODAL_WINDOW_OPENING: 'MODAL_WINDOW_OPENING',
  SAVE_MENU_ITEM_DETAILS: 'SAVE_MENU_ITEM_DETAILS',
  CLOSE_MODAL_WINDOW: 'CLOSE_MODAL_WINDOW',
  CLEAN_MODAL_WINDOW_STATE: 'CLEAN_MODAL_WINDOW_STATE',
  SET_MENU_ITEM_ERROR: 'SET_MENU_ITEM_ERROR',
  ADD_LOCATIONS_VARIANTS: 'ADD_LOCATIONS_VARIANTS',
  ADD_CURRENT_LOCATION: 'ADD_CURRENT_LOCATION',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const loadRestaurants = (
  id = 'f6019ddf-0413-4024-b3e6-e949d8609c56'
) => (dispatch) => {
  dispatch(startLoading());

  // eslint-disable-next-line max-len
  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants?location=${id}`)
    .then(result => result.json())
    .then(({ data }) => dispatch(saveRestaurants(data)))
    .catch(error => dispatch(setRestaurantsError(error)))
    .finally(() => dispatch(stopLoading()));
};

const saveRestaurantInfo = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANT_INFO,
  payload: data,
});

export const loadRestaurantInfo = id => (dispatch) => {
  dispatch(startLoading());

  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${id}`)
    .then(result => result.json())
    .then(({ data }) => dispatch(saveRestaurantInfo(data)))
    .catch(error => dispatch(setRestaurantsError(error)))
    .finally(() => dispatch(stopLoading()));
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

export const openMenuItemModalWindow = id => ({
  type: ACTION_TYPES.MODAL_WINDOW_OPENING,
  payload: id,
});

const saveMenuItemDetails = data => ({
  type: ACTION_TYPES.SAVE_MENU_ITEM_DETAILS,
  payload: data,
});

const setMenuItemError = error => ({
  type: ACTION_TYPES.SET_MENU_ITEM_ERROR,
  payload: error,
});

export const loadMenuItemInfo = id => (dispatch) => {
  dispatch(startLoading());

  fetch(` https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/${id}`)
    .then(result => result.json())
    .then(({ data }) => dispatch(saveMenuItemDetails(data)))
    .catch(error => dispatch(setMenuItemError(JSON.stringify(error))))
    .finally(() => dispatch(stopLoading()));
};

export const closeModalWindow = () => ({
  type: ACTION_TYPES.CLOSE_MODAL_WINDOW,
});

export const cleanModalWindowState = () => ({
  type: ACTION_TYPES.CLEAN_MODAL_WINDOW_STATE,
});

const addLocationsVariantsToStore = ({ locationsMap }) => ({
  type: ACTION_TYPES.ADD_LOCATIONS_VARIANTS,
  payload: Object.values(locationsMap),
});

export const addCurrentLocation = id => (dispatch) => {
  dispatch(loadRestaurants(id));

  return {
    type: ACTION_TYPES.ADD_CURRENT_LOCATION,
    payload: id,
  };
};

export const loadLocationsVariants = () => (dispatch, getState) => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/locations')
    .then(result => result.json())
    .then(({ data }) => dispatch(addLocationsVariantsToStore(data)));

  if (!getState().currentLocation) {
    dispatch(loadRestaurants());
  }
};
