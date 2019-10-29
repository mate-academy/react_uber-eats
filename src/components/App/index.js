import { connect } from 'react-redux';

import { App } from './App';
import {
  selectOrder,
  selectStateModalWindow,
} from '../../store/selector';

const mapStateToProps = state => ({
  order: selectOrder(state),
  modalWindow: selectStateModalWindow(state),
});

const Enhanced = connect(
  mapStateToProps,
)(App);

export { Enhanced as App };
