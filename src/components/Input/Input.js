import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  iconUrl,
  name,
  value,
  onChange,
  type,
  placeholder,
}) => (
  <div className="control">
    {!!iconUrl && (
      <img
        src={iconUrl}
        alt={placeholder}
        className="contor__icon"
      />
    )}
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="contor__input"
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
};

export default Input;
