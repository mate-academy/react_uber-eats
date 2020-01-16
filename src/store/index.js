import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import './styles/index.scss';

const comoseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [thunk];

export const store = createStore(
  rootReducer,
  comoseEnhancers(applyMiddleware(...middleWares))
);
