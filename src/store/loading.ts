import { SET_LOADING } from "./actions";
import { Action } from "redux";

type Loading = Action<typeof SET_LOADING> & {
  status: boolean;
};

const reducer = (loading = false, actions: Loading) => {
  switch (actions.type) {
    case SET_LOADING:
      return actions.status;

    default:
      return loading;
  }
};

export default reducer;
