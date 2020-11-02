import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './RestaurantCard.module.scss';

const RestaurantCard = ({ imageUrl, categories, title, etaRange, uuid }) => (
  <Link
    to={`/restaurant/${uuid}`}
    className={styles.restaurantCard}
  >
    <img
      src={imageUrl}
      alt={title}
      className={styles.img}
    />
    <h2 className={styles.title}>
      {title}
    </h2>
    <div className={styles.categories}>
      {categories.join(' • ')}
    </div>
    <div className={styles.etaRange}>
      {etaRange}
    </div>
  </Link>
);

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};

export default memo(RestaurantCard);
