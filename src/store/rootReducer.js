import { ACTIONS_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
      };
    }

    case ACTIONS_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTIONS_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTIONS_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
