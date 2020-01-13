import getDataFromServer from '../getDataApi';

export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const restaurantsURL
  = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurants = () => async(dispatch) => {
  const { data } = await getDataFromServer(restaurantsURL);

  dispatch(saveRestaurants(data));
};
