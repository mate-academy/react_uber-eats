import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import LoadedDataReducer, { setLoadedData } from './loadedData';
import StoresMapReducer, { setStoresMap } from './storesMap';

const rootReducer = combineReducers({
  loadedData: LoadedDataReducer,
  storesMap: StoresMapReducer,
});

export const getAllDataFromUrl = () => async(dispatch) => {
  const URL = fetch(
    'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants'
  ).then(data => data.json());
  const [objectUrl] = await Promise.all([URL]);

  dispatch(setLoadedData(objectUrl));

  const arrayOfStoresMap = Object.values(objectUrl.data.storesMap);

  dispatch(setStoresMap(arrayOfStoresMap));
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
