const SAVE_RESTAURANTS = 'SAVE_RESTAURANTS';

export const saveRestaurants = restaurants => ({
  type: SAVE_RESTAURANTS,
  restaurants,
});

const restaurantsReducer = (restaurants = null, action) => {
  switch (action.type) {
    case SAVE_RESTAURANTS:
      return action.restaurants;
    default:
      return restaurants;
  }
};

export default restaurantsReducer;
