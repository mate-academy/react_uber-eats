import { Actions, SET_RESTAURANT, IRestaurant, } from '../types';



const restaurantReducer = (state = {} as IRestaurant, action: Actions) => {
  switch (action.type) {
    case SET_RESTAURANT:
      return action.restaurant;
    default: return state;
  }
};

export default restaurantReducer;
