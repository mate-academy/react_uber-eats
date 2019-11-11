import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ACTION_TYPES } from './actions'

const composeEnhancers = window.__REACT_DEVTOOLS_EXTANTION_COMPOSE__ || compose;
const middlewares = [thunk];

const initialState = {
  restaurantListData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        restaurantListData: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
