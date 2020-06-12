import {
  SET_RESTAURANTS,
  SET_LOADING,
  SET_LOADED,
  SET_MESSAGE,
  DELETE_RESTAURANT_INFO,
  SET_RESTAURANT_INFO,
  OPEN_POPUP,
  CLOSE_POPUP,
  SET_POPUP_ID,
} from "./actions";

export const setRestaurants = (restaurants: RestaurantCard[]) => ({
  type: SET_RESTAURANTS,
  restaurants,
});

export const loadingStatus = (status: boolean) => ({
  type: SET_LOADING,
  status,
});

export const loadedStatus = (status: boolean) => ({
  type: SET_LOADED,
  status,
});

export const errorMessage = (message: string) => ({
  type: SET_MESSAGE,
  message,
});

export const setRestaurantInfo = (info: RestaurantInfo) => ({
  type: SET_RESTAURANT_INFO,
  info,
});

export const deleteRestaurantInfo = () => ({
  type: DELETE_RESTAURANT_INFO,
});

export const openPopup = () => ({
  type: OPEN_POPUP,
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});

export const setPopupId = (id: string) => ({
  type: SET_POPUP_ID,
  id,
});

export const deletePopupId = () => ({
  type: CLOSE_POPUP,
});
