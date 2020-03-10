import {
  SET_ADDRESS,
  SET_SEARCH,
  SET_TIME,
  TOGGLE_DELIVERY,
  TOGGLE_SEARCH,
  CLOSE_MOBILE,
  IInputState,
  Actions,
} from "../types";

const initialState: IInputState = {
  address: "",
  time: "",
  search: "",
  isMobileSearchVisible: false,
  isMobileDeliveryVisible: false,
};

const InputReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.time,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        isMobileSearchVisible: !state.isMobileSearchVisible,
        isMobileDeliveryVisible: false,
      };
    case TOGGLE_DELIVERY:
      return {
        ...state,
        isMobileDeliveryVisible: !state.isMobileDeliveryVisible,
        isMobileSearchVisible: false,
      };
    case CLOSE_MOBILE:
      return {
        ...state,
        isMobileDeliveryVisible: false,
        isMobileSearchVisible: false,
      };
    default:
      return state;
  }
};

export default InputReducer;
