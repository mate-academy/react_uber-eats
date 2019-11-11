import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurantInfo, loadLocationsVariants } from '../../store/actions';
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
    locationsVariants: state.locationsVariants,
  }),
  {
    loadRestaurantInfo,
    loadLocationsVariants,
  }
)(RestaurantPage);

export {
  ImprovedRestaurantPage as RestaurantPage,
};
