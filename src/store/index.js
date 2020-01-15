import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTIONS_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        error: null,
        restaurantsListData: action.restaurants,
      };

    case ACTIONS_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS_TYPES.SET_RESTAURANTS_ERROR:
      return {
        ...state,
        error: action.error,
        restaurantsListData: null,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
