import { setRestaurantPage } from '../store/restaurantPage';
import { setIsLoading } from '../store/isLoading';

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurantPage = (uuid, setLoaded) => (dispatch) => {
  fetch(`${URL}/${uuid}`)
    .then(response => response.json())
    .then(data => dispatch(setRestaurantPage(data.data)))
    .catch(() => setLoaded(false))
    .finally(() => dispatch(setIsLoading(false)));
};
