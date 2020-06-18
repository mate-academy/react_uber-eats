import {
  ADD_TO_CART,
  DEL_FROM_CART,
  CHANGE_GOOD_COUNT,
  CLEAR_CART,
} from "./actions";
import { Action } from "redux";

type Add = Action<typeof ADD_TO_CART> & {
  id: string;
};

type Delete = Action<typeof DEL_FROM_CART> & {
  id: string;
};

type Change = Action<typeof CHANGE_GOOD_COUNT> & {
  path: number;
  id: string;
};

type ClearCart = Action<typeof CLEAR_CART>;

type GeneralType = Add | Delete | Change | ClearCart;

let initState: Cart[] = [];

if (localStorage.getItem("cartItem")) {
  initState = [...JSON.parse(localStorage.getItem("cartItem") || "")];
}

const reducer = (cart = initState, actions: GeneralType) => {
  switch (actions.type) {
    case ADD_TO_CART: {
      if (actions.id) {
        return [
          ...cart,
          {
            id: actions.id,
            count: 1,
          },
        ];
      } else {
        return cart;
      }
    }

    case DEL_FROM_CART:
      return cart.filter((good) => good.id !== actions.id);

    case CHANGE_GOOD_COUNT:
      return cart.map((good) => ({
        ...good,
        count: good.id === actions.id ? good.count + actions.path : good.count,
      }));

    case CLEAR_CART:
      return [];

    default:
      return cart;
  }
};

export default reducer;
