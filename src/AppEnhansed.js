import { connect } from 'react-redux';
import { App } from './App';
import {
  selectorRestaurants,
} from './store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectorRestaurants(state),
  };
}

const Enhanced = connect(
  mapState2Props,
)(App);

export { Enhanced as App };
