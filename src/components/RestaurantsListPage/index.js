import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { loadRestaurants } from '../actions';
import { selectRestaurantsList } from '../selectors';

function mapState2Props(state) {
  return {
    restaurantsListData: selectRestaurantsList(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

export const Enchanced = connect(
  mapState2Props,
  mapDispatch2Props
)(RestaurantsListPage);
