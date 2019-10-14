import { connect } from 'react-redux';
import { App } from './App';

const ImprovedApp = connect(
  state => ({
    isOpenedModalWindow: state.modalWindowInfo.isOpened,
  })
)(App);

export {
  ImprovedApp as App,
};
