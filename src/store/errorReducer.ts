import { SET_HAS_ERROR, Actions } from "../types";

const errorReducer = (state = false, action: Actions) => {
  switch (action.type) {
    case SET_HAS_ERROR: return action.hasError

    default: return state;
   }
};

export default errorReducer;
