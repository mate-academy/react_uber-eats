import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

export const Input = (props) => {
  const [isFocused, setFocused] = useState(false);

  const {
    iconUrl, value, onChange, type, placeholder, name, className,
  } = props;

  const inputRef = createRef();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const rootClass = cn('control', {
    'control--focused': isFocused,
    [className]: !!className,
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={rootClass}
      onClick={() => focus()}
      role="presentation"
    >
      {!!iconUrl && (
        <img
          src={iconUrl}
          alt={placeholder}
          className="contor__icon"
        />
      )}
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
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
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
