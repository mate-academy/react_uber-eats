import { combineReducers } from 'redux';
import { headerReducer } from './reducers/headerReducer';
import { restaurantReducer } from './reducers/restaurantReducer';

export const rootReducer = combineReducers({
  header: headerReducer,
  restaurant: restaurantReducer,
});
