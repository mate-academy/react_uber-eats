import { combineReducers } from 'redux';
import { headerReducer } from './reducers/headerReducer';
import { restaurantListReducer } from './reducers/restaurantListReducer';
import { restaurantReducer } from './reducers/restaurantReducer';

export const rootReducer = combineReducers({
  header: headerReducer,
  restaurantList: restaurantListReducer,
  restaurant: restaurantReducer,
});
