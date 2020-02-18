import {
  START_LOADING,
  STOP_LOADING,
  Actions,
} from '../types';


const loadReducer = (state = false, action: Actions) => {
  switch (action.type) {
    case START_LOADING: return true;
    case STOP_LOADING: return false;
    default: return state;
  }
};

export default loadReducer;
