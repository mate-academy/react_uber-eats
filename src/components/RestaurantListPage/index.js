import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/action';
import RestaurantListPage from './RestaurantListPage';
import { selectRestaurantsList } from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestaurantListPage);

export { Enhanced as RestaurantListPage };
