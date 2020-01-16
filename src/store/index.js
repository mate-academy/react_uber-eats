import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as actionCreater from './action';

const initialState = {
  restaurantsListData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreater.ACTION_TYPES_SAVE_RESTAURANT:
      return ({
        ...state,
        restaurantsListData: action.payload,
      });
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
