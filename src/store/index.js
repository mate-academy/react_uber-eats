import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTION_TYPES } from './action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewarse = [thunk];

const initialState = {
restaurantListData: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        restaurantListData: payload,
      }
    }

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewarse))
);
