import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.scss';

export const ModalWindow = () => {
  return (
    <div className="modal-window__container modal-window">
      <div className="modal-window__content menu">
        <img src="" alt="" />
        <h2 className="menu__title">STAR CHEESE Burger</h2>
        <p className="menu__recipe">Cheddar cheese, Boston lettuce, tomatoes, onion, pickles and firm sauce 275 g.</p>
        <div className="menu__item">
          <h3>Double Meat</h3>
          <p>Choose up to 1</p>
        </div>
        <div className="menu__points points">
          <div className="points__name">
            <input type="checkbox" />
            <p>Cheddar</p>
          </div>
          <p>+£0.68</p>
        </div>

        <p>Special instructions</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <div className="menu__order-container order">
          <div className="order__minus"></div>
          <p>1</p>
          <div className="order__plus"></div>
          <div className="order__add">
            <p>Add 1 to order</p>
            <p>139,00 UAH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
