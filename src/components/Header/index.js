import { connect } from 'react-redux';
import Header from './Header';
import { getIsSearchVisible, getIsDeliveryVisible } from '../../store/index';
import {
  setAddress,
  setTime,
  setSearch,
  toggleDelivery,
  toggleSearch,
  closeMobile,
} from '../../store/inputReducer';

const mapStateToProps = state => ({
  isSearchVisible: getIsSearchVisible(state),
  isDeliveryVisible: getIsDeliveryVisible(state),
});
const mapDispatchToProps = dispatch => ({
  setAddress: value => dispatch(setAddress(value)),
  setTime: value => dispatch(setTime(value)),
  setSearch: value => dispatch(setSearch(value)),
  toggleSearch: () => dispatch(toggleSearch()),
  toggleDelivery: () => dispatch(toggleDelivery()),
  closeMobile: () => dispatch(closeMobile()),
});

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { connectedHeader as Header };
