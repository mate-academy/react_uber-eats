import { ThunkAction } from 'redux-thunk';
import { reducer } from './store/index';
import { Action } from 'redux';

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

export type setHasErrorAction = {
  type: typeof SET_HAS_ERROR;
  hasError: boolean;
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

export type addPriceToggleAction = {
  type: typeof ADD_PRICE_TOGGLE;
  addPrice: Array<addPrice>;
};

export type addPriceCheckboxAction = {
  type: typeof ADD_PRICE_CHECKBOX;
  addPrice: Array<addPrice>;
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
  itemUuidL: object,
  slug: string,
};

export interface IRestaurantsListPage {
  isLoading: boolean;
  loadRestaurantsList (): void;
  restaurantsList: Array<IRestaurantsList>
};

export interface IMenuItem {
  restaurant: IRestaurant;
  isLoading: boolean;
  menuItem: IRestaurant &
    { imageUrl: string, itemDescription: string, customizationsList: any[] };
  increaseCounter (): void;
  decreaseCounter (): void;
  loadMenuItem (value: string): void;
  getCustomPrice (price: addPrice, subtitle: addPrice, type: string, customItem: addPrice): void;
  counter: number;
  fullPrice: number;
  hasError?: boolean;
};

export interface IRestaurant {
  heroImageUrls: Array<{ url: string }>,
  priceBucket: number,
  title: string,
  categories: Array<String>
  location: {
    address: string,
    country: string,
  }
  sections: Array<any>,
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
};

export interface IInput {
  iconUrl?: string,
  value?: string,
  onChange (e: React.ChangeEvent<HTMLInputElement>): any,
  type?: string,
  placeholder?: string,
  name?: string,
  isSmall?: boolean,
  label?: string,
  className?: string,
};

export interface IHeader {
  setAddress (value: string): void,
  setTime (value: number): void,
  setSearch (value: string): void,
  toggleSearch (): void,
  toggleDelivery (): void,
  isSearchVisible: boolean,
  isDeliveryVisible: boolean,
  closeMobile (): void,
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
  setHasErrorAction;

export type RootState = ReturnType<typeof reducer>

export type Handler = {
  (value: any, name: string): any,
};
export type debounce = {
 (f: any, delay: number): any,
};

export type MatchParams = {
  uuid: string;
  itemUuid: string;
};
