import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurantInfo } from '../../store/actions';
import {
  selectPageMainImgUrl,
  selectRestPageSectionsAsObj,
  selectObjOfSectionItems,
  selectRestaurantTitle,
  selectRestaurantAddress,
  selectRestaurantEtaRange,
  selectRestaurantCuisineList,
} from '../../store/selectors';

const ImprovedRestaurantPage = connect(
  state => ({
    isLoading: state.isLoading,
    pageMainImgUrl: selectPageMainImgUrl(state),
    pageFoodSections: selectRestPageSectionsAsObj(state),
    objOfSectionItems: selectObjOfSectionItems(state),
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
