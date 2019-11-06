import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const composeEnhansers
  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhansers(applyMiddleware(...middlewares))
);
