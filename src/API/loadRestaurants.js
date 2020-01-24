import { setRestaurants } from '../store/restaurants';

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurants = () => (dispatch) => {
  fetch(URL)
    .then(response => response.json())
    .then(data => dispatch(setRestaurants(data.data)));
};
