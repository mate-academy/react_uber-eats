const SET_RESTAURANTS = 'setRestaurants';

export const setRestaurants = restaurants => ({
  type: SET_RESTAURANTS,
  restaurants,
});

const restaurantsReducer = (restaurants = null, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    default:
      return restaurants;
  }
};

export default restaurantsReducer;
