const SET_ADDRESS = 'SET_ADDRESS';
const SET_TIME = 'SET_TIME';
const SET_SEARCH = 'SET_SEARCH';

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

const initialState = {
  address: '',
  time: '',
  search: '',
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
    default: return state;
  }
};

export default InputReducer;
