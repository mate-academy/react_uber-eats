import { createStore } from 'redux';

const SET_STORES = 'setStores';
const FILTER_STORES = 'filterStores';

export const getStores = state => state.stores;
export const getFilterValue = state => state.filterValue;

export const setStores = stores => ({ type: SET_STORES, stores });
export const filterStores = value => ({ type: FILTER_STORES, value });

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

    default:
      return state;
  }
};

const initialState = {
  stores: [],
  filterValue: '',
};

const store = createStore(reducer, initialState);

export default store;
