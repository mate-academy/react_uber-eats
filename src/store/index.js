import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import inputReducer, * as selectors from './inputReducer';
import restaurantsListReducer,
{ setRestaurantsList } from './restaurantsListReducer';
import loadReducer,
{ startLoading, stopLoading } from './loadReducer';
import { getRestaurantsData } from '../Api';

export const getRestaurantsList = ({ restaurantsList }) => (restaurantsList
  ? restaurantsList.feedItems.map(({ uuid }) => restaurantsList.storesMap[uuid])
  : undefined);

export const loadRestaurantsList = () => async(dispatch) => {
  dispatch(startLoading());
  const restaurants = await getRestaurantsData();

  dispatch(setRestaurantsList(restaurants.data));
  dispatch(stopLoading());
};

export const getIsLoading = state => state.isloading;

export const getIsSearchVisible = state => selectors
  .getIsSearchVisible(state.input);

export const getIsDeliveryVisible = state => selectors
  .getIsDeliveryVisible(state.input);

const reducer = combineReducers({
  restaurantsList: restaurantsListReducer,
  input: inputReducer,
  isloading: loadReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
