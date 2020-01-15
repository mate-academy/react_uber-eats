import React, { useState, createRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

const Input = ({
  iconUrl, value, onChange, type, placeholder, name, className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = createRef();

  const handleFocus = useCallback(
    () => {
      setIsFocused(true);
    }, [],
  );

  const handleBlur = useCallback(
    () => {
      setIsFocused(false);
    }, [],
  );

  const focusInput = () => {
    inputRef.current.focus();
  };

  const rootClass = cn('control', {
    'control--focused': isFocused,
    [className]: !!className,
  });

  return (
    <div
      className={rootClass}
      onClick={focusInput}
      role="presentation"
    >
      {!!iconUrl
        && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        placeholder={placeholder}
        className="control__input"
      />
    </div>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};

export default Input;
