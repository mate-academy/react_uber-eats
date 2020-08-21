import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';
import { getRestaurantItems } from '../../store';

import Modal from '../Modal';

import './restaurant-menu.scss';
import './menu-card.scss';

const RestaurantSections = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);

  const sections = useSelector(getRestaurantItems);

  const handleClick = (item) => {
    setChosenItem(item);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <article className="restaurant-menu restaurant__menu">
      {showModal && ReactDOM.createPortal(
        <Modal
          product={chosenItem}
          closeModal={toggleModal}
        />,
        document.body
      )}

      {sections.map(({ uuid, title, items }) => (
        <section key={uuid} id={uuid} className="restaurant-menu__section">
          <h2 className="restaurant-menu__title">{title}</h2>

          <div className="restaurant-menu__cards">
            {items.map(item => (
              // eslint-disable-next-line
              <section
                key={item.uuid}
                className="menu-card"
                onClick={() => handleClick(item)}
              >
                <div className="menu-card__body">
                  <div>
                    <h3 className="menu-card__title">
                      {item.title.slice(0, 60)}
                      {item.title.length >= 60 && '...'}
                    </h3>
                    <p className="menu-card__description">
                      {item.description && item.description.slice(0, 60)}
                      {item.description
                        && item.description.length >= 60
                        && '...'}
                    </p>
                  </div>
                  <p className="menu-card__price">
                    £
                    {' '}
                    {(item.price / 100).toFixed(2)}
                  </p>
                </div>

                {item.image && (
                  <div className="menu-card__rightside">
                    <img
                      className="menu-card__image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};

export default RestaurantSections;
