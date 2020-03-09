import {SET_RESTAURANTS_LIST, Actions, IRestaurantsList} from '../types';

const restaurantsListReducer = (
  state: IRestaurantsList[] = [],
  action: Actions
) => {
  switch (action.type) {
    case SET_RESTAURANTS_LIST:
      return action.restaurantsList;

    default: return state;
  }
}

export default restaurantsListReducer;
