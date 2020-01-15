import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import restaurantsReducer from './restaurants';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
