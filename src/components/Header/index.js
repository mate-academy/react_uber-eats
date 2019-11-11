import { connect } from 'react-redux';
import { Header } from './Header';
import { addCurrentLocation } from '../../store/actions';

const ImprovedHeader = connect(
  state => ({
    locationsVariants: state.locationsVariants,
  }),
  {
    addCurrentLocation,
  }
)(Header);

export {
  ImprovedHeader as Header,
};
