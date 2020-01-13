import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataFromServerReducer from './dataFromServer';

export const getRestaurants = (store) => {
  const { dataFromServer } = store;

  if (!dataFromServer) {
    return [];
  }

  const { feedItems, storesMap } = dataFromServer;

  return feedItems.map(({ uuid }) => storesMap[uuid]);
};

const rootReducer = combineReducers({
  dataFromServer: dataFromServerReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
