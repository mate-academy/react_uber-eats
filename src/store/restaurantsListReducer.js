const SET_RESTAURANTS_LIST = 'SET_RESTAURANTS_LIST';

export const setRestaurantsList = restaurantsList => ({
  type: SET_RESTAURANTS_LIST,
  restaurantsList,
});

const restaurantsListReducer = (state = null, action) => {
  switch (action.type) {
    case SET_RESTAURANTS_LIST:
      return action.restaurantsList;

    default: return state;
  }
};

export default restaurantsListReducer;
