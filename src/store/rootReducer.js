import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        error: null,
        restaurantsListData: action.payload,
      };

    case ACTION_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR:
      return {
        ...state,
        error: action.payload,
        restaurantsListData: null,
      };

    case ACTION_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
