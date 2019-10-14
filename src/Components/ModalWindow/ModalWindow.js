import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export class ModalWindow extends React.Component {
  rootEl = document.createElement('div');

  componentDidMount() {
    const { loadMenuItemInfo, restaurantId } = this.props;

    loadMenuItemInfo(restaurantId);

    document.body.appendChild(this.rootEl);
  }

  componentWillUnmount() {
    document.body.removeChild(this.rootEl);
  }

  render() {
    const {
      imgUrl,
      restaurantTitle,
      description,
      // numberOfItemsToOrder,
      priceOfOrder,
      customizationsList,
      closeModalWindow,
    } = this.props;

    console.log(customizationsList);

    return ReactDom.createPortal(
      <div className="modal-window">
        <div className="modal-window__inner-container">
          <button
            type="button"
            className="modal-window__close-btn"
            onClick={closeModalWindow}
          >
            <img
              src="./images/close-btn.svg"
              alt="close button"
              className="modal-window__close-btn-img"
            />
          </button>
          {
            imgUrl && (
              <div className="modal-window__img-container">
                <img
                  src={imgUrl}
                  alt={restaurantTitle}
                  className="modal-window__main-img"
                />
              </div>
            )
          }
          <div className="modal-window__main-information">
            <div className="modal-window__header">
              <h1 className="modal-window__title">{restaurantTitle}</h1>
              <p className="modal-window__description">
                {description}
              </p>
            </div>
            {
              customizationsList.map(customItem => (
                <div
                  className="modal-window__order-details"
                  key={customItem.uuid}
                >
                  <div className="modal-window__details-header">
                    <h2 className="modal-window__order-title">
                      {customItem.title}
                    </h2>
                    <p className="modal-window__order-restrictions">
                      {`Choose up to ${customItem.maxPermitted}`}
                    </p>
                  </div>
                  {
                    customItem.options.map(option => (
                      customItem.title !== 'Remove'
                        ? (
                          <div
                            className="modal-window__option"
                            key={option.uuid}
                          >
                            <div
                              className="modal-window__option-inner-container"
                            >
                              <button
                                type="button"
                                className="modal-window__add-ingridient-btn"
                              >
                                <img
                                  src="./images/add-button.svg"
                                  alt={`add ${option.title}`}
                                />
                              </button>
                              <p className="modal-window__option-title">
                                {option.title}
                              </p>
                            </div>
                            {
                              option.price !== 0 && (
                                <p className="modal-window__option-price">
                                  {`+ ${option.price} £`}
                                </p>
                              )
                            }
                          </div>
                        )
                        : (
                          <div
                            className="modal-window__option"
                            key={option.uuid}
                          >
                            <div
                              className="modal-window__option-inner-container"
                            >
                              <input
                                type="checkbox"
                                className="modal-window__checkbox-remove"
                              />
                              <p className="modal-window__option-title">
                                {option.title}
                              </p>
                            </div>
                            {
                              option.price !== 0 && (
                                <p className="modal-window__option-price">
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
            <div className="modal-window__footer">
              <div className="modal-window__order-regulations">
                <p className="modal-window__order-amount">
                  Amount:
                </p>
                <div
                  className="modal-window__order-regulations-inner-wrapper"
                >
                  <button
                    type="button"
                    className="modal-window__decrement-btn"
                  >
                    <img
                      src="./images/btn-minus.svg"
                      alt="remove one item"
                      className="modal-window__decrement-btn-img"
                    />
                  </button>
                  <span className="modal-window__number-of-orders">
                    {1}
                  </span>
                  <button
                    type="button"
                    className="modal-window__increment-btn"
                  >
                    <img
                      src="./images/btn-plus.svg"
                      alt="add one item"
                      className="modal-window__increment-btn-img"
                    />
                  </button>
                </div>
              </div>
              <button
                className="modal-window__add-order"
                type="button"
              >
                {`Add 1 to order`}
                <span className="modal-window__price">
                  {`${priceOfOrder} £`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>, this.rootEl
    );
  }
}

ModalWindow.propTypes = {
  imgUrl: PropTypes.string,
  restaurantTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  // numberOfItemsToOrder,
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
  closeModalWindow: PropTypes.func.isRequired,
  loadMenuItemInfo: PropTypes.func.isRequired,
  restaurantId: PropTypes.string.isRequired,
};

ModalWindow.defaultProps = {
  imgUrl: '',
  description: '',
  customizationsList: [],
  priceOfOrder: 0,
};
