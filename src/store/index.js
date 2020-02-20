import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { LOAD_SUCCESS,
  SEARCH_ADDRESS,
  ACTIVATE_QUERY,
  CHANGE_QUERY,
  TOTAL_RESTAURANTS,
  CHANGE_CURRENT_NUMBER } from './actions';

const initialState = {
  restaurants: null,
  address: false,
  queryIsActive: false,
  query: null,
  currentPage: 1,
  restaurantsPerPage: 12,
  totalRestaurants: 20,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
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
    default: return state;
  }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
