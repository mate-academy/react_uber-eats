import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Circle } from '../styledComponents';

import ModalMenuOption from '../ModalMenuOption';
import Loading from '../Loading';

import './modal.scss';
import './custom.scss';
import './add.scss';

import closeIcon from './img/closeIcon.svg';

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items';

const Modal = ({ product, closeModal }) => {
  const [content, setContent] = useState({ customizationsList: [] });
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(+product.price);
  const [isLoading, setIsLoading] = useState(true);
  const [amountOfChosenOptions, setAmountOfChosenOptions] = useState([]);

  useEffect(() => {
    fetch(`${URL}/${product.uuid}`)
      .then(response => response.json())
      .then(({ data }) => {
        setContent(data);

        setAmountOfChosenOptions(data.customizationsList.map(list => ({
          uuid: list.uuid,
          amountOfChosen: 0,
        })));
      })
      .finally(() => setIsLoading(false));

    document.body.style.overflowY = 'hidden';
    document.addEventListener('keyup', closeOnEsc);

    return () => {
      document.body.style.overflowY = 'visible';
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, []);

  const closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const configureQuantity = (side) => {
    setTotalPrice(totalPrice + product.price * side);
    setQuantity(quantity + 1 * side);
  };

  const howManyToChoose = (min, max) => {
    if (min === max) {
      return `Choose ${min}`;
    }

    if (min === 0) {
      return `Choose up to ${max}`;
    }

    return `Choose ${min} to ${max}`;
  };

  const calculateTotalPrice = (change) => {
    setTotalPrice(totalPrice + change);
  };

  const totalAmountOfChosen = amountOfChosenOptions
    .reduce((s, { amountOfChosen }) => amountOfChosen + s, 0);
  const minTotalAmount = content.customizationsList
    .reduce((s, { minPermitted }) => s + minPermitted, 0);
  const maxTotalAmount = content.customizationsList
    .reduce((s, { maxPermitted }) => s + maxPermitted, 0);

  return (
    // eslint-disable-next-line
    <div
      className="modal"
      onClick={e => e.target === e.currentTarget && closeModal()}
    >
      <article className="modal__content">
        <button
          type="button"
          className="modal__close"
          onClick={closeModal}
        >
          <img src={closeIcon} alt="close icon" />
        </button>

        {product.image
        && (
          <img
            src={product.image}
            alt={product.title}
            className="modal__img"
          />
        )}

        <div className="modal__container">
          <h1 className="modal__title">{product.title}</h1>
          <p className="modal__description">{product.description}</p>
        </div>

        {isLoading && <Loading isSmall />}

        {content.customizationsList.map(list => (
          <section key={list.uuid} className="custom">
            <div className="custom__head">
              <h2 className="custom__title">{list.title}</h2>
              <p className="custom__quantity">
                {howManyToChoose(list.minPermitted, list.maxPermitted)}
              </p>
            </div>

            <div className="custom__items">
              {list.options.map(option => (
                <ModalMenuOption
                  key={option.uuid}
                  option={option}
                  calculateTotalPrice={calculateTotalPrice}
                  isRadio={list.minPermitted === 1
                    && list.minPermitted === list.maxPermitted}
                  listUuid={list.uuid}
                  maxTotalAmount={maxTotalAmount}
                  maxListAmount={list.maxPermitted}
                  amountOfChosenOptions={amountOfChosenOptions}
                  setAmountOfChosenOptions={setAmountOfChosenOptions}
                />
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="custom__head custom__title">
            Special instructions
          </h2>
          <input
            className="custom__comment"
            type="textarea"
            placeholder="Leave a note to kitchen"
          />
        </section>

        <div className="add">
          <Circle
            disabled={quantity === 1}
            onClick={() => configureQuantity(-1)}
          >
            -
          </Circle>
          <span className="add__quantity">{quantity}</span>
          <Circle
            onClick={() => configureQuantity(1)}
          >
            +
          </Circle>

          <button
            type="button"
            className="add__submit"
            onClick={closeModal}
            disabled={totalAmountOfChosen < minTotalAmount}
          >
            Add
            {' '}
            {quantity}
            {' '}
to order
            <span className="add__total">
              {(totalPrice / 100).toFixed(2)}
              {' '}
GPB
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
