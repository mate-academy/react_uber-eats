import { ThunkAction } from 'redux-thunk';
import { reducer } from './store/index';
import { Action } from 'redux';
import { History } from 'history';

export const SET_UTENSILS = 'SET_UTENSILS';
export const SET_RESTAURANT_NOTES = 'SET_RESTAURANT_NOTES';
export const SET_BASKET_ITEM_COUNT = 'SET_BASKET_ITEM_COUNT';
export const RESET_BASKET = 'RESET_BASKET';
export const SET_IS_EDITABLE = 'SET_IS_EDITABLE';
export const SET_BASKET_ITEM_TITLE = 'SET_BASKET_ITEM_TITLE';
export const INCREASE_COUNTER_BASKET = 'INCREASE_COUNTER_BASKET';
export const DECREASE_COUNTER_BASKET = 'DECREASE_COUNTER_BASKET';
export const SET_COUNTER = 'SET_COUNTER';
export const SET_ADD_PRICE = 'SET_ADD_PRICE';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_LOCATION_LIST = 'SET_LOCATION_LIST';
export const SET_RESTAURANT = 'SET_RESTAURANT';
export const SET_UUID = 'SET_UUID';
export const SET_RESTAURANTS_LIST = 'SET_RESTAURANTS_LIST';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_TIME = 'SET_TIME';
export const SET_SEARCH = 'SET_SEARCH';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const TOGGLE_DELIVERY = 'TOGGLE_DELIVERY';
export const CLOSE_MOBILE = 'CLOSE_MOBILE';
export const SET_MENU_ITEM = 'SET_MENU_ITEM';
export const ADD_PRICE_TOGGLE = 'ADD_PRICE_TOGGLE';
export const ADD_PRICE_CHECKBOX = 'ADD_PRICE_CHECKBOX';
export const SET_IS_CHECKED = 'SET_IS_CHECKED';
export const SET_SUBTITLE = 'SET_SUBTITLE';
export const SET_CUSTOM_ITEM = 'SET_CUSTOM_ITEM';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const SET_CURRENT_PRICE = 'SET_CURRENT_PRICE';
export const SET_HAS_ERROR = 'SET_HAS_ERROR';
export const ADD_ITEM_IN_BASKET = 'ADD_ITEM_IN_BASKET';
export const SHOW_BASKET = 'SHOW_BASKET';
export const HIDE_BASKET = 'HIDE_BASKET';
export const SET_NEW_PRICE = 'SET_NEW_PRICE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SET_BASKET_ITEM_ID = 'SET_BASKET_ITEM_ID';
export const SET_HAS_WARNING = 'SET_HAS_WARNING';
export const RESET_ADD_PRICE = 'RESET_ADD_PRICE';

export type locationList = {
  locations: any[];
  locationsMap:Array<{
    title: string
    id: string,
  }>
};

export type setUtensilsAction = {
  type: typeof SET_UTENSILS,
  basketItemId: number,

}
export type setRestaurantNotesAction = {
  type: typeof SET_RESTAURANT_NOTES,
  restaurantNotes: string,
  basketItemId: number,
};

export type setBasketItemCountAction = {
  type: typeof SET_BASKET_ITEM_COUNT,
  basketItemCount: string,
  basketItemId: number,
};

export type resetaddPriceAction = {
  type: typeof RESET_ADD_PRICE,
};

export type resetBasketAction = {
  type: typeof RESET_BASKET,
};

export type setBasketItemIdAction = {
  type: typeof SET_BASKET_ITEM_ID,
  basketItemId: number,
};

export type editItemAction = {
  type: typeof EDIT_ITEM,
  basket: basket[],
};

export type setIsEditableAction = {
  type: typeof SET_IS_EDITABLE,
  isEditable: boolean,
};

export type removeItemAction = {
  type: typeof REMOVE_ITEM,
  basketItemId: number,
};

export type setBasketItemTitleAction = {
  type: typeof SET_BASKET_ITEM_TITLE,
  basketItemTitle: string,
};

export type increaseCounterBasketAction = {
  type: typeof INCREASE_COUNTER_BASKET;
  basketItemId: number;
};

export type decreaseCounterBasketAction = {
  type: typeof DECREASE_COUNTER_BASKET;
  basketItemId: number;
};

export type showBasketAction = {
  type: typeof SHOW_BASKET,
};

export type hideBasketAction = {
  type: typeof HIDE_BASKET,
};

export type setaddPriceAction = {
  type: typeof SET_ADD_PRICE;
  addPrice: addPrice[]
}
export type setCounterAction = {
  type: typeof SET_COUNTER;
  counter: number;
}


export type addItemInBasketAction = {
  type: typeof ADD_ITEM_IN_BASKET;
  basket: basket;
}

export type setLocationAction = {
  type: typeof SET_LOCATION;
  location: string;
};

export type setLocationListAction = {
  type: typeof SET_LOCATION_LIST;
  locationList: locationList;
};

export type setHasErrorAction = {
  type: typeof SET_HAS_ERROR;
  hasError: boolean;
};

export type setHasWarningAction = {
  type: typeof SET_HAS_WARNING,
  hasWarning: boolean;
};

export type setCurrentPriceAction = {
  type: typeof SET_CURRENT_PRICE;
  currentPrice: number;
};

export type increaseCounterAction = {
  type: typeof INCREASE_COUNTER;
};

export type decreaseCounterAction = {
  type: typeof DECREASE_COUNTER;
};

export type setCustomItemAction = {
  type: typeof SET_CUSTOM_ITEM;
  customItem: string
};

export type setIscheckedAction = {
  type: typeof SET_IS_CHECKED;
  isChecked: boolean;
};

export type setSubtitleAction = {
  type: typeof SET_SUBTITLE;
  subtitle: string;
};

export type addPrice = {
  price: number,
  subtitle: string,
  customItem: string,
};

export type basket = {
  price: number;
  count: number;
  restaurantTitle: string;
  restaurantUuid: string;
  itemTitle: string;
  itemUuid: string;
  customInfo: addPrice[];
  id: number;
  restaurantNotes?: string;
  utensils?: boolean;
};

export type addPriceToggleAction = {
  type: typeof ADD_PRICE_TOGGLE;
  addPrice: addPrice;
};

export type addPriceCheckboxAction = {
  type: typeof ADD_PRICE_CHECKBOX;
  addPrice: addPrice;
};

export type setMenuItemAction = {
  type: typeof SET_MENU_ITEM;
  menuItem: IRestaurant ;
};

export type toggleSearchAction = {
  type: typeof TOGGLE_SEARCH;
};

export type toggleDeliveryAction = {
  type: typeof TOGGLE_DELIVERY;
};

export type setAddressACtion = {
  type: typeof SET_ADDRESS;
  address: string;
};

export interface setTimeAction {
  type: typeof SET_TIME;
  time: string | number;
};

export type setSearchAction = {
  type: typeof SET_SEARCH;
  search: string;
};

export type closeMobileAction = {
  type: typeof CLOSE_MOBILE;
};

export type inputActionTypes =
  toggleDeliveryAction |
  toggleSearchAction |
  setSearchAction |
  setAddressACtion |
  setTimeAction |
  closeMobileAction;

export type startLoadingAction = {
  type: typeof START_LOADING;
};

export type stopLoadingAction = {
  type: typeof STOP_LOADING;
};

export type loadActionTypes = startLoadingAction | stopLoadingAction;

export type setUuidAction = {
  type: typeof SET_UUID;
  currentUuid: string;
};

export type setRestaurantsListAction = {
  type: typeof SET_RESTAURANTS_LIST;
  restaurantsList: IRestaurantsList;
};

export type setRestaurantAction = {
  type: typeof SET_RESTAURANT;
  restaurant: IRestaurant;
};

export interface ISelect {
  name: string;
  options: Array<{ value:string; label:string; }>;
  iconUrl: string;
};

export interface IInputState {
  address: string;
  time: string | number;
  search: string;
  isMobileSearchVisible: boolean;
  isMobileDeliveryVisible: boolean;
};

export interface IRestaurantsList {
  citySlug: string,
  uuid: string,
  title: string,
  heroImageUrl: string,
  categories: Array<string>,
  etaRange: { text: string },
  feedItems: object,
  itemUuid: object,
  slug: string,
};

export interface IRestaurantsListPage {
  isLoading: boolean;
  locationId: string | null;
  loadRestaurantsList (value: string | null): void;
  restaurantsList: Array<IRestaurantsList>;
  currentHash: string;
};

export interface IMenuItem {
  restaurant: IRestaurant;
  isLoading: boolean;
  menuItem: IRestaurant &
    { imageUrl: string, itemDescription: string, customizationsList: Customization[] };
  increaseCounter (): void;
  decreaseCounter (): void;
  setaddPrice (value: addPrice[]): void;
  setCounter (value: number): void;
  loadMenuItem (value: string): void;
  setHasWarning (hasWarning: boolean): void;
  resetaddPrice (): void;
  addItemToBasket (
    hasWarning: boolean,
    uuid: string,
    title: string,
    restaurant: IRestaurant,
    customization: number,
    price: number,
    customInfo: addPrice[],
    basket: basket[]): void
  editItemInBasket (
    uuid: string,
    title: string,
    restaurant: IRestaurant,
    counter: number,
    price: number,
    customInfo: addPrice[]): void
  setCustomPrice (price: number,
    subtitle: string,
    type: string,
    customItem: string,
    uuid: string): void;
  counter: number;
  fullPrice: number;
  hasError?: boolean;
  isEditable: boolean;
  setIsEditable (value: boolean): void,
  removeItem (basketItemId: number): void,
  customInfo: addPrice[],
  basket: basket[],
  basketItemId: number,
  hasWarning: boolean,
};

export interface IBasket {
  basket?: basket[],
  isBasketSHown?: boolean,
  fullPrice?: number,
  increaseItem? (basketItemId: number): void,
  decreaseItem? (basketItemId: number, count: number): void,
  hideBasket? (): void,
  removeItem? (basketItemId: number): void,
  setIsEditable? (value: boolean): void,
  setBasketItemId? (basketItemId: number): void,
  setRestaurantNotes? (restaurantNotes: string, basketItemId: number): void,
  setUtensils? (basketItemId: number): void,
  isUtensilsRequested?: boolean,
};

export interface IRestaurant {
  heroImageUrls: Array<{ url: string }>,
  priceBucket: string,
  title: string,
  uuid: string,
  categories: Array<String>
  location: {
    address: string,
    country: string,
  }
  sections: any[],
  sectionsMap: Array<{
    title: string,
    itemUuids: Array<string>,
  }>,
  entitiesMap: Array<{
    title: string,
    imageUrl: string,
    description: string,
    price: string,
  }>
};

export interface IRestaurantPage {
isLoading: boolean;
loadRestaurant (value: string): void;
restaurant: IRestaurant;
locationId: string | null;
};

export interface ILocationState {
  locationList: locationList | null,
  location: string | null,
};
export interface IBasketState {
  basket: basket[],
  isBasketShown: boolean,
  basketItemTitle: string,
  basketItemId: number,
  basketItemCount: string,
  restaurantNotes: string,
  isUtensilsRequested: boolean,
}
export interface IcustomState {
  counter: number
  currentPrice: number
  addPrice: addPrice[],
  isChecked: boolean,
  isEditable: boolean,
};
export interface IInput {
  iconUrl?: string,
  value?: string,
  onChange? (e: React.ChangeEvent<HTMLInputElement>): void,
  setLocation (value: string): void,
  type?: string,
  placeholder?: string,
  name?: string,
  isSmall?: boolean,
  label?: string,
  className?: string,
  locationList?: locationList | null,
  location?: string,
  restaurantsList?: IRestaurantsList[],
  isLoading?: boolean,
  locationId?: string | null,
};

export interface IHeader {
  setTime (value: number): void,
  setSearch (value: string): void,
  showBasket (): void,
  toggleSearch (): void,
  toggleDelivery (): void,
  isSearchVisible: boolean,
  isDeliveryVisible: boolean,
  closeMobile (): void,
  locationId: string | null,
  basket: basket[],
  isBasketShown: boolean,
  totalCount: number,
};

export interface IRestaurantCard {
  imageUrl: string,
  title: string,
  categories: Array<string>,
  etaRange: string,
  uuid: string,
};

export type Thunks<ReturnType = void> =(
  ThunkAction<ReturnType, RootState, unknown, Action<string>>);

export type Actions = setUuidAction |
  setRestaurantAction |
  setRestaurantsListAction |
  inputActionTypes |
  loadActionTypes |
  setMenuItemAction |
  addPriceToggleAction |
  addPriceCheckboxAction |
  setSubtitleAction |
  setCustomItemAction |
  increaseCounterAction |
  decreaseCounterAction |
  setCurrentPriceAction |
  setHasErrorAction |
  setLocationListAction |
  setLocationAction |
  addItemInBasketAction |
  setaddPriceAction |
  setCounterAction |
  showBasketAction |
  hideBasketAction |
  increaseCounterBasketAction |
  decreaseCounterBasketAction |
  setBasketItemTitleAction |
  removeItemAction |
  setIsEditableAction |
  editItemAction |
  setBasketItemIdAction |
  setHasWarningAction |
  resetBasketAction |
  resetaddPriceAction |
  setBasketItemCountAction |
  setRestaurantNotesAction |
  setUtensilsAction;

export type Customization = {
  title: string,
  maxPermitted: number,
  options: any[],
};

export type RootState = ReturnType<typeof reducer>

export type Handler = {
  (value: any, name: string): any,
};

export type HistoryReplacer = {
  (history: History): string
};

export type debounce = {
 (f: any, delay: number): any,
};

export type MatchParams = {
  uuid: string;
  itemUuid: string;
};
