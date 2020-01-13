import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  loadingError: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      return {
        ...state,
        loadingError: null,
        restaurantsListData: action.payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR:
      return {
        ...state,
        loadingError: action.payload,
        restaurantsListData: null,
      };

    case ACTION_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
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
