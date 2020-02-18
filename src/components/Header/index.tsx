import { connect } from 'react-redux';
import Header from './Header';
import { ThunkDispatch } from 'redux-thunk';
import { getIsSearchVisible, getIsDeliveryVisible } from '../../store/selectors';
import {
  setAddress,
  setTime,
  setSearch,
  toggleDelivery,
  toggleSearch,
  closeMobile,
} from '../../store/actions';
import { RootState, Actions } from '../../types';

const mapStateToProps = (state: RootState) => ({
  isSearchVisible: getIsSearchVisible(state),
  isDeliveryVisible: getIsDeliveryVisible(state),
});
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
  setAddress: (value:string) => dispatch(setAddress(value)),
  setTime: (value: string | number) => dispatch(setTime(value)),
  setSearch: (value: string) => dispatch(setSearch(value)),
  toggleSearch: () => dispatch(toggleSearch()),
  toggleDelivery: () => dispatch(toggleDelivery()),
  closeMobile: () => dispatch(closeMobile()),
});

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { connectedHeader as Header };
