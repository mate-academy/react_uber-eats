const ACTION_TYPES = {
  SET_RESTAURANT_PAGE: 'SET_RESTAURANT_PAGE',
};

export const setRestaurantPage = payload => ({
  type: ACTION_TYPES.SET_RESTAURANT_PAGE,
  payload,
});

const restaurantPageReducer = (restaurantPage = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANT_PAGE:
      return action.payload;

    default:
      return restaurantPage;
  }
};

export default restaurantPageReducer;
