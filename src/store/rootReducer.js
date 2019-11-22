import { ACTION_TYPES } from './actions';

const initialState = {
  restourantsListData: null,
  isLoading: false,
  error: null,
};

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.SAVE_RESTOURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restourantsListData: payload,
      };
    }

    case ACTION_TYPES.SET_RESTOURANTS_ERROR: {
      const { payload } = action;
      return {
        ...state,
        error: payload,
        restourantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
