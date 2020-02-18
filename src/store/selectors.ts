import { RootState } from '../types';


export const getRestaurantsList = ({ restaurantsList }: any) => (restaurantsList
  ? restaurantsList.feedItems.map(({ uuid }: any) => restaurantsList.storesMap[uuid])
  : undefined);

export const getRestaurant = (state: RootState)  => state.restaurant;

export const getHasError = (state: RootState) => state.hasError;

export const getIsLoading = (state: RootState) => state.isloading;

export const getCurrentUuid = (state: RootState) => state.currentUuid;

export const getMenuItem = (state: RootState) => state.menuItem;

export const getSubtitle = (state: RootState) => state.customization.subtitle;

export const getIsSearchVisible = (state: RootState) => state.input.isMobileSearchVisible;

export const getIsDeliveryVisible = (state: RootState) => state.input.isMobileDeliveryVisible;

export const getCounter = (state: RootState) => state.customization.counter;

export const getCurrentPrice = (state: RootState) => (
  (
    state.customization.currentPrice
      + state.customization.addPrice
          .reduce((accum: number, current: any) => accum + current[0], 0) )
      * state.customization.counter
  );
