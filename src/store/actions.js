export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadRestaurantsAction = () => (dispatch) => {
  fetch(URL)
    .then(response => response.json())
    .then(data => dispatch(saveRestaurants(data.data)));
};
