import { createStore } from 'redux';

const SET_STORES = 'setStores';
const FILTER_STORES = 'filterStores';
const SET_LOCATIONS = 'setLocations';
const SET_LOCATION_VALUE = 'setLocationValue';

export const getStores = state => state.stores;
export const getFilterValue = state => state.filterValue;
export const getLocations = state => state.locations;
export const getLocationValue = state => state.locationValue;

export const setStores = stores => ({ type: SET_STORES, stores });
export const filterStores = value => ({ type: FILTER_STORES, value });
export const setLocations = locations => ({ type: SET_LOCATIONS, locations });
export const setLocationValue = value => ({ type: SET_LOCATION_VALUE, value });

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STORES:
      return {
        ...state,
        stores: action.stores,
      };

    case FILTER_STORES:
      return {
        ...state,
        filterValue: action.value,
      };

    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.locations,
      };

    case SET_LOCATION_VALUE:
      return {
        ...state,
        locationValue: action.value,
      };

    default:
      return state;
  }
};

const initialState = {
  stores: [],
  filterValue: '',
  locations: [],
  locationValue: '',
};

const store = createStore(reducer, initialState);

export default store;
