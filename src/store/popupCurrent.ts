import { SET_POPUP_ID, DELETE_POPUP_ID } from "./actions";
import { Action } from "redux";

type SetPopup = Action<typeof SET_POPUP_ID> & {
  id: string;
};

type DeletePopup = Action<typeof DELETE_POPUP_ID>;

type GeneralType = SetPopup | DeletePopup;

const reducer = (id = null as string | null, actions: GeneralType) => {
  switch (actions.type) {
    case SET_POPUP_ID:
      return actions.id;

    case DELETE_POPUP_ID:
      return null;

    default:
      return id;
  }
};

export default reducer;
