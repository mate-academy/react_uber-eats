import { connect } from "react-redux";
import Basket from "./Basket";
import { ThunkDispatch } from "redux-thunk";
import {
  getBasket,
  getFullPrice,
  getIsUtensilsRequested,
  getLocation,
} from "../../store/selectors";
import { RootState, Actions } from "../../types";
import {
  increaseItem,
  decreaseItem,
  requestUtensils,
} from "../../store/thunks";
import {
  hideBasket,
  setIsEditable,
  removeItem,
  setBasketItemId,
  setRestaurantNotes,
} from "../../store/actions";

const mapStateToProps = (state: RootState) => ({
  basket: getBasket(state),
  fullPrice: getFullPrice(state),
  isUtensilsRequested: getIsUtensilsRequested(state),
  locationId: getLocation(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>,
) => ({
  setUtensils: (basketItemId: number) =>
    dispatch(requestUtensils(basketItemId)),
  increaseItem: (basketItemId: number) => dispatch(increaseItem(basketItemId)),
  decreaseItem: (basketItemId: number, count: number) =>
    dispatch(decreaseItem(basketItemId, count)),
  hideBasket: () => dispatch(hideBasket()),
  removeItem: (basketItemId: number) => dispatch(removeItem(basketItemId)),
  setIsEditable: (value: boolean) => dispatch(setIsEditable(value)),
  setBasketItemId: (basketItemId: number) =>
    dispatch(setBasketItemId(basketItemId)),
  setRestaurantNotes: (restaurantNotes: string, basketItemId: number) =>
    dispatch(setRestaurantNotes(restaurantNotes, basketItemId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const connectedBasket = connector(Basket);

export { connectedBasket as Basket };
