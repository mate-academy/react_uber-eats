import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import inputReducer from './inputReducer';
import restaurantsListReducer from './restaurantsListReducer';
import loadReducer from './loadReducer';
import uuidReducer from './uuidReducer';
import restaurantReducer from './restaurantReducer';
import menuItemReducer from './menuItemReducer';
import customizationReducer from './customizationReducer';
import errorReducer from './errorReducer';
import locationReducer from './locationReducer';

export const reducer = combineReducers({
  restaurantsList: restaurantsListReducer,
  input: inputReducer,
  isloading: loadReducer,
  currentUuid: uuidReducer,
  restaurant: restaurantReducer,
  menuItem: menuItemReducer,
  customization: customizationReducer,
  hasError: errorReducer,
  location: locationReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
