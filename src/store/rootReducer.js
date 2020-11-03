import { combineReducers } from 'redux';
import { headerReducer } from './reducers/headerReducer';
import { restaurantListReducer } from './reducers/restaurantListReducer';
import { restaurantReducer } from './reducers/restaurantReducer';
import { menuItemReducer } from './reducers/menuItemReducer';

export const rootReducer = combineReducers({
  header: headerReducer,
  restaurantList: restaurantListReducer,
  restaurant: restaurantReducer,
  menuItem: menuItemReducer,
});
