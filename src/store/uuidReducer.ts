import { SET_UUID, Actions } from "../types";

const uuidReducer = (state = "", action: Actions) => {
  switch (action.type) {
    case SET_UUID:
      return action.currentUuid;
    default:
      return state;
  }
};

export default uuidReducer;
