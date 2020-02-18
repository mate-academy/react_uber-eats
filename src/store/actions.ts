import {
  ADD_PRICE_TOGGLE,
  addPriceToggleAction,
  addPriceCheckboxAction,
  setIscheckedAction,
  SET_IS_CHECKED,
  ADD_PRICE_CHECKBOX,
  setSubtitleAction,
  SET_SUBTITLE,
  setCustomItemAction,
  SET_CUSTOM_ITEM,
  increaseCounterAction,
  INCREASE_COUNTER,
  decreaseCounterAction,
  DECREASE_COUNTER,
  setCurrentPriceAction,
  SET_CURRENT_PRICE,
  addPrice,
  setHasErrorAction,
  SET_HAS_ERROR,
  SET_ADDRESS,
  SET_SEARCH,
  SET_TIME,
  TOGGLE_DELIVERY,
  TOGGLE_SEARCH,
  CLOSE_MOBILE,
  toggleDeliveryAction,
  toggleSearchAction,
  setAddressACtion,
  setSearchAction,
  setTimeAction,
  closeMobileAction,
  START_LOADING,
  STOP_LOADING,
  startLoadingAction,
  stopLoadingAction,
  setMenuItemAction,
  SET_MENU_ITEM,
  IRestaurant,
  setRestaurantAction,
  SET_RESTAURANT,
  IRestaurantsList,
  SET_RESTAURANTS_LIST,
  setRestaurantsListAction,
  setUuidAction,
  SET_UUID,
  locationList,
  setLocationListAction,
  SET_LOCATION_LIST,
  setLocationAction,
  SET_LOCATION,
} from '../types';

export const setLocation = (location: string): setLocationAction => ({
  type: SET_LOCATION,
  location,
})
export const setLocationList = (locationList: locationList): setLocationListAction => ({
  type: SET_LOCATION_LIST,
  locationList,
})
export const setCurrentUuid  = (currentUuid: string): setUuidAction => ({
  type: SET_UUID,
  currentUuid,
});

export const setRestaurantsList = (restaurantsList: IRestaurantsList): setRestaurantsListAction => ({
  type: SET_RESTAURANTS_LIST,
  restaurantsList,
});

export const setRestaurant = (restaurant: IRestaurant): setRestaurantAction => ({
  type: SET_RESTAURANT,
  restaurant,
});

export const setMenuItem = (menuItem: IRestaurant &
  { imageUrl: string, itemDescription: string, customizationsList: any[] }
  ): setMenuItemAction => ({
  type: SET_MENU_ITEM,
  menuItem,
})
export const startLoading = (): startLoadingAction => ({ type: START_LOADING });

export const stopLoading = (): stopLoadingAction => ({ type: STOP_LOADING });

export const toggleSearch = (): toggleSearchAction => ({ type: TOGGLE_SEARCH });

export const toggleDelivery = (): toggleDeliveryAction => ({ type: TOGGLE_DELIVERY });

export const setAddress = (address: string): setAddressACtion => ({
  type: SET_ADDRESS,
  address,
});
export const setTime = (time: string | number): setTimeAction => ({
  type: SET_TIME,
  time,
});
export const setSearch = (search: string): setSearchAction => ({
  type: SET_SEARCH,
  search,
});
export const closeMobile = (): closeMobileAction => ({ type: CLOSE_MOBILE });

export const setHasError = (hasError: boolean):setHasErrorAction  => ({
  type: SET_HAS_ERROR,
  hasError
});

export const setCurrentPrice = (currentPrice: number): setCurrentPriceAction =>
  ({
  type: SET_CURRENT_PRICE,
  currentPrice,
})
export const addPriceToggle = (addPrice: addPrice[]): addPriceToggleAction =>
  ({
  type: ADD_PRICE_TOGGLE,
  addPrice,
});

export const addPriceCheckbox = (
  addPrice: addPrice[]): addPriceCheckboxAction => ({
    type: ADD_PRICE_CHECKBOX,
    addPrice,
});

export const setIsChecked = (isChecked: boolean): setIscheckedAction => ({
  type: SET_IS_CHECKED,
  isChecked,
});

export const setSubtitle = (subtitle: string) : setSubtitleAction => ({
  type: SET_SUBTITLE,
  subtitle,
});

export const setCustomItem = (customItem: string): setCustomItemAction => ({
  type: SET_CUSTOM_ITEM,
  customItem,
});

export const increaseCounter = (): increaseCounterAction => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = (): decreaseCounterAction => ({
  type: DECREASE_COUNTER,
});
