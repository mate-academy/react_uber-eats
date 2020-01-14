export const ACTIONS_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const saveRestaurants = data => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

export const loadRestaurants = () => async(dispatch) => {
  const response = await fetch(
    'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants'
  );

  const { data } = await response.json();

  dispatch(saveRestaurants(data));
};
