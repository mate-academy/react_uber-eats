import { HEADER_TYPES } from '../actions/actionTypes';

const initialState = {
  address: '',
  time: '',
  search: '',
  isSearchVisible: false,
  isDeliveryInfoVisible: false,
};

export const headerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HEADER_TYPES.SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };

    case HEADER_TYPES.SET_TIME:
      return {
        ...state,
        time: payload,
      };

    case HEADER_TYPES.SET_SEARCH:
      return {
        ...state,
        search: payload,
      };

    case HEADER_TYPES.SET_IS_SEARCH_VISIBLE:
      return {
        ...state,
        isSearchVisible: payload,
      };

    case HEADER_TYPES.SET_IS_DELIVERY_INFO_VISIBLE:
      return {
        ...state,
        isDeliveryInfoVisible: payload,
      };

    default:
      return state;
  }
};
