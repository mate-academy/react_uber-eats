import { SET_RESTAURANT_INFO, DELETE_RESTAURANT_INFO } from "./actions";
import { Action } from "redux";

type Set = Action<typeof SET_RESTAURANT_INFO> & {
  info: RestaurantInfo;
};

type Delete = Action<typeof DELETE_RESTAURANT_INFO>;

type GeneralType = Set | Delete

const reducer = (info = null as RestaurantInfo | null, actions: GeneralType) => {
  switch (actions.type) {
    case SET_RESTAURANT_INFO:
      return actions.info;

    case DELETE_RESTAURANT_INFO:
      return null;

    default:
      return info;
  }
};

export default reducer;
