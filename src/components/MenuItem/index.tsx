import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import  MenuItem from './MenuItem';
import {
  getMenuItem,
  getIsLoading,
  getRestaurant,
  getCounter,
  getCurrentPrice,
  getHasError,
  getIsEditable,
  getCustomInfo,
  getBasket,
  getBasketItemId,
  getHasWarning,
} from '../../store/selectors';
import {
  loadMenuItem,
  setCustomPrice,
  addItemToBasket,
  editItemInBasket
} from '../../store/thunks'
import { RootState, Actions, addPrice, IRestaurant } from '../../types'
import {
  increaseCounter,
  decreaseCounter,
  setHasError,
  setCounter,
  setaddPrice,
  setIsEditable,
  removeItem,
  setHasWarning,
  resetaddPrice,
} from '../../store/actions';

const mapStateToProps = (state: RootState) => ({
  menuItem: getMenuItem(state),
  isLoading: getIsLoading(state),
  restaurant: getRestaurant(state),
  counter: getCounter(state),
  fullPrice: getCurrentPrice(state),
  hasError: getHasError(state),
  hasWarning: getHasWarning(state),
  isEditable: getIsEditable(state),
  customInfo: getCustomInfo(state),
  basket: getBasket(state),
  basketItemId: getBasketItemId(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
    resetaddPrice: () => dispatch(resetaddPrice()),
    setHasError: (value: boolean) => dispatch(setHasError(value)),
    setHasWarning: (hasWarning: boolean) => (
      dispatch(setHasWarning(hasWarning))
    ),
    loadMenuItem: (itemUuid: string) => dispatch(loadMenuItem(itemUuid)),
    setCounter: (value: number) => dispatch(setCounter(value)),
    setaddPrice: (value: addPrice[]) => dispatch(setaddPrice(value)),
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    setIsEditable: (value: boolean) => dispatch(setIsEditable(value)),
    removeItem: (basketItemId: number) => dispatch(removeItem(basketItemId)),
    editItemInBasket: (
      uuid: string,
      title: string,
      restaurant: IRestaurant,
      customization: number,
      price: number,
      customInfo:addPrice[],
      ) => (
        dispatch(
          editItemInBasket(
            uuid,
            title,
            restaurant,
            customization,
            price,
            customInfo
          )
        )
      ),

    setCustomPrice: (
      price: number,
      subtitle: string,
      type: string,
      customItem: string) =>(
        dispatch(setCustomPrice(price, subtitle, type, customItem))),

    addItemToBasket: (
      hasWarning: boolean,
      uuid: string,
      title: string,
      restaurant: IRestaurant,
      customization: number,
      price: number,
      customInfo:addPrice[],
      ) => (
        dispatch(
          addItemToBasket(
            hasWarning,
            uuid,
            title,
            restaurant,
            customization,
            price,
            customInfo
          )
        )
      )
  });

const connectedMenuItem = connect(
  mapStateToProps, mapDispatchToProps
)(MenuItem);

export { connectedMenuItem as MenuItem };
