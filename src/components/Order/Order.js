import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import { OrderFooter } from '../OrderFooter';
import { OrderCustomizationsSection } from '../OrderCustomizationsSection';

import './Order.scss';

export const Order = ({
  hideModalWindow,
  order,
  isLoading,
  error,
  altData,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  const {
    imageUrl,
    title,
    itemDescription,
    customizationsList = [],
  } = !error ? order : altData;

  const srcImage = imageUrl || './images/no_image.png';
  const srcTitle = title || 'no-image icon';

  return (
    <aside className="modal">
      <div className="modal-window">
        <div className="modal-window__wrapper-img">
          <img
            className="modal-window__img"
            src={srcImage}
            alt={srcTitle}
          />
        </div>
        <div className="modal__wrapper-content">
          <p className="modal-window__title">{title}</p>
          <p className="modal-window__description">{itemDescription}</p>
        </div>
        {customizationsList
          .map(item => (
            <OrderCustomizationsSection customizations={item} key={item.uuid} />
          ))
        }
        <div className="modal__wrapper-content">
          <div className="modal-window__footer">
            <OrderFooter altPrice={altData.price} />
          </div>
        </div>
        <div
          onClick={hideModalWindow}
          onKeyPress={hideModalWindow}
          role="presentation"
        >
          <img
            className="modal-window__button-close"
            src="./images/button-close.svg"
            alt="button close"
            title="close"
          />
        </div>
      </div>
    </aside>
  );
};

Order.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  hideModalWindow: PropTypes.func.isRequired,
  altData: PropTypes.shape().isRequired,
  order: PropTypes.shape(),
};

Order.defaultProps = {
  error: null,
  isLoading: false,
  order: [],
};
