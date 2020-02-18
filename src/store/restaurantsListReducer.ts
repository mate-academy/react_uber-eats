import {SET_RESTAURANTS_LIST, Actions} from '../types';

const restaurantsListReducer = (state = null, action: Actions) => {
  switch (action.type) {
    case SET_RESTAURANTS_LIST:
      return action.restaurantsList;

    default: return state;
  }
}

export default restaurantsListReducer;
