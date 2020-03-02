import { RootState, basket, addPrice, IRestaurantCard } from '../types';

export const getRestaurantsList = ({ restaurantsList }: any) => (restaurantsList
  ? restaurantsList.feedItems.map(({ uuid }: IRestaurantCard) => (
      restaurantsList.storesMap[uuid])
    )
  : undefined);

export const getLocationList = (state: RootState) => (
  state.location.locationList
  );

export const getLocation = (state: RootState) => state.location.location;

export const getRestaurant = (state: RootState)  => state.restaurant;

export const getBasket = (state: RootState) => state.basket.basket;

export const getIsEditable = (state: RootState) => (
  state.customization.isEditable
);

export const getTotalCount = (state: RootState) => {
  return state.basket.basket.length === 1
    ? state.basket.basket[0].count
    : state.basket.basket.reduce((totalCount: number, basketItem: basket) =>(
        totalCount + basketItem.count
    ), 0);
};

export const getFullPrice = (state: RootState) => {
  return state.basket.basket.length > 1
    ? state.basket.basket.reduce((accum: basket, curr: basket) =>{
      return typeof accum === 'number'
        ? accum + (curr.price * curr.count)
        :(accum.price * accum.count) + (curr.price * curr.count)
     })
    : +state.basket.basket.map((item: basket) => item.price * item.count)
        .join('');
  }

 export const getHash = (state: RootState) => state.router.location.hash;

export const getIsBasketShown = (state: RootState) => (
  state.basket.isBasketShown
);

export const getIsUtensilsRequested = (state: RootState) => (
  state.basket.isUtensilsRequested
);

export const getHasError = (state: RootState) => state.hasError;

export const getHasWarning = (state: RootState) => state.hasWarning;

export const getIsLoading = (state: RootState) => state.isloading;

export const getCurrentUuid = (state: RootState) => state.currentUuid;

export const getMenuItem = (state: RootState) => state.menuItem;

export const getIsSearchVisible = (state: RootState) => (
  state.input.isMobileSearchVisible
);

export const getIsDeliveryVisible = (state: RootState) => (
  state.input.isMobileDeliveryVisible
);

export const getBasketItemId = (state: RootState) => state.basket.basketItemId;

export const getRestaurantNotes = (state: RootState) => (
  state.basket.restaurantNotes
);

export const getCounter = (state: RootState) => state.customization.counter;

export const getCustomInfo = (state: RootState) => (
  state.customization.addPrice
);

export const getCurrentPrice = (state: RootState) => (
  (
    state.customization.currentPrice
      + state.customization.addPrice
          .reduce((accum: number, current: addPrice) => (
            accum + current.price)
          , 0))
  );
