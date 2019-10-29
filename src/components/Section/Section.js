import React from 'react';
import PropTypes from 'prop-types';

import { CardItem } from '../CardItem';

import './Section.scss';

export const Section = ({ category, restaurantItems }) => {
  const { title, uuid } = category;
  const items = restaurantItems
    .find(item => item.uuid === category.uuid).itemUuids;

  return (
    <>
      <h2 className="title-categories">{title}</h2>
      <section id={uuid} className="section">
        {items.map(item => <CardItem {...item} key={item.uuid} />)}
      </section>
    </>
  );
};

Section.propTypes = {
  category: PropTypes.shape({
    uuid: PropTypes.string,
    tittle: PropTypes.string,
  }).isRequired,
  restaurantItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
