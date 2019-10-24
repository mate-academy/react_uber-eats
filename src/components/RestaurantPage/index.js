import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurantPage } from '../../store/actions';
import {
  selectRestaurantPageData,
  selectResorauntSections,
} from '../../store/selector';

const mapStateToProps = state => ({
  restaurantPageData: selectRestaurantPageData(state),
  restaurantSections: selectResorauntSections(state),
});

const mapDispatchToProps = {
  loadRestaurantPage,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantPage);

export { Enhanced as RestaurantPage };
