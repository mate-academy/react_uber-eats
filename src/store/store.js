import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadDataFromServer } from './loadDataFromServer';
import restaurantsReducer, { saveRestaurants } from './restaurantsReducer';
import loadingReducer, { startLoading, stopLoading } from './loadingReducer';
import errorReducer, { setLoadError } from './errorReducer';

export const loadData = () => async(dispatch) => {
  dispatch(startLoading());

  try {
    const restaurants = await loadDataFromServer();

    dispatch(saveRestaurants(restaurants.data));
  } catch (e) {
    dispatch(setLoadError(e.message));
  }

  dispatch(stopLoading());
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export const getRestaurants = (state) => {
  if (!state.restaurants) {
    return [];
  }

  const { feedItems, storesMap } = state.restaurants;

  return feedItems.map(({ uuid }) => storesMap[uuid]);
};

export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
