import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';
import { CardItem } from '../CardItem';

export const Section = ({ category, restaurantItems }) => {
  const { title, uuid } = category;
  const items = restaurantItems
    .find(item => item.uuid === category.uuid).itemUuids;

  return (
    <>
      <h2 className="title-categories">{title}</h2>
      <section id={uuid} className="section">
        {items.map(item => <CardItem {...item} />)}
      </section>
    </>
  );
};

Section.propTypes = {
  category: PropTypes.shape().isRequired,
  restaurantItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
