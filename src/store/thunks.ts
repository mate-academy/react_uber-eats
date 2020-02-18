import {getRestaurantData, getMenuItemData, getRestaurantsData, getLocationData } from '../Api';
import { Thunks, addPrice } from '../types';
import {
  addPriceToggle,
  addPriceCheckbox,
  setCurrentPrice,
  setHasError,
  startLoading,
  stopLoading,
  setMenuItem,
  setRestaurant,
  setRestaurantsList,
  setCurrentUuid,
  setLocationList,
  setLocation,
} from './actions';

export const loadRestaurantsList = (location: string): Thunks => async(dispatch) => {
  dispatch(startLoading());

  const locationList = await getLocationData();
  const defaultLocation = locationList.data.locations[0]

  dispatch(setLocation(location || defaultLocation));
  dispatch(setLocationList(locationList.data));

  const restaurants = await getRestaurantsData(location);

  dispatch(setRestaurantsList(restaurants.data));
  dispatch(stopLoading());
};

export const loadMenuItem = (itemUuid: string): Thunks => async(dispatch) => {
  dispatch(startLoading());
  const menuItem = await getMenuItemData(itemUuid);
  if(menuItem === 'error') {
    dispatch(setHasError(true));
    dispatch(stopLoading());
  } else {
    dispatch(setMenuItem(menuItem.data));
    dispatch(setCurrentPrice(menuItem.data.price));
    dispatch(setHasError(false));
    dispatch(stopLoading());
  }
};

export const loadRestaurant = (uuid: string): Thunks => async(dispatch) => {
  dispatch(startLoading());
  const restaurant = await getRestaurantData(uuid);

  dispatch(setCurrentUuid(uuid));
  dispatch(setRestaurant(restaurant.data));
  dispatch(stopLoading());
};

export const getCustomPrice = (
  price: addPrice,
  subtitle: addPrice,
  type: string,
  customItem: addPrice): Thunks => async(dispatch) => {
  if (type === 'radio') dispatch(addPriceToggle([price, subtitle, customItem]));
  if (type === 'checkbox') dispatch(addPriceCheckbox([price, subtitle, customItem]))
};
