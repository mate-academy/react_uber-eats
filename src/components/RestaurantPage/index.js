import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurantPage } from '../../store/actions';
import {
  selectRestaurantPageData,
  selectResorauntSections,
} from '../../store/selector';

const mapState2Props = state => ({
  restaurantPageData: selectRestaurantPageData(state),
  restaurantSections: selectResorauntSections(state),
});

const mapDispatch2Props = {
  loadRestaurantPage,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props
)(RestaurantPage);

export { Enhanced as RestaurantPage };
