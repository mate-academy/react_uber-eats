import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  LOAD_SUCCESS,
  SEARCH_ADDRESS,
  ACTIVATE_QUERY,
  CHANGE_QUERY,
  TOTAL_RESTAURANTS,
  CHANGE_CURRENT_NUMBER,
  LOAD_RESTAURANT,
  ACTIVATE_MENU,
  TOGGLE_MODAL_WINDOW,
  UUID_MODAL,
} from './actions';

const initialState = {
  restaurants: null,
  restaurant: null,
  restaurantMenu: [],
  address: false,
  queryIsActive: false,
  query: null,
  currentPage: 1,
  restaurantsPerPage: 12,
  totalRestaurants: 20,
  toggleMenu: false,
  togglerModal: false,
  uuidModal: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
      };

    case LOAD_RESTAURANT:
      return {
        ...state,
        restaurant: action.rest,
      };

    case SEARCH_ADDRESS:
      return {
        ...state,
        address: action.bool,
      };

    case ACTIVATE_QUERY:
      return {
        ...state,
        queryIsActive: action.bool,
      };

    case CHANGE_QUERY:
      return {
        ...state,
        query: action.query,
      };

    case TOTAL_RESTAURANTS:
      return {
        ...state,
        totalRestaurants: action.total,
      };

    case CHANGE_CURRENT_NUMBER:
      return {
        ...state,
        currentPage: action.number,
      };

    case ACTIVATE_MENU:
      return {
        ...state,
        toggleMenu: action.menu,
      };

    case TOGGLE_MODAL_WINDOW:
      return {
        ...state,
        togglerModal: action.toggler,
      };

    case UUID_MODAL:
      return {
        ...state,
        uuidModal: action.uuid,
      };

    default: return state;
  }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
