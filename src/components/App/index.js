import { connect } from 'react-redux';
import { App } from './App';
import { modalWindowOpenedIDSelector } from '../../store/selectors';

const ImprovedApp = connect(
  state => ({
    isOpenedModalWindow: modalWindowOpenedIDSelector(state),
  })
)(App);

export {
  ImprovedApp as App,
};
