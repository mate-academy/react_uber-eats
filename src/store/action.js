import getDataFromServer from '../components/getDataFromServer';

const api = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const ACTION_TYPES_SAVE_RESTAURANT = 'SAVE_RESTAURANT';

const saveRestaurants = data => ({
  type: ACTION_TYPES_SAVE_RESTAURANT,
  payload: data,
});

export const loadRestaurants = () => async(dispatch) => {
  const responce = await (getDataFromServer(api));

  dispatch(saveRestaurants(responce.data));
};
