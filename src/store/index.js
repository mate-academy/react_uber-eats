import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTION_TYPES } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const initialState = {
  restaurantsListData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        restaurantsListData: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
