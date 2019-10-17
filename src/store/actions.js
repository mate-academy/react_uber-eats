export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

export const loadRestaurants = () => (dispatch) => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(response => response.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    });
};
