import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTIONS_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        restaurantsListData: action.restaurants,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
