const SET_ADDRESS = 'SET_ADDRESS';
const SET_TIME = 'SET_TIME';
const SET_SEARCH = 'SET_SEARCH';
const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
const TOGGLE_DELIVERY = 'TOGGLE_DELIVERY';
const CLOSE_MOBILE = 'CLOSE_MOBILE';

export const toggleSearch = () => ({ type: TOGGLE_SEARCH });
export const toggleDelivery = () => ({ type: TOGGLE_DELIVERY });

export const getIsSearchVisible = state => state.isMobileSearchVisible;
export const getIsDeliveryVisible = state => state.isMobileDeliveryVisible;

export const setAddress = address => ({
  type: SET_ADDRESS,
  address,
});
export const setTime = time => ({
  type: SET_TIME,
  time,
});
export const setSearch = search => ({
  type: SET_SEARCH,
  search,
});
export const closeMobile = () => ({ type: CLOSE_MOBILE });

const initialState = {
  address: '',
  time: '',
  search: '',
  isMobileSearchVisible: false,
  isMobileDeliveryVisible: false,
};

const InputReducer = (state = initialState, action) => {
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
    default: return state;
  }
};

export default InputReducer;
