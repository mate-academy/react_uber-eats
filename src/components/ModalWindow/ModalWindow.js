import React from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.scss';

export const ModalWindow = () => (
  <div className="modal-window__container modal-window">
    <div className="modal-window__content menu">
      <img src="./images/modal-img.svg" alt="" className="modal-window__img" />
      <div className="menu__title-wrapper">
        <h2 className="menu__title">
          STAR CHEESE Burger
        </h2>
        <p className="menu__text-grey">
          Cheddar cheese, Boston lettuce, tomatoes,
          onion, pickles and firm sauce 275 g.
        </p>
      </div>

      <div className="menu__background">
        <h3 className="menu__text-black">
          Double Meat
        </h3>
        <p className="menu__text-grey">
          Choose up to 1
        </p>
      </div>
      <div className="menu__points point">
        <div className="point__name">
          <input type="checkbox" className="point__checkbox" />
          <p>
            Cheddar
          </p>
        </div>
        <p className="point__price">
          +£0.68
        </p>
      </div>

      <p className="menu__text-black menu__background">
        Special instructions
      </p>
      <textarea
        className="menu__textarea"
        placeholder="Leave a note to kitchen"
        name="modal"
      />

      <div className="menu__order-container order">
        <div className="order__toggle toggle">
          <div className="toggle__minus" />
          <p>1</p>
          <div className="toggle__plus" />
        </div>
        <div className="order__add add">
          <p className="add-center">Add 1 to order</p>
          <p className="add-right">139,00 UAH</p>
        </div>
      </div>
    </div>
  </div>
);
