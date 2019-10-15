import { connect } from 'react-redux';
import MenuItemDetails from './MenuItemDetails';
import {
  isDataLoadingSelector,
  modalWindowOpenedIDSelector,
  selectCustomizationsList,
  selectMenuItemDescription,
  selectMenuItemError,
  selectMenuItemMainImgUrl,
  selectMenuItemPrice,
  selectMenuItemTitle,
} from '../../store/selectors';
import {
  cleanModalWindowState,
  closeModalWindow,
  loadMenuItemInfo,
} from '../../store/actions';

const ImprovedMenuItemDetails = connect(
  state => ({
    restaurantId: modalWindowOpenedIDSelector(state),
    imgUrl: selectMenuItemMainImgUrl(state),
    restaurantTitle: selectMenuItemTitle(state),
    description: selectMenuItemDescription(state),
    customizationsList: selectCustomizationsList(state),
    priceOfOrder: selectMenuItemPrice(state),
    isLoading: isDataLoadingSelector(state),
    menuItemError: selectMenuItemError(state),
  }),
  {
    loadMenuItemInfo,
    closeModalWindow,
    cleanModalWindowState,
  }
)(MenuItemDetails);

export {
  ImprovedMenuItemDetails as MenuItemDetails,
};
