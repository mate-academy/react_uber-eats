import { getRestaurants } from '../API/uber_eats_api';

export const LOAD_SUCCESS = 'LOAD_SUCCESS';

const loadRestaurantsSuccess = restaurants => ({
  type: 'LOAD_SUCCESS', restaurants,
});

export const loadRestaurants = () => (dispatch) => {
  getRestaurants()
    .then(({ data }) => dispatch(loadRestaurantsSuccess(data)));
};
