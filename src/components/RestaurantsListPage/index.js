import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { selectRestaurantsList } from '../../store/selectors';
import { loadRestaurants } from '../../store/actions';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps, mapDispatchToProps
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
