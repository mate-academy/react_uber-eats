import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export const Input = (props) => {
  const { iconUrl, value, onChange, type, placeholder, name } = props;

  return (
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
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
};
