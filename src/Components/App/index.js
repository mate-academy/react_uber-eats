import { connect } from 'react-redux';
import { App } from './App';

const ImprovedApp = connect(
  state => ({
    itemId: state.itemId,
  })
)(App);

export {
  ImprovedApp as App,
};
