import { connect } from 'react-redux';
import { ModalWindow } from './ModalWindow';
import { loadMenuItemInfo, closeModalWindow } from '../../store/actions';
import {
  selectMenuItemMainImgUrl,
  selectMenuItemTitle,
  selectMenuItemDescription,
  selectMenuItemPrice,
  selectCustomizationsList,
} from '../../store/selectors';

const ImprovedModalWindow = connect(
  state => ({
    isOpened: state.modalWindowInfo.isOpened,
    menuIdIsOpened: state.modalWindowInfo.id,
    restaurantId: state.modalWindowInfo.openedWindowId,
    imgUrl: selectMenuItemMainImgUrl(state),
    restaurantTitle: selectMenuItemTitle(state),
    description: selectMenuItemDescription(state),
    customizationsList: selectCustomizationsList(state),
    priceOfOrder: selectMenuItemPrice(state),
    isLoading: state.isLoading,
  }),
  {
    loadMenuItemInfo,
    closeModalWindow,
  }
)(ModalWindow);

export {
  ImprovedModalWindow as ModalWindow,
};
