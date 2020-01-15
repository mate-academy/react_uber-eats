import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { LOAD_SUCCESS } from './actions';

const initialState = {
  restaurants: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
    default: return state;
  }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
