import { RootState } from "./index";

export const getRestaurants = (state: RootState) => state.restaurants;
export const getLoading = (state: RootState) => state.isLoading;
export const getErrorMessage = (state: RootState) => state.errorMessage;
export const getLoaded = (state: RootState) => state.isLoaded;
export const getRestInfo = (state: RootState) => state.restaurantInfo;
export const getPopupStatus = (state: RootState) => state.popupStatus;
export const getPopupId = (state: RootState) => state.popupId;
