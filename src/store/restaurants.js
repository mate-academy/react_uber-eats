const ACTION_TYPES = {
  SET_RESTAURANTS: 'SET_RESTAURANTS',
};

export const setRestaurants = payload => ({
  type: ACTION_TYPES.SET_RESTAURANTS,
  payload,
});

const restaurantsReducer = (restaurants = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANTS:
      return action.payload;

    default:
      return restaurants;
  }
};

export default restaurantsReducer;
