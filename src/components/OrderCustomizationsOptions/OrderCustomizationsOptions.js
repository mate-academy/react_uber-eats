import React from 'react';
import PropTypes from 'prop-types';

import './OrderCustomizationsOptions.scss';

export const OrderCustomizationsOptions = ({ option }) => {
  const { title, uuid } = option;

  return (
    <div className="option">
      <div className="option__checkbox">
        <input id={uuid} type="checkbox" className="option__checkbox-input" />
        <label htmlFor={uuid} className="option__checkbox-title">{title}</label>
      </div>
    </div>
  );
};

OrderCustomizationsOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    uuid: PropTypes.string,
  })).isRequired,
};
