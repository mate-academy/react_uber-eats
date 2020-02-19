import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { LOAD_SUCCESS, SEARCH_ADDRESS, ACTIVATE_QUERY } from './actions';

const initialState = {
  restaurants: null,
  address: false,
  queryIsActive: false,
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
    default: return state;
  }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
