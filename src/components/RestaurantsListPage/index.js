import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';
import RestaurantsListPage from './RestaurantsListPage';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);
