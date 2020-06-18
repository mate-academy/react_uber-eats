import { Dispatch } from "react";
import {
  setRestaurants,
  errorMessage,
  loadingStatus,
  setRestaurantInfo,
} from "./actionCreators";
import { getRestaurantsData, getRestaurantInfo } from "./../helper/api";
import { loadedStatus } from "./actionCreators";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import restaurantsReducer from "./restaurants";
import loadingReducer from "./loading";
import loadedReducer from "./loaded";
import errorMessageReducer from "./errorMessage";
import restaurantInfoReducer from "./restaurantInfo";
import popupStatusReducer from "./popup";
import popupCurrentId from './popupCurrent';
import cartReducer from './cart';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  isLoading: loadingReducer,
  isLoaded: loadedReducer,
  errorMessage: errorMessageReducer,
  restaurantInfo: restaurantInfoReducer,
  popupStatus: popupStatusReducer,
  popupId: popupCurrentId,
  cartData: cartReducer,
});

export const fetchRestaurantData = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadingStatus(true));

    try {
      const restaurantData: RestaurantCard[] = await getRestaurantsData();
      dispatch(setRestaurants(restaurantData));
      dispatch(loadedStatus(true));
    } catch (error) {
      dispatch(errorMessage("Ooops, something went wrong.. :( " + error));
    }

    dispatch(loadingStatus(false));
  };
};

export const fetchRestaurantInfo = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadingStatus(true));

    try {
      const restaurant: RestaurantInfo = await getRestaurantInfo(id);

      dispatch(setRestaurantInfo(restaurant));
      dispatch(loadedStatus(true));
    } catch (error) {
      dispatch(errorMessage("Ooops, something went wrong.. :( " + error));
    }

    dispatch(loadingStatus(false));
  };
};

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
