import { getRestaurantsFromServer } from '../api/restaurants';

export const ACTIONS_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const getRestaurants = restaurants => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANTS,
  restaurants,
});

export const loadRestaurants = () => (dispatch) => {
  getRestaurantsFromServer()
    .then(({ data }) => dispatch(getRestaurants(data)));
};
