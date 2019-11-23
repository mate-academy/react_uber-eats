import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootsReducer } from './rootsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

export const store = createStore(
  rootsReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);
