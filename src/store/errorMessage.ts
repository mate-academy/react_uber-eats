import { SET_MESSAGE } from "./actions";
import { Action } from "redux";

type Message = Action<typeof SET_MESSAGE> & {
  message: string;
};

const reducer = (message = '', actions: Message) => {
  switch (actions.type) {
    case SET_MESSAGE:
      return actions.message;

    default:
      return message;
  }
};

export default reducer;
