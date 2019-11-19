import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantListData: null,
  isLoading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS:
      return {
        ...state,
        restaurantListData: action.payload,
        error: null,
      };

      case ACTION_TYPES.SET_LOAD_ERROR:
        return {
          ...state,
          error: action.payload,
          restaurantListData: null
        };

      case ACTION_TYPES.START_LOADING:
        console.log('finish')
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
