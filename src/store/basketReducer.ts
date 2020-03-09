import { ADD_ITEM_IN_BASKET,
  Actions,
  IBasketState,
  SHOW_BASKET,
  HIDE_BASKET,
  INCREASE_COUNTER_BASKET,
  DECREASE_COUNTER_BASKET,
  SET_BASKET_ITEM_TITLE,
  REMOVE_ITEM,
  EDIT_ITEM,
  SET_BASKET_ITEM_ID,
  RESET_BASKET,
  SET_BASKET_ITEM_COUNT,
  SET_RESTAURANT_NOTES,
  SET_UTENSILS,
  basket
} from '../types';

const initialState: IBasketState = {
  basket: [],
  isBasketShown: false,
  basketItemTitle: '',
  basketItemId: 0,
  isUtensilsRequested: false,
  basketItemCount: '',
  restaurantNotes: '',
}
const basketReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_ITEM_IN_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.basket]
      }
    case SHOW_BASKET:
      return {
        ...state,
        isBasketShown: true,
      }
    case HIDE_BASKET:
      return {
        ...state,
        isBasketShown: false,
      }
      case SET_UTENSILS:
        return {
          ...state,
          basket: state.basket
            .map((elem: basket) => {
              return elem.id === action.basketItemId
              ? {
                ...elem,
                utensils: !elem.utensils,
               }
              : elem;
            })      }
    case INCREASE_COUNTER_BASKET:
      return {
        ...state,
        basket: state.basket
          .map((elem: basket) => {
            return elem.id === action.basketItemId
            ? {
              ...elem,
              count: ++elem.count,
             }
            : elem;
          })
      }
      case DECREASE_COUNTER_BASKET:
        return {
          ...state,
          basket: state.basket
          .map((elem: basket) => {
            return elem.id === action.basketItemId
            ? {
              ...elem,
              count: --elem.count,
             }
            : elem;
          })
        }
      case SET_BASKET_ITEM_COUNT:
      return {
        ...state,
        basket: state.basket
          .map((elem: basket) => {
            return elem.id === action.basketItemId
            ? {
              ...elem,
              count: +action.basketItemCount,
             }
            : elem;
          })
      }
      case SET_BASKET_ITEM_ID:
        return {
          ...state,
          basketItemId: action.basketItemId,
        }
      case SET_BASKET_ITEM_TITLE:
        return {
          ...state,
          basketItemTitle: action.basketItemTitle,
        }
      case REMOVE_ITEM:
        return {
          ...state,
            basket: state.basket
              .filter((elem) => elem.id !== action.basketItemId)
        }
      case EDIT_ITEM:
        return {
          ...state,
          basket: state.basket
          .map((elem: basket) => {
            return elem.id === state.basketItemId
            ? { ...action.basket, id: elem.id }
            : elem;
          })
        }
      case SET_RESTAURANT_NOTES:
        return {
          ...state,
          basket: state.basket
          .map((elem: basket) => {
            return elem.id === state.basketItemId
            ? { ...elem, restaurantNotes: action.restaurantNotes }
            : elem;
          })
        }
      case RESET_BASKET:
        return {
          ...state,
          basket: [] as basket[],
        }
    default: return state;
  }
}
export default basketReducer;
