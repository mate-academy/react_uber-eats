import { connect } from 'react-redux';
import Header from './Header';
import { setAddress, setTime, setSearch } from '../../store/inputReducer';

const mapDispatchToProps = dispatch => ({
  setAddress: value => dispatch(setAddress(value)),
  setTime: value => dispatch(setTime(value)),
  setSearch: value => dispatch(setSearch(value)),
});

const connectedHeader = connect(null, mapDispatchToProps)(Header);

export { connectedHeader as Header };
