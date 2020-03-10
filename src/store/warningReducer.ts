import { SET_HAS_WARNING, Actions } from "../types";

const warningReducer = (state = false, action: Actions) => {
  switch (action.type) {
    case SET_HAS_WARNING:
      return action.hasWarning;

    default:
      return state;
  }
};

export default warningReducer;
