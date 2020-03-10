import { save } from "redux-localstorage-simple";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware } from "connected-react-router";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import inputReducer from "./inputReducer";
import restaurantsListReducer from "./restaurantsListReducer";
import loadReducer from "./loadReducer";
import uuidReducer from "./uuidReducer";
import restaurantReducer from "./restaurantReducer";
import menuItemReducer from "./menuItemReducer";
import customizationReducer from "./customizationReducer";
import errorReducer from "./errorReducer";
import locationReducer from "./locationReducer";
import basketReducer from "./basketReducer";
import warningReducer from "./warningReducer";

export const history = createBrowserHistory();

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    restaurantsList: restaurantsListReducer,
    input: inputReducer,
    isloading: loadReducer,
    currentUuid: uuidReducer,
    restaurant: restaurantReducer,
    menuItem: menuItemReducer,
    customization: customizationReducer,
    hasError: errorReducer,
    location: locationReducer,
    basket: basketReducer,
    hasWarning: warningReducer,
  });

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      composeWithDevTools(
        applyMiddleware(...middlewares, routerMiddleware(history)),
      ),
    ),
  );
  return store;
}

export const reducer = combineReducers({
  router: connectRouter(history),
  restaurantsList: restaurantsListReducer,
  input: inputReducer,
  isloading: loadReducer,
  currentUuid: uuidReducer,
  restaurant: restaurantReducer,
  menuItem: menuItemReducer,
  customization: customizationReducer,
  hasError: errorReducer,
  location: locationReducer,
  basket: basketReducer,
  hasWarning: warningReducer,
});

const middlewares = [thunk, save({ debounce: 500 })];
