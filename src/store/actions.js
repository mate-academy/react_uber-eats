import { getRestaurants } from '../API/uber_eats_api';

export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const SEARCH_ADDRESS = 'SEARCH_ADDRESS';
export const ACTIVATE_QUERY = 'ACTIVATE_QUERY';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const TOTAL_RESTAURANTS = 'TOTAL_RESTAURANTS';
export const CHANGE_CURRENT_NUMBER = 'CHANGE_CURRENT_NUMBER';

const loadRestaurantsSuccess = restaurants => ({
  type: LOAD_SUCCESS, restaurants,
});

export const loadRestaurants = () => (dispatch) => {
  getRestaurants()
    .then(({ data }) => dispatch(loadRestaurantsSuccess(data)));
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
