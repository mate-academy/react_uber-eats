import { setRestaurants } from './restaurants';
import { getRestaurantsFromServer } from '../api';

export const loadRestaurants = () => async(dispatch) => {
  const { data } = await getRestaurantsFromServer();

  dispatch(setRestaurants(data));
};
