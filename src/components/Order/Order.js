import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import Error from '../Error';

import './Order.scss';

export const Order = ({
  deleteOrder,
  order,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  const { imageUrl, title, itemDescription } = order;
  const countItem = 1;
  const srcImage = imageUrl || './images/no_image.png';
  const srcTitle = title || 'no-image icon';

  return (
    <aside className="modal">
      <div className="modal-window">
        {error && <Error message={error} />}
        {!error && (
          <>
            <img className="modal-window__img" src={srcImage} alt={srcTitle} />
            <div className="modal-window__wrapper-content">
              <p className="modal-window__title">{title}</p>
              <p className="modal-window__description">{itemDescription}</p>
              <div className="modal-window__footer">
                <div className="counter">
                  <img
                    className="counter__button"
                    src="./images/button-minus.svg"
                    alt="icon minus"
                  />
                  <div className="counter__item">{countItem}</div>
                  <img
                    className="counter__button"
                    src="./images/button-plus.svg"
                    alt="icon plus"
                  />
                </div>
                <button type="button" className="modal-window__button-order">
                  {`Add ${countItem}`}
                </button>
              </div>
            </div>
          </>
        )
        }
        <div
          onClick={deleteOrder}
          onKeyPress={deleteOrder}
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
  deleteOrder: PropTypes.func.isRequired,
  order: PropTypes.shape(),
};

Order.defaultProps = {
  error: null,
  isLoading: false,
  order: [],
};
