import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const composeEnhancers = window.__REACT_DEVTOOLS_EXTANTION_COMPOSE__ || compose;
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
