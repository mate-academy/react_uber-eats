import { getRestaurants } from '../API/uber_eats_api';

export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const SEARCH_ADDRESS = 'SEARCH_ADDRESS';
export const ACTIVATE_QUERY = 'ACTIVATE_QUERY';

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
