import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
