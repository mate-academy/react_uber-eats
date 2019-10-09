import { connect } from 'react-redux';
import { RestaurantListPage } from './RestaurantListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
  };
}

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListPage);

export { Enhanced as RestaurantListPage };
