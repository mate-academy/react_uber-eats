import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { RestaurantsListPage } from './RestaurantsListPage';
import { selectRestaurantsList } from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
});

const Enhanced
  = connect(mapStateToProps, { loadRestaurants })(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
