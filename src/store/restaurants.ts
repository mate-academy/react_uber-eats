import { SET_RESTAURANTS } from "./actions";
import { Action } from "redux";

type Restaurants = Action<typeof SET_RESTAURANTS> & {
  restaurants: RestaurantCard[];
};

const reducer = (restaurants = [] as RestaurantCard[], actions: Restaurants) => {
  switch (actions.type) {
    case SET_RESTAURANTS:
      return actions.restaurants;

    default:
      return restaurants;
  }
};

export default reducer;
