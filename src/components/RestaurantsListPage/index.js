import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);
