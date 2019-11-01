import React from 'react';
import PropTypes from 'prop-types';

export const OrderCustomizationsOptions = ({ option }) => {
  const { title } = option;

  return (
    <div className="option">
      <label htmlFor="input-option">
        <input id="input-option" type="checkbox" />
        {title}
      </label>
    </div>
  );
};

OrderCustomizationsOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};
