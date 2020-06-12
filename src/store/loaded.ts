import { SET_LOADED } from "./actions";
import { Action } from "redux";

type Loaded = Action<typeof SET_LOADED> & {
  status: boolean;
};

const reducer = (loaded = false, actions: Loaded) => {
  switch (actions.type) {
    case SET_LOADED:
      return actions.status;

    default:
      return loaded;
  }
};

export default reducer;
