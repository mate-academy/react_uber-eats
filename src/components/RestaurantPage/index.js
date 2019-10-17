import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurantInfo } from '../../store/actions';
import {
  selectPageMainImgUrl,
  selectRestaurantSections,
  selectRestaurantTitle,
  selectRestaurantAddress,
  selectRestaurantEtaRange,
  selectRestaurantCuisineList,
  isDataLoadingSelector,
} from '../../store/selectors';

const ImprovedRestaurantPage = connect(
  state => ({
    isLoading: isDataLoadingSelector(state),
    pageMainImgUrl: selectPageMainImgUrl(state),
    pageFoodSections: selectRestaurantSections(state),
    restaurantTitle: selectRestaurantTitle(state),
    restaurantAddress: selectRestaurantAddress(state),
    restaurantEtaRange: selectRestaurantEtaRange(state),
    restaurantCuisineList: selectRestaurantCuisineList(state),
  }),
  {
    loadRestaurantInfo,
  }
)(RestaurantPage);

export {
  ImprovedRestaurantPage as RestaurantPage,
};
