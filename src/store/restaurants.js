const ACTION_TYPES = {
  SET_RESTAURANTS: 'SET_RESTAURANTS',
  SET_RESTAURANTS_QUERY: 'SET_RESTAURANTS_QUERY',
};

export const setRestaurants = payload => ({
  type: ACTION_TYPES.SET_RESTAURANTS,
  payload,
});

export const setRestaurantsQuery = payload => ({
  type: ACTION_TYPES.SET_RESTAURANTS_QUERY,
  payload,
});

const restaurantsReducer = (restaurants = {
  restaurants: null,
  query: '',
}, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANTS:
      return {
        ...restaurants,
        restaurants: action.payload,
      };

    case ACTION_TYPES.SET_RESTAURANTS_QUERY:
      return {
        ...restaurants,
        query: action.payload,
      };

    default:
      return restaurants;
  }
};

export default restaurantsReducer;
