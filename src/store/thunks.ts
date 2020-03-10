import {
  getRestaurantData,
  getMenuItemData,
  getRestaurantsData,
  getLocationData,
} from "../Api";
import {
  Thunks,
  addPrice,
  IRestaurant,
  locationList,
  IMenuItemState,
  basket,
} from "../types";
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
  addItemInBasket,
  increaseCounterBasket,
  decreaseCounterBasket,
  editItem,
  setBasketItemId,
  resetBasket,
  setHasWarning,
  setBasketItemCount,
  setUtensils,
} from "./actions";

export const loadRestaurantsList = (
  location: string,
): Thunks => async dispatch => {
  dispatch(startLoading());

  const locationList = await getLocationData();
  const defaultLocation: locationList & string = locationList.data.locations[0];

  dispatch(setLocation(location || defaultLocation));
  dispatch(setLocationList(locationList.data));

  const restaurants = await getRestaurantsData(location);

  dispatch(setRestaurantsList(restaurants.data));
  dispatch(stopLoading());
};

export const loadMenuItem = (itemUuid: string): Thunks => async dispatch => {
  dispatch(startLoading());
  let menuItem = await getMenuItemData(itemUuid);
  const menuItemData: IMenuItemState = menuItem.data;

  if (menuItem === "error") {
    dispatch(setHasError(true));
    dispatch(stopLoading());
  } else {
    menuItem = {
      ...menuItem,
      data: {
        ...menuItemData,
        customizationsList: menuItem.data.customizationsList.map(
          (custom: any, i: number, customList: addPrice[]) => {
            if (
              i !== customList.indexOf(custom.title) ||
              i !== customList.lastIndexOf(custom)
            ) {
              return {
                ...custom,
                title: `${custom.title}-${i + 1}`,
                options: custom.options.map((option: any) => {
                  return {
                    ...option,
                    title: `${option.title}-${i + 1}`,
                  };
                }),
              };
            }
            return custom;
          },
        ),
      },
    };
    dispatch(setMenuItem(menuItemData));
    dispatch(setCurrentPrice(menuItem.data.price));
    dispatch(setHasError(false));
    dispatch(stopLoading());
  }
};

export const addItemToBasket = (
  hasWarning: boolean,
  uuid: string,
  title: string,
  restaurant: IRestaurant,
  customization: number,
  price: number,
  customInfo: addPrice[],
  basket: basket[],
  restaurantLocation: string,
): Thunks => async dispatch => {
  const id = +new Date();
  const item = {
    price: price,
    count: customization,
    restaurantTitle: restaurant.title,
    restaurantUuid: restaurant.uuid,
    itemTitle: title,
    itemUuid: uuid,
    customInfo,
    id,
    restaurantLocation,
  };
  if (hasWarning) {
    dispatch(resetBasket());
  }
  dispatch(addItemInBasket(item));
  dispatch(setHasWarning(false));
};

export const editItemInBasket = (
  uuid: string,
  title: string,
  restaurant: IRestaurant,
  customization: number,
  price: number,
  customInfo: addPrice[],
): Thunks => async dispatch => {
  const item = {
    price: price,
    count: customization,
    restaurantTitle: restaurant.title,
    restaurantUuid: restaurant.uuid,
    itemTitle: title,
    itemUuid: uuid,
    customInfo,
  };
  dispatch(editItem(item));
};

export const requestUtensils = (
  basketItemId: number,
): Thunks => async dispatch => {
  dispatch(setBasketItemId(basketItemId));
  dispatch(setUtensils(basketItemId));
};

export const increaseItem = (
  basketItemId: number,
): Thunks => async dispatch => {
  dispatch(setBasketItemId(basketItemId));
  dispatch(increaseCounterBasket(basketItemId));
};
export const decreaseItem = (
  basketItemId: number,
  count: number,
): Thunks => async dispatch => {
  if (count > 1) {
    dispatch(setBasketItemId(basketItemId));
    dispatch(decreaseCounterBasket(basketItemId));
  }
};

export const countBasketItems = (
  basketItemCout: string,
  basketItemId: number,
): Thunks => async dispatch => {
  dispatch(setBasketItemId(basketItemId));
  dispatch(setBasketItemCount(basketItemCout, basketItemId));
};

export const loadRestaurant = (uuid: string): Thunks => async dispatch => {
  dispatch(startLoading());
  const restaurant = await getRestaurantData(uuid);

  dispatch(setCurrentUuid(uuid));
  dispatch(setRestaurant(restaurant.data));
  dispatch(stopLoading());
};

export const setCustomPrice = (
  price: number,
  subtitle: string,
  type: string,
  customItem: string,
  uuid: string,
): Thunks => async dispatch => {
  if (type === "radio") {
    dispatch(addPriceToggle({ price, subtitle, customItem }));
  }

  if (type === "checkbox") {
    dispatch(addPriceCheckbox({ price, subtitle, customItem }));
  }
};
