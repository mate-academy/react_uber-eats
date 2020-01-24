import { setRestaurantPage } from '../store/restaurantPage';

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurantPage = uuid => (dispatch) => {
  if (!uuid) {
    return;
  }

  fetch(`${URL}/${uuid}`)
    .then(response => response.json())
    .then(data => dispatch(setRestaurantPage(data.data)));
};
