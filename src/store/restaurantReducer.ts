import { Actions, SET_RESTAURANT, } from '../types';



const restaurantReducer = (state = null, action: Actions) => {
  switch (action.type) {
    case SET_RESTAURANT:
      return action.restaurant;
    default: return state;
  }
};

export default restaurantReducer;
