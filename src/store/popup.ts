import { CLOSE_POPUP, OPEN_POPUP } from "./actions";
import { Action } from "redux";

type Close = Action<typeof CLOSE_POPUP>;
type Open = Action<typeof OPEN_POPUP>;

type GeneralType = Close | Open;

const reducer = (status = false, actions: GeneralType) => {
  switch (actions.type) {
    case OPEN_POPUP:
      return true;

    case CLOSE_POPUP:
      return false;

    default:
      return status;
  }
};

export default reducer;
