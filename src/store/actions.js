export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
};

const saveRestaurants = value => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: value,
});

export const uploadRestaurants = () => (dispatch) => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    });
};
