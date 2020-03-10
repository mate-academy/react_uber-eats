import { connect } from "react-redux";
import Header from "./Header";
import { ThunkDispatch } from "redux-thunk";
import {
  getIsSearchVisible,
  getIsDeliveryVisible,
  getLocation,
  getBasket,
  getIsBasketShown,
  getTotalCount,
} from "../../store/selectors";
import {
  setTime,
  setSearch,
  toggleDelivery,
  toggleSearch,
  closeMobile,
  showBasket,
} from "../../store/actions";
import { RootState, Actions } from "../../types";

const mapStateToProps = (state: RootState) => ({
  isSearchVisible: getIsSearchVisible(state),
  isDeliveryVisible: getIsDeliveryVisible(state),
  locationId: getLocation(state),
  basket: getBasket(state),
  isBasketShown: getIsBasketShown(state),
  totalCount: getTotalCount(state),
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>,
) => ({
  setTime: (value: string | number) => dispatch(setTime(value)),
  setSearch: (value: string) => dispatch(setSearch(value)),
  toggleSearch: () => dispatch(toggleSearch()),
  toggleDelivery: () => dispatch(toggleDelivery()),
  closeMobile: () => dispatch(closeMobile()),
  showBasket: () => dispatch(showBasket()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const connectedHeader = connector(Header);

export { connectedHeader as Header };
