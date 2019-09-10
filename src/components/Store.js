/*eslint-disable*/
import { createStore } from 'redux';

const initialState = {
  city: "",
  currency: "",
  initialStores: [],
  stores: [],
};

const reduser = (state, action) => {
  switch (action.type) {
    case 'Load':
      return {
        ...state,
        city: action.value.citySlug,
        currency: action.value.currencyCode,
        initialStores: Object.entries(action.value.storesMap).map((e) => ( e[1] )),
        stores: Object.entries(action.value.storesMap).map((e) => ( e[1] )),
      };
    case 'SearchFilter':
      return {
        ...state,
        stores: state.initialStores.filter(store => store.title.toLowerCase().includes(action.value.toLowerCase()))
      };
    default:
      return state;
  }
};

export const loadStores = value => ({type: 'Load', value});
export const filterStores = value => ({type: 'SearchFilter', value});


export const Store = createStore(reduser, initialState);
