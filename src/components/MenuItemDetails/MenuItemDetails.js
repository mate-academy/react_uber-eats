import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { Error } from '../Error';
import './MenuItemDetails.scss';

class MenuItemDetails extends React.Component {
  componentDidMount() {
    const { loadMenuItemInfo, restaurantId } = this.props;

    loadMenuItemInfo(restaurantId);
  }

  componentWillUnmount() {
    const { cleanModalWindowState } = this.props;

    cleanModalWindowState();
  }

  handleClickOutside = (event) => {
    const { closeModalWindow } = this.props;

    closeModalWindow();
  }

  render() {
    const {
      imgUrl,
      restaurantTitle,
      description,
      priceOfOrder,
      customizationsList,
      isLoading,
      menuItemError,
    } = this.props;

    return (
      <div className="menu-item-details">
        {
          imgUrl && (
            <div className="menu-item-details__img-container">
              <img
                src={imgUrl}
                alt={restaurantTitle}
                className="menu-item-details__main-img"
              />
            </div>
          )
        }
        {menuItemError
          ? (
            <div className="menu-item-details__error">
              <Error message={menuItemError} />
            </div>
          )
          : (
            <div className="menu-item-details__main-information">
              <div className="menu-item-details__header">
                <h1 className="menu-item-details__title">{restaurantTitle}</h1>
                <p className="menu-item-details__description">
                  {description}
                </p>
              </div>
              {
                customizationsList.map(customItem => (
                  <div
                    className="menu-item-details__order-details"
                    key={customItem.uuid}
                  >
                    <div className="menu-item-details__details-header">
                      <h2 className="menu-item-details__order-title">
                        {customItem.title}
                      </h2>
                      <p className="menu-item-details__order-restrictions">
                        {`Choose up to ${customItem.maxPermitted}`}
                      </p>
                    </div>
                    {
                      customItem.options.map(option => (
                        customItem.title !== 'Remove'
                          ? (
                            <div
                              className="menu-item-details__option"
                              key={option.uuid}
                            >
                              <div
                                /* eslint-disable-next-line max-len */
                                className="menu-item-details__option-inner-container"
                              >
                                <button
                                  type="button"
                                  /* eslint-disable-next-line max-len */
                                  className="menu-item-details__add-ingridient-btn"
                                >
                                  <img
                                    src="./images/add-button.svg"
                                    alt={`add ${option.title}`}
                                  />
                                </button>
                                <p className="menu-item-details__option-title">
                                  {option.title}
                                </p>
                              </div>
                              {
                                option.price !== 0 && (
                                  <p
                                    className="menu-item-details__option-price"
                                  >
                                    {`+ ${option.price} £`}
                                  </p>
                                )
                              }
                            </div>
                          )
                          : (
                            <div
                              className="menu-item-details__option"
                              key={option.uuid}
                            >
                              <div
                                /* eslint-disable-next-line max-len */
                                className="menu-item-details__option-inner-container"
                              >
                                <input
                                  type="checkbox"
                                  className="menu-item-details__checkbox-remove"
                                />
                                <p className="menu-item-details__option-title">
                                  {option.title}
                                </p>
                              </div>
                              {
                                option.price !== 0 && (
                                  <p
                                    className="menu-item-details__option-price"
                                  >
                                    {`+ ${option.price} £`}
                                  </p>
                                )
                              }
                            </div>
                          )
                      ))
                    }
                  </div>
                ))
              }
              { !isLoading && (
                <div className="menu-item-details__footer">
                  <div className="menu-item-details__order-regulations">
                    <p className="menu-item-details__order-amount">
                  Amount:
                    </p>
                    <div
                    /* eslint-disable-next-line max-len */
                      className="menu-item-details__order-regulations-inner-wrapper"
                    >
                      <button
                        type="button"
                        className="menu-item-details__decrement-btn"
                      >
                        <img
                          src="./images/btn-minus.svg"
                          alt="remove one item"
                          className="menu-item-details__decrement-btn-img"
                        />
                      </button>
                      <span className="menu-item-details__number-of-orders">
                        {1}
                      </span>
                      <button
                        type="button"
                        className="menu-item-details__increment-btn"
                      >
                        <img
                          src="./images/btn-plus.svg"
                          alt="add one item"
                          className="menu-item-details__increment-btn-img"
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    className="menu-item-details__add-order"
                    type="button"
                  >
                    {`Add 1 to order`}
                    <span className="menu-item-details__price">
                      {`${priceOfOrder} £`}
                    </span>
                  </button>
                </div>
              )
              }
            </div>
          )}
      </div>
    );
  }
}

MenuItemDetails.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  restaurantTitle: PropTypes.string,
  description: PropTypes.string,
  priceOfOrder: PropTypes.number,
  customizationsList: PropTypes.arrayOf(PropTypes.shape({
    maxPermitted: PropTypes.number,
    title: PropTypes.string,
    uuid: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      uuid: PropTypes.string,
    })),
  })),
  menuItemError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  cleanModalWindowState: PropTypes.func.isRequired,
  loadMenuItemInfo: PropTypes.func.isRequired,
  restaurantId: PropTypes.string.isRequired,
};

MenuItemDetails.defaultProps = {
  restaurantTitle: '',
  imgUrl: '',
  description: '',
  customizationsList: [],
  priceOfOrder: 0,
  menuItemError: 'Sorry, something went wrong(',
};

export default onClickOutside(MenuItemDetails);
