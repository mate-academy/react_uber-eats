import { getRestaurants, getSingleRestaurant } from '../API/uber_eats_api';

export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_RESTAURANT = 'LOAD_RESTAURANT';
export const SEARCH_ADDRESS = 'SEARCH_ADDRESS';
export const ACTIVATE_QUERY = 'ACTIVATE_QUERY';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const TOTAL_RESTAURANTS = 'TOTAL_RESTAURANTS';
export const CHANGE_CURRENT_NUMBER = 'CHANGE_CURRENT_NUMBER';
export const ACTIVATE_MENU = 'ACTIVATE_MENU';
export const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW';
export const UUID_MODAL = 'UUID_MODAL';

const loadRestaurantsSuccess = restaurants => ({
  type: LOAD_SUCCESS, restaurants,
});

const loadedRestaurant = rest => ({
  type: LOAD_RESTAURANT, rest,
});

export const loadRestaurants = uuid => (dispatch) => {
  getRestaurants(uuid)
    .then(({ data }) => dispatch(loadRestaurantsSuccess(data)));
};

export const loadSelectedRestaurant = uuid => (dispatch) => {
  getSingleRestaurant(uuid)
    .then(({ data }) => dispatch(loadedRestaurant(data)));
};

export const setSearchAddress = bool => ({
  type: SEARCH_ADDRESS, bool,
});

export const setActivateQuery = bool => ({
  type: ACTIVATE_QUERY, bool,
});

export const changeQuery = query => ({
  type: CHANGE_QUERY, query,
});

export const setTotalRestaurants = total => ({
  type: TOTAL_RESTAURANTS, total,
});

export const setCurrentNumber = number => ({
  type: CHANGE_CURRENT_NUMBER, number,
});

export const toggleNav = menu => ({
  type: ACTIVATE_MENU, menu,
});

export const toggleModal = toggler => ({
  type: TOGGLE_MODAL_WINDOW, toggler,
});

export const setUUIDModal = uuid => ({
  type: UUID_MODAL, uuid,
});
