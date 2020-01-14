import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
}) => {
  const rootClass = `control ${className}`;

  return (
    <div className={rootClass}>
      {!!iconUrl
        && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="control__input"
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
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};

export default Input;
