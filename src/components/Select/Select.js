import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
  name,
}) => (
  <div
    role="presentation"
    className="select"
  >
    <select
      name={name}
      className="select__input"
    >
      <option>English</option>
      <option>Ukrainian</option>

    </select>

    <img
      className="select__icon"
      src="./images/world.svg"
      alt="world"
    />
    <img
      className="select__arrow"
      src="./images/arrow-back.svg"
      alt="arrow back"
    />
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
};

Select.defaultProps = {
};
export default Select;
