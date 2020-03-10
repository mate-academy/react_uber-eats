import {
  ADD_PRICE_TOGGLE,
  ADD_PRICE_CHECKBOX,
  Actions,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_CURRENT_PRICE,
  IcustomState,
  SET_COUNTER,
  SET_ADD_PRICE,
  SET_IS_EDITABLE,
  RESET_ADD_PRICE,
  addPrice,
} from "../types";

const initialState: IcustomState = {
  counter: 1,
  currentPrice: 0,
  addPrice: [],
  isChecked: false,
  isEditable: false,
};

const customizationReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_PRICE_TOGGLE:
      if (
        state.addPrice.find((elem: addPrice) =>
          elem.subtitle.includes(action.addPrice.subtitle),
        )
      )
        return {
          ...state,
          addPrice: [
            ...state.addPrice.filter(
              (elem: addPrice) => elem.subtitle !== action.addPrice.subtitle,
            ),
            action.addPrice,
          ],
        };
      return {
        ...state,
        addPrice: [...state.addPrice, action.addPrice],
      };

    case ADD_PRICE_CHECKBOX:
      if (
        state.addPrice.find((elem: addPrice) =>
          elem.customItem.includes(action.addPrice.customItem),
        )
      )
        return {
          ...state,
          addPrice: [
            ...state.addPrice.filter(
              (elem: addPrice) =>
                elem.customItem !== action.addPrice.customItem,
            ),
          ].filter((elem: any) => elem.length),
        };
      return {
        ...state,
        addPrice: [...state.addPrice, action.addPrice],
      };
    case DECREASE_COUNTER:
      if (state.counter > 1)
        return {
          ...state,
          counter: --state.counter,
        };
      return state;
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: ++state.counter,
      };
    case SET_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.currentPrice,
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: action.counter,
      };
    case SET_ADD_PRICE:
      return {
        ...state,
        addPrice: action.addPrice,
      };
    case SET_IS_EDITABLE:
      return {
        ...state,
        isEditable: action.isEditable,
      };
    case RESET_ADD_PRICE:
      return {
        ...state,
        addPrice: [],
      };
    default:
      return state;
  }
};

export default customizationReducer;
