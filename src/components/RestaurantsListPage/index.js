import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
  };
}

export const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
